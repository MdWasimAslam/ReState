import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Heart from "../assets/svgs/heart";
import Map from "../assets/svgs/map";

const ListingCard = ({ item }) => {
    const formatIndianCurrency = (number) => {
        if (typeof number !== 'number' || isNaN(number)) {
          return 'Invalid number';
        }
      
        // Format the number into Indian currency format
        return `₹ ${number.toLocaleString('en-IN')}`;
      };
  return (
    <View>
      {/* Image container */}
      <View>
        <Image source={{ uri: item.coverImg }} style={styles.image} />
      </View>

      {/* details container */}
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.rate}> {formatIndianCurrency(item.rate)} / Night</Text>
          <View style={styles.addressContainer}>
            <Map height={12} width={12} />
            <Text style={styles.address}>{item.address}</Text>
          </View>
        </View>
        <View style={styles.heartContainer}>
          <Heart height={24} width={24} />
        </View>
      </View>
    </View>
  );
};

export default ListingCard;

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 220,
    borderRadius: 10,
    zIndex: 9,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -15,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingTop: 30,
    backgroundColor: "white",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  address: {
    flexDirection: "row",
    alignItems: "center",
    color: "#7D7D7D",
  },
  addressContainer: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  rate: {
    color: "#0061FF",
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  heartContainer: {
    
    
  },
});
