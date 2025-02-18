import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import Area from "../assets/svgs/area";
import Bed from "../assets/svgs/bed";
import Mist from "../assets/svgs/mist";
import Email from "../assets/svgs/email";
import Phone from "../assets/svgs/phone";
import Shield from "../assets/svgs/shield";
const Widget = (props) => {
  const icons = {
    area: <Area height={25} width={25} color="#0061FF" />,
    bed: <Bed height={25} width={25} color="#0061FF" />,
    mist: <Mist height={25} width={25} color="#0061FF" />,
    shield: <Shield height={25} width={25} color="#0061FF" />,
  };

  return (
    <View style={styles.widget}>
      {icons[props?.icon]}
      <Text style={{ color: "#0061FF", fontWeight: "bold",fontSize:15 }}>
        {props?.value}
      </Text>
      <Text style={{fontSize:Platform.OS === 'ios' ? 12 : 13}}>{props?.title}</Text>
    </View>
  );
};

export default Widget;

const styles = StyleSheet.create({
  widget: {
    padding: 7,
    margin: 7,
    borderRadius: 10,
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    backgroundColor: "white",
  },

});
