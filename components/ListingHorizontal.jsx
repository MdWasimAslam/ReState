import { FlatList, StyleSheet, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import {
  getAllListings,
  getAllListingsByHigherPrice,
  getAllListingsByLowerPrice,
  getAllListingsByTopRating,
} from "../api/listings";
import ListingCard from "./ListingCard";

const ListingHorizontal = ({ selectedOption }) => {
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLisitng = async () => {
    setLoading(true); // Start loading
    let res;
    try {
      if (selectedOption === "Recommended") {
        res = await getAllListings();
      } else if (selectedOption === "Top Rated") {
        res = await getAllListingsByTopRating();
      } else if (selectedOption === "Price Low to High") {
        res = await getAllListingsByLowerPrice();
      } else if (selectedOption === "Price High to Low") {
        res = await getAllListingsByHigherPrice();
      }
      setListing(res);
    } catch (error) {
      console.error("Error fetching listings:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    getLisitng();
  }, [selectedOption]);

  // Skeleton Loader Component
  const SkeletonLoader = () => (
    <View style={styles.skeletonContainer}>
      {[...Array(5)].map((_, index) => (
        <View key={index} style={styles.skeletonCard}>
          <View style={styles.skeletonImage} />
          <View style={styles.skeletonText} />
          <View style={styles.skeletonText} />
          <View style={styles.skeletonText} />
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <SkeletonLoader /> // Show skeleton loader while loading
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={listing}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <ListingCard item={item} />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default ListingHorizontal;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
  },
  cardContainer: {
    marginRight: 20,
  },
  skeletonContainer: {
    flexDirection: "row",
  },
  skeletonCard: {
    width: 200, 
    marginRight: 20,
  },
  skeletonImage: {
    width: 200, 
    height: 140, 
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    marginBottom: 12, 
  },
  skeletonText: {
    height: 16, 
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    marginBottom: 8, 
  },
});