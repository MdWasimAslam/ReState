import {
  Alert,
  Dimensions,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useGlobalSearchParams } from "expo-router";
import ArrowLeft from "../../assets/svgs/arrowleft";
import Heart from "../../assets/svgs/heart";
import Share from "../../assets/svgs/share";
import ListingDescription from "../../components/ListingDescription";
import ListingGallery from "../../components/ListingGallery";
import ListingReview from "../../components/ListingReview";

const { width, height } = Dimensions.get("window");

const listingDetails = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const data = useGlobalSearchParams();
  const listing = JSON.parse(data.data);


  return (
    <SafeAreaView>
      {/* Image Container  */}
      <ScrollView >
        <View>
          <Image
            source={{ uri: listing?.coverImg || "" }}
            style={{ width: "100%", height: 300 }}
          />
        </View>

        {/* header buttons */}
        <View style={styles.header}>
          <View style={styles.headerAction}>
            <TouchableOpacity onPress={() => router.back()}>
            <ArrowLeft color="#000" height={25} width={25} />
            </TouchableOpacity>
          </View>

          <View style={styles.headerActionContainer}>
            <View style={styles.headerAction}>
              <Share height={25} width={25} />
            </View>
            <View style={styles.headerAction}>
              <Heart height={25} width={25} />
            </View>
          </View>
        </View>

        {/* Review and Category */}
        <View style={styles.reviewContainer}>
          <View>
            <Text style={styles.reviewText}>⭐ {listing.stars}</Text>
          </View>
          <View>
            <Text style={styles.reviewCategory}>{listing.category}</Text>
          </View>
        </View>

        {/* Title & Address*/}

        <View>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.address}>{listing.address}</Text>
        </View>

        {/* Tabs Navigation */}
        <View>
          <View style={styles.tabsContainer}>
            <TouchableOpacity onPress={() => setCurrentTab(0)}>
              <Text
                style={[
                  currentTab === 0 ? styles.activeTab : styles.inActiveTab,
                ]}
              >
                Description
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrentTab(1)}>
              <Text
                style={[
                  currentTab === 1 ? styles.activeTab : styles.inActiveTab,
                ]}
              >
                Gallery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrentTab(2)}>
              <Text
                style={[
                  currentTab === 2 ? styles.activeTab : styles.inActiveTab,
                ]}
              >
                Review
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tab Content */}
        {currentTab === 0 && (
          <View>
            <ListingDescription data={listing} />
          </View>
        )}
        {currentTab === 1 && (
          <View>
            <ListingGallery />
          </View>
        )}
        {currentTab === 2 && (
          <View>
            <ListingReview />
          </View>
        )}
      </ScrollView>

      {/* Book Section */}
      <TouchableOpacity onPress={()=>{Alert.alert('Booking Done')}}>
      <View style={styles.bookingContainer}>
        <Text style={styles.bookText}>Book Now</Text>
      </View>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default listingDetails;

const styles = StyleSheet.create({
  bookingContainer: {
    backgroundColor: "#0061FF",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    position:'absolute',
    bottom:0,
    width:'100%'
  },
  bookText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  activeTab: {
    color: "#0061FF",
    paddingVertical: 7,
    fontSize: Platform.OS === 'ios' ? 15 : 20,
    fontWeight: "bold",
    width: width / 3,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 3,
    borderBottomColor: "#0061FF",
    alignContent: "center",
    paddingLeft: 25,
  },
  inActiveTab: {
    color: "#7D7D7D",
    paddingVertical: 7,
    fontSize: Platform.OS === 'ios' ? 15 : 20,
    // fontWeight: "bold",
    width: width / 3,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 3,
    borderBottomColor: "#A5BFCC",
    alignContent: "center",
    paddingLeft: 25,
  },

  tabsContainer: {
    paddingVertical: 0,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  address: {
    fontSize: 17,
    paddingHorizontal: 20,
    marginTop: 5,
    color: "#7D7D7D",
  },
  reviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  reviewText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  reviewCategory: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#0061FF",
    backgroundColor: "#B7E0FF",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: height * 0.02,
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  headerActionContainer: {
    flexDirection: "row",
    gap: 10,
  },
  headerAction: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
