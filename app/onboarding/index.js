import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Onboarding1 from "../../assets/svgs/onboarding1";
import Onboarding2 from "../../assets/svgs/onboarding2";
import Onboarding3 from "../../assets/svgs/onboarding3";
import Progress1 from "../../assets/svgs/progress1";
import Progress2 from "../../assets/svgs/progress2";
import Progress3 from "../../assets/svgs/progress3";
import ArrowLeft from "../../assets/svgs/arrowleft";
import ArrowRight from "../../assets/svgs/arrowright";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

const index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Images = [Onboarding1, Onboarding2, Onboarding3];
  const CurrentImage = Images[currentIndex];
  const headings = [
    {
      heading: `Find Your Perfect Dream ${`\n`}Home with Ease`,
      subheading: `Explore a vast selection of homes, apartments, and${`\n`} commercial spaces that match your lifestyle.`,
    },
    {
      heading: "Connect With Experts Instantly",
      subheading: `Need advice? Our trusted real estate professionals${`\n`} are here to guide you at every step of your journey.

`,
    },
    {
      heading: `Start Your Real Estate${`\n`} Journey Today!`,
      subheading: `Join thousands of happy users who have found${`\n`} their dream homes with our trusted marketplace.`,
    },
  ];
  const CurrentHeading = headings[currentIndex];

  const Progress = [Progress1, Progress2, Progress3];
  const CurrentProgress = Progress[currentIndex];

  // Function to split and highlight specific words
  const HighlightedText = ({ text }) => {
    const wordsToHighlight = ["Dream", "Experts", "Journey"];
    const parts = text.split(
      new RegExp(`(${wordsToHighlight.join("|")})`, "gi")
    );

    return (
      <Text style={styles.heading}>
        {parts.map((part, index) =>
          wordsToHighlight.includes(part) ? (
            <Text key={index} style={styles.highlighted}>
              {part}
            </Text>
          ) : (
            part
          )
        )}
      </Text>
    );
  };

  const moveToNext = () => {
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push('/auth');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CurrentImage />
      {/* Text Area */}
      <View>
        <HighlightedText text={CurrentHeading.heading} />
        <Text style={styles.subheading}>{CurrentHeading.subheading}</Text>
      </View>

      {/* Progress Navigation */}
      <View style={styles.ProgressContainer}>
        <View>
          <TouchableOpacity
            style={[styles.circleBtn, { opacity: currentIndex === 0 ? 0 : 1 }]}
            onPress={() => setCurrentIndex(currentIndex - 1)}
          >
            <ArrowLeft color="#fff" />
          </TouchableOpacity>
        </View>
        <View>
          <CurrentProgress />
        </View>
        <View>
          <TouchableOpacity
            style={styles.circleBtn}
            onPress={() => moveToNext()}
          >
            <ArrowRight color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  subheading: {
    fontSize: 17,
    marginTop: 20,
    textAlign: "center",
    color: "#7D7D7D",
  },
  highlighted: {
    color: "#0061FF", // Highlighted text color
    fontWeight: "bold",
  },
  ProgressContainer: {
    position: "absolute",
    bottom: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 25,
  },
  circleBtn: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: "#246BFD",
    justifyContent: "center",
    alignItems: "center",
  },
});
