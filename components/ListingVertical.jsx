import { FlatList, StyleSheet, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import {
  getAllListings,
  getAllListingsByHigherPrice,
  getAllListingsByLowerPrice,
  getAllListingsByTopRating,
} from "../api/listings";
import ListingCard from "./ListingCard";
import ListingStrip from "./ListingStrip";

const ListingVertical = ({}) => {
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLisitng = async () => {
    setLoading(true); // Start loading
    let res;
    try {
      res = await getAllListingsByHigherPrice();
      setListing(res);
    } catch (error) {
      console.error("Error fetching listings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLisitng();
  }, []);

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
          showsVerticalScrollIndicator={false} // Use vertical scroll indicator
          data={listing}
          keyExtractor={(item) => item.listingId.toString()} // Ensure each item has a unique key
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <ListingStrip item={item} />
            </View>
          )}
          contentContainerStyle={styles.flatListContent} // Add padding for the tab bar
        />
      )}
    </View>
  );
};

export default ListingVertical;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
  },
  cardContainer: {
    marginRight: 20,
    flex: 1,
  },
  skeletonContainer: {
    flexDirection: "column",
    marginBottom: 20,
  },
  skeletonCard: {
    width: 370,
    marginRight: 20,
  },
  skeletonImage: {
    width: 370,
    height: 110,
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
  flatListContent: {
    paddingBottom: 80, // Add padding to avoid the tab bar hiding the last item
  },
});
