import {
    Account,
    Avatars,
    Client,
    Databases,
    ID,
    Query,
    Storage,
  } from "react-native-appwrite";
  
  export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    project: "6781741e0030c2d89651",
    locale: "en",
    platform: "com.jsm.aora",
    databaseId: "67817550000a1c0dfe51",
    userCollectionId: "6781756200159a54f2ee",
    videoCollectionId: "6781757d0039e3b6baab",
    storageId: "6781769b0024ddf9e3d1",
  };
  
  // Init your React Native SDK
  const client = new Client();
  
  client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.project); // Your project ID
  
  const account = new Account(client);
  const avatars = new Avatars(client);
  const databases = new Databases(client);
  const storage = new Storage(client);
  
  export const createUser = async (email, password, username) => {
    try {
      const defaultAvatarUrl =
        "https://avatar.iran.liara.run/public/boy?username=Ash";
  
      //----------- Create a new user in Auth ------------
      const userId = ID.unique();
      const user = await account.create(ID.unique(), email, password, username);
      if (!user) {
        throw new Error("Error creating Authuser");
      }
  
      //----------- Create a new user in Database ------------
  
      const createUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
          accountId: user.$id,
          email: email,
          username: username,
          password: password,
          avatar: defaultAvatarUrl,
        }
      );
  
      if (!createUser) {
        throw new Error("Error creating user");
      }
  
      return createUser;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export async function logIn(email, password) {
    const checkUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("email", email), Query.equal("password", password)]
    );
  
    if (!checkUser) {
      throw new Error("Error creating user");
    }
  
    //create user session
    const userSession = await account.createEmailPasswordSession(email, password);
  
    return checkUser;
  }
  
  export const getCurrentUser = async () => {
    try {
      const currentAccount = await account.get();
      if (!currentAccount) throw new Error("Error fetching user");
  
      const currentUser = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        [Query.equal("accountId", currentAccount.$id)]
      );
  
      if (!currentUser) throw new Error("Error fetching user");
  
      return currentUser.documents[0];
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export const getAllPosts = async () => {
    try {
      const posts = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.videoCollectionId
      );
      return posts.documents;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export const getLatestPosts = async () => {
    try {
      const posts = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.videoCollectionId,
        [Query.orderDesc("$createdAt", Query.limit(7))]
      );
      return posts.documents;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export const searchPosts = async (query) => {
    try {
      const posts = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.videoCollectionId,
        [Query.search("title", query)]
      );
      return posts.documents;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export const getUserPosts = async (userId) => {
    try {
      const posts = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.videoCollectionId,
        [Query.equal("creator", userId)]
      );
      return posts.documents;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export const signOut = async () => {
    try {
      const session = await account.deleteSession("current");
      return session;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export const getFilePreview = async (fileId, type) => {
    let fileUrl;
    try {
      if (type === "image") {
        fileUrl = await client.storage.getFileView(
          appwriteConfig.storageId,
          fileId
        );
      } else if (type === "video") {
        fileUrl = await client.storage.getFilePreview(
          appwriteConfig.storageId,
          fileId,
          2000,
          2000,
          "top",
          100
        );
      } else {
        throw new Error("Invalid type");
      }
  
      if (!fileUrl) throw new Error("Error fetching file");
      return fileUrl;
    } catch (error) {
      throw new Error(error);
    }
  };
  export const uploadFile = async (file, type) => {
    if (!file) throw new Error("No file provided");
  
    try {
      const { mimeType, ...rest } = file;
      let asset = { type: mimeType, ...rest };
      try {
        const uploadedFile = await client.storage.createFile(
          appwriteConfig.storageId,
          ID.unique(),
          asset
        );
        console.log("----------------------------");
        console.log(uploadedFile);
        console.log("----------------------------");
  
        const fileUrl = await getFilePreview(uploadedFile.$id, type);
        return fileUrl;
      } catch (error) {
        throw new Error(error);
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  
  export const createVideo = async (form) => {
    try {
      const [videoUrl, thumbnailUrl] = await Promise.all([
        uploadFile(form.thumbnail, "image"),
        uploadFile(form.video, "video"),
      ]);
  
      const newPost = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.videoCollectionId,
        ID.unique(),
        {
          title: form.title,
          video: videoUrl,
          thumbnail: thumbnailUrl,
          creator: form.userId,
          prompt: form.prompt,
        }
      );
  
      if (!newPost) {
        throw new Error("Error creating post");
      }
  
      return newPost;
    } catch (error) {
      throw new Error(error);
    }
  };