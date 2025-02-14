import { Text, View } from "react-native";
import Svg, { Circle, Rect } from 'react-native-svg';
import {getAllPosts} from './appwrite';



export default async function Index() {
  const post = await getAllPosts();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Svg height="50%" width="50%" viewBox="0 0 100 100">
      <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
      <Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" />
    </Svg>
    {post?.map((item, index) => (
      <Text key={index}>{item.title}</Text>
    ))}
    </View>
  );
}
