import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Area from "../assets/svgs/area";
import Bed from "../assets/svgs/bed";
import Mist from "../assets/svgs/mist";
import Shield from "../assets/svgs/shield";
import Email from "../assets/svgs/email";
import Phone from "../assets/svgs/phone";
import Widget from "./Widget";
import MiniWidget from "./MiniWidget";
import MapView from "../assets/images/Map.png";
import Map from "../assets/svgs/map";

const ListingDescription = (props) => {
  const formatIndianInteger = (number) => {
    if (typeof number !== "number" || isNaN(number)) {
      return "Invalid number";
    }
    return `${number.toLocaleString("en-IN")}`;
  };

  return (
    <View style={{ marginBottom: 60 }}>
      {/* Widgets */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Widget
          icon="area"
          data={props?.data}
          title="Area"
          value={formatIndianInteger(props?.data?.area)}
        />
        <Widget
          icon="bed"
          data={props?.data}
          title="Bedrooms"
          value={props?.data?.bedrooms}
        />
        <Widget
          icon="mist"
          data={props?.data}
          title="Bathrooms"
          value={props?.data?.bathrooms}
        />
        <Widget
          icon="shield"
          data={props?.data}
          title="Safety"
          value={props?.data?.safetyRank}
        />
      </View>

      {/* Agent Details */}
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
        }}
      >
        <View>
          <Text style={styles.agenthead}>Listing Agent</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Image
              source={{ uri: props?.data?.agentProfile }}
              style={styles.agentImg}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {props?.data?.agentName}
              </Text>
              <Text style={{ color: "#7D7D7D" }}>Partner</Text>
            </View>
          </View>
          <View style={styles.agentContactContainer}>
            <View style={styles.emailContainer}>
              <Email height={25} width={25} color="#fff" />
            </View>
            <View style={styles.emailContainer}>
              <Phone height={25} width={25} color="#fff" />
            </View>
          </View>
        </View>
        <View></View>
      </View>

      {/* Ameneties */}
      <View
        style={{ marginHorizontal: 10, flexDirection: "row", flexWrap: "wrap" }}
        key={String(props.data?.amenties)} // Better key for parent (optional)
      >
        {props?.data?.amenties?.map((item, index) => (
          <MiniWidget title={item} key={item} />
        ))}
      </View>

      {/* Address */}
      <View style={styles.addressContainer}>
        <View>
          <Text style={[styles.agenthead, { marginTop: 20 }]}>Address</Text>
        </View>
        <View>
          <Text style={[{ marginTop: 20, color: "#0061FF" }]}>View On Map</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "#ced4da",
          borderBottomWidth: 2,
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      />

      {/* Map */}
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 0,
          marginBottom: 20,
          paddingVertical: 10,
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}
        >
          <Map height={20} width={20} color="#000" />
          <Text
            style={{
              fontSize: 15,
              marginBottom: 10,
            }}
          >
            {props?.data?.address}
          </Text>
        </View>

        <Image source={MapView} style={{ width: "100%", borderRadius: 10 }} />
      </View>
    </View>
  );
};

export default ListingDescription;

const styles = StyleSheet.create({
  addressContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 5,
  },
  address: {
    fontSize: 17,
    fontWeight: "bold",
  },
  agentContactContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  emailContainer: {
    backgroundColor: "#0061FF",
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  agentImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  widget: {
    padding: 7,
    margin: 7,
    borderRadius: 10,
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    backgroundColor: "white",
  },
  agenthead: {
    fontSize: 20,
    fontWeight: "bold",
    flexDirection: "column",
  },
});
