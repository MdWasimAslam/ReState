import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Heart from "../assets/svgs/heart";
import Map from "../assets/svgs/map";
import Bed from "../assets/svgs/bed";
import Area from "../assets/svgs/area";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

const ListingStrip = ({ item }) => {
  const formatIndianCurrency = (number) => {
    if (typeof number !== "number" || isNaN(number)) {
      return "Invalid number";
    }
    return `${number.toLocaleString("en-IN")}`;
  };

  const NavigateToListingScreen = (item) => {
    router.push({
      pathname: "screens/listingDetails",
      params: { data: JSON.stringify(item) },
    });
  };
  return (
    <TouchableOpacity
      onPress={() => {
        NavigateToListingScreen(item);
      }}
    >
      {/* Image container */}
      <View style={styles.container}>
        <View>
          <Image source={{ uri: item.coverImg }} style={styles.image} />
        </View>

        <View>
          <View style={styles.infoHeader}>
            <Text style={styles.starText}>⭐ {item.stars}</Text>
            <Text style={styles.category}>{item.category}</Text>
          </View>
          <Text style={styles.title}>{item.title}</Text>
          {/* <Text style={styles.rate}> {formatIndianCurrency(item.rate)} / Night</Text> */}
          <View style={styles.addressContainer}>
            <Map height={12} width={12} />
            <Text style={styles.address}>{item.address}</Text>
          </View>

          <View style={styles.ameneties}>
            <Area height={20} width={20} color="#7D7D7D" />
            <Text style={styles.amenetiesText}>
              {formatIndianCurrency(item.area)} Sqft
            </Text>
            <View style={{ marginLeft: Platform.OS === "ios" ? 0 : 5 }} />
            <Bed height={20} width={20} color="#7D7D7D" />
            <Text style={styles.amenetiesText}>{item.bedrooms}</Text>

            <View style={{ marginLeft: Platform.OS === "ios" ? 0 : 5 }} />
            <View>
              <Text style={styles.rate}>
                ₹ {formatIndianCurrency(item.rate)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListingStrip;

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 120,
    borderRadius: 10,
    zIndex: 9,
  },
  container: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    gap: 10,
  },
  infoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "79%",
  },
  category: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#6a6a6a",
    backgroundColor: "#B7E0FF",
    padding: 5,
    borderRadius: 5,
    color: "#0061FF",
  },
  title: {
    fontSize: Platform.OS === "ios" ? 15 : 17,
    fontWeight: "bold",
    marginBottom: 10,
  },
  rate: {
    fontSize: Platform.OS === "ios" ? 12 : 17,
    fontWeight: "bold",
    color: "#0061FF",
  },
  addressContainer: {
    marginTop: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  address: {
    fontSize: Platform.OS === "ios" ? 13 : 15,
    color: "#7D7D7D",
  },
  ameneties: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  amenetiesText: {
    fontSize: Platform.OS === "ios" ? 10 : 13,
    color: "#7D7D7D",
  },
  starText: {
    fontSize: 13,
    color: "#7D7D7D",
  },
});
