import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Account from "../../assets/svgs/account";
import Map from "../../assets/svgs/map";
import Heart from "../../assets/svgs/heart";
import Home from "../../assets/svgs/home";

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
          tabBarStyle: styles.tabbar,
          tabBarHideOnKeyboard: true,
        }}
        initialRouteName="(tabs)/home"
      >
        <Tabs.Screen
          name="(tabs)/home"
          options={{
            headerShown: false,
            title: "Home",
            tabBarLabelStyle:{fontSize:13},
            tabBarIcon: ({ color, focused }) => (
              <Home color={color} height={24} width={24}/>
            )
          }}
        />

        <Tabs.Screen
          name="(tabs)/favourites"
          options={{
            headerShown: false,
            title: "Favourites",
            tabBarLabelStyle:{fontSize:13},
            tabBarIcon: ({ color, focused }) => (
            <Heart color={color} height={24} width={24}/>
            ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/map"
          options={{
            headerShown: false,
            title: "Map",
            tabBarLabelStyle:{fontSize:13},

            tabBarIcon: ({ color, focused }) => (
              <Map color={color} height={24} width={24} />
            ),
          }}
        />
        <Tabs.Screen
          name="(tabs)/profile"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarLabelStyle:{fontSize:13},
            tabBarIcon: ({ color, focused }) => (
              <Account color={color} height={24} width={24} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  tabbar:{
    borderTopWidth:1,
    borderTopColor:'#7D7D7D',
    height:57,
    // position:'absolute',
    // bottom:15,
    // marginHorizontal:20,
    // borderRadius:15,
    // elevation:20,
    // borderWidth:2,
    // borderColor:'white'

  }
});
