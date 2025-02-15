import { Image, Keyboard, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../../context/globalProvider";
import CustomTextField from "../../../components/CustomTextField";
import Filter from "../../../assets/svgs/filter";
import HorizontalOption from "../../../components/HorizontalOption";
import ListingHorizontal from "../../../components/ListingHorizontal";
import ListingVertical from "../../../components/ListingVertical";
import Search from "../../../components/Search";

const home = () => {
  const [selectedOption, setSelectedOption] = useState("Recommended");
  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

  // Add event listeners for keyboard visibility
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
        //remove this as the search will require the complete screen
        setKeyboardVisible(false);
      }
    );

    // Clean up listeners
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
  return (
    <SafeAreaView>
      {/* Header info */}
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

      {/* Search & filter */}
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

      {/* Hide Home Data when clicked on search */}
      {!isKeyboardVisible && (
        <>
          {/* Horizontal Option */}
          <HorizontalOption
            options={horizontalOptionsData}
            changeSelectedOption={changeSelectedOption}
            selectedOption={selectedOption}
          />

          {/* Listings Horizontal */}
          <ListingHorizontal selectedOption={selectedOption} />

          {/* You may also like */}
          <View style={{ height: 400 }}>
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
          </View>
        </>
      )}

      {
        isKeyboardVisible && <>
        <Search />
        </>
      }
    </SafeAreaView>
  );
};

export default home;

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
