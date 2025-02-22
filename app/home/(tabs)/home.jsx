import {
  FlatList,
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../../context/globalProvider";
import CustomTextField from "../../../components/CustomTextField";
import Filter from "../../../assets/svgs/filter";
import HorizontalOption from "../../../components/HorizontalOption";
import ListingHorizontal from "../../../components/ListingHorizontal";
import ListingVertical from "../../../components/ListingVertical";
import Search from "../../../components/Search";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Recommended");
  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const { user } = useGlobalContext();
  const horizontalOptionsData = [
    "Recommended",
    "Top Rated",
    "Price Low to High",
    "Price High to Low",
  ];

  const changeSelectedOption = (index) => {
    setSelectedOption(index);
  };

  const renderItem = ({ item }) => {
    switch (item.type) {
      case "header":
        return (
          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.heading}>Let's find your</Text>
              <Text style={styles.subheading}>Favourite Stay</Text>
            </View>
            <View>
              {user?.avatar && (
                <Image source={{ uri: user?.avatar }} style={styles.avatar} />
              )}
            </View>
          </View>
        );
      case "search":
        return (
          <View style={styles.searchContainer}>
            <View style={{ width: "80%" }}>
              <CustomTextField
                placeholder="Search by address, city or zip"
                icon="search"
              />
            </View>
            <View style={styles.filterWrapper}>
              <Filter color="#fff" />
            </View>
          </View>
        );
      case !isKeyboardVisible && "horizontalOptions":
        return (
          <HorizontalOption
            options={horizontalOptionsData}
            changeSelectedOption={changeSelectedOption}
            selectedOption={selectedOption}
          />
        );
      case !isKeyboardVisible && "listingHorizontal":
        return <ListingHorizontal selectedOption={selectedOption} />;
      case !isKeyboardVisible && "youMayAlsoLike":
        return (
          <>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                marginLeft: 20,
                marginTop: 10,
                marginBottom: 5,
              }}
            >
              You may also like
            </Text>
            <ListingVertical selectedOption={selectedOption} />
          </>
        );
      case isKeyboardVisible && "searchComponent":
        return <Search />;
      default:
        return null;
    }
  };

  const data = [
    { type: "header" },
    { type: "search" },
    { type: "searchComponent" },
    { type: "horizontalOptions" },
    { type: "listingHorizontal" },
    { type: "youMayAlsoLike" },
  ];

  return (
    <SafeAreaView
      style={{ flex: 1, paddingBottom: Platform.OS === "ios" ? -35 : 0 }}
    >
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    color: "#7D7D7D",
  },
  subheading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  headerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  avatar: {
    width: 60,
    height: 60,
  },
  searchContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  filterWrapper: {
    backgroundColor: "#0061FF",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 2,
  },
});
