import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";

// const TabIcon = ({ icon, color, name, focused }) => {
//   return (
//     <View className="items-center justify-center gap-2" style={{ width: 60 }}>
//       <Image
//         source={icon}
//         resizeMode="contain"
//         tintColor={color}
//         className="w-6 h-6"
//       />
//       <Text
//         className={`${
//           focused ? "font-psemibold" : "font-pregular"
//         } text-xs text-center`}
//         style={{ color: color }}
//       >
//         {name}
//       </Text>
//     </View>
//   );
// };

const TabsLayout = () => {
  return (
    <>
      <StatusBar style="dark" />

      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="(tabs)/home"
      >
        <Tabs.Screen
          name="(tabs)/home"
          options={{
            headerShown: false,
            title: "home",
            // tabBarIcon: ({ color, focused }) => (
            //   <></>
            // ),
          }}
        />

        <Tabs.Screen
          name="(tabs)/favourites"
          options={{
            headerShown: false,
            title: "favourites",
            // tabBarIcon: ({ color, focused }) => (
            //   <></>
            // ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/map"
          options={{
            headerShown: false,
            title: "map",
            // tabBarIcon: ({ color, focused }) => (
            //   <></>
            // ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/profile"
          options={{
            headerShown: false,
            title: "profile",
            // tabBarIcon: ({ color, focused }) => (
            //   <></>
            // ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
