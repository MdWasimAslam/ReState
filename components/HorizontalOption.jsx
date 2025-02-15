import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const HorizontalOption = ({ options, changeSelectedOption, selectedOption }) => {
  const currentOption = (item) => {
    changeSelectedOption(item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={options}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => currentOption(item)}>
            <View
              style={[
                styles.optionContainer,
                item === selectedOption && styles.selectedOptionContainer,
              ]}
            >
              <Text
                style={[
                  styles.option,
                  item === selectedOption && styles.selectedOption,
                ]}
              >
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HorizontalOption;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  optionContainer: {
    padding: 10,
    backgroundColor: "#ced4da",
    gap: 10,
    borderRadius: 10,
    marginRight: 10,
    marginVertical: 10,
  },
  option: {
    fontSize: 15,
  },
  selectedOptionContainer: {
    backgroundColor: "#0061FF", // Change this to your desired highlight color
  },
  selectedOption: {
    color: "#ffffff", // Change this to your desired text color for the selected option
    fontWeight: "bold",
  },
});