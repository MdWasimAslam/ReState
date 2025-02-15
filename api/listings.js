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
    projectId: "67b07c7d000bfefc54eb",
    locale: "en",
    platform: "com.wasim.aslam2897.ReState",
    databaseId: "67b07d23000098265b45",
    userCollectionId: "67b07d320009476f7e32",
    lisitngCollectionId:'67b0a1d9003af6b1d8c8'
  };
  
  // Init your React Native SDK
  const client = new Client()
      .setProject(appwriteConfig.projectId)
      .setPlatform(appwriteConfig.platform);
  
  
  const account = new Account(client);
  const avatars = new Avatars(client);
  const databases = new Databases(client);
  const storage = new Storage(client);
  
  
  export const getAllListings = async () => {
    try {
      const posts = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.lisitngCollectionId
      );
      return posts.documents;
    } catch (error) {
      console.log('error',error);
    }
  };

  export const getAllListingsByLowerPrice = async () => {
    try {
      const posts = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.lisitngCollectionId,
        [Query.orderAsc("rate")]
      );
      return posts.documents;
    } catch (error) {
      console.log('error',error);
    }
  }

  export const getAllListingsByHigherPrice = async () => {
    try {
      const posts = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.lisitngCollectionId,
        [Query.orderDesc("rate")]
      );
      return posts.documents;
    } catch (error) {
      console.log('error',error);
    }
  }

  export const getAllListingsByTopRating = async () => {
    try {
      const posts = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.lisitngCollectionId,
        [Query.orderDesc("rate")]
      );
      return posts.documents;
    } catch (error) {
      console.log('error',error);
  }
  }


  export const createListings = async (data) => {
    try {
      const responses = await Promise.all(data.map(async (item) => {
        return await databases.createDocument(
          appwriteConfig.databaseId,
          appwriteConfig.lisitngCollectionId,
          ID.unique(),
          item
        );
      }));
  
      console.log('Responses:', responses);
      return responses;
    } catch (error) {
      console.error('Error creating listings:', error);
      throw error; // Rethrow the error for the caller to handle
    }
  };
