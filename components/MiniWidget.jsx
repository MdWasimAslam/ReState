import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Area from "../assets/svgs/area";
import Bed from "../assets/svgs/bed";
import Mist from "../assets/svgs/mist";
import Email from "../assets/svgs/email";
import Phone from "../assets/svgs/phone";
import Shield from "../assets/svgs/shield";
import Haze from "../assets/svgs/haze";
import Wifi from "../assets/svgs/wifi";
import Car from "../assets/svgs/car";
import Spa from "../assets/svgs/spa";
import Restaurant from "../assets/svgs/restaurant";
import Tent from "../assets/svgs/mountain";
import Fire from "../assets/svgs/fire";
import Boat from "../assets/svgs/boat";
import Gym from "../assets/svgs/yoga";
import Fog from "../assets/svgs/fog";
import Shirt from "../assets/svgs/shirt";
const MiniWidget = (props) => {
  const icons = {
    'Lake View': <Haze height={25} width={25} color="#0061FF" />,
    'Wifi': <Wifi height={25} width={25} color="#0061FF" />,
    'Parking': <Car height={25} width={25} color="#0061FF" />,
    'Spa': <Spa height={25} width={25} color="#0061FF" />,
    'Restaurant': <Restaurant height={25} width={25} color="#0061FF" />,
    'Pool': <Mist height={25} width={25} color="#0061FF" />,
    'Mountain View' : <Tent height={25} width={25} color="#0061FF" />,
    'Fireplace': <Fire height={25} width={25} color="#0061FF" />,
    'Boat Ride': <Boat height={25} width={25} color="#0061FF" />,
    'Gym' : <Gym height={25} width={25} color="#0061FF" />,
    'Beach' : <Fog height={25} width={25} color="#0061FF" />,
    'Laundry': <Shirt height={25} width={25} color="#0061FF" />,
    'Yoga Studio' : <Gym height={25} width={25} color="#0061FF" />,
  };

  return (
    <View style={styles.widget} key={props?.keys}>
      {icons[props?.title]}
      <Text >{props?.title}</Text>
    </View>
  );
};

export default MiniWidget;

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
