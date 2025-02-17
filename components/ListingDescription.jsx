import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Area from "../assets/svgs/area";
import Bed from "../assets/svgs/bed";
import Mist from "../assets/svgs/mist";
import Shield from "../assets/svgs/shield";
import Email from "../assets/svgs/email";
const ListingDescription = (props) => {
  const formatIndianInteger = (number) => {
    if (typeof number !== "number" || isNaN(number)) {
      return "Invalid number";
    }

    // Format the number into Indian currency format
    return `${number.toLocaleString("en-IN")}`;
  };
  return (
    <View>
      {/* Widgets */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <View style={styles.widget}>
          <Area height={25} width={25} color="#0061FF" />
          <Text style={{ color: "#0061FF", fontWeight: "bold" }}>
            {formatIndianInteger(props?.data?.area)}
          </Text>
          <Text style={{ color: "#0061FF" }}>Sqft</Text>
        </View>

        <View style={styles.widget}>
          <Bed height={25} width={25} color="#0061FF" />
          <Text style={{ color: "#0061FF", fontWeight: "bold" }}>
            {formatIndianInteger(props?.data?.rooms)}
          </Text>
          <Text style={{ color: "#0061FF" }}>Rooms</Text>
        </View>

        <View style={styles.widget}>
          <Mist height={25} width={25} color="#0061FF" />
          <Text style={{ color: "#0061FF", fontWeight: "bold" }}>
            {formatIndianInteger(props?.data?.bathrooms)}
          </Text>
          <Text style={{ color: "#0061FF" }}>Bathrooms</Text>
        </View>

        <View style={styles.widget}>
          <Shield height={25} width={25} color="#0061FF" />
          <Text style={{ color: "#0061FF", fontWeight: "bold" }}>
            {formatIndianInteger(props?.data?.safetyRank)}
          </Text>
          <Text style={{ color: "#0061FF" }}>Safety</Text>
        </View>
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
        <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
            >
            <Image
                source={{ uri: props?.data?.agentProfile }}
                style={styles.agentImg}
            />
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {props?.data?.agentName}
                </Text>
                <Text>Partner</Text>
            </View>
            </View>
        <View>
            <Email height={35} width={35} color="#0061FF" />
        </View>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default ListingDescription;

const styles = StyleSheet.create({
  agentImg: {
    width: 50,
    height: 50,
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
