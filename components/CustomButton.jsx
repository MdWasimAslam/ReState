import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButton = ({title}) => {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 100, // Fully rounded corners
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    backgroundColor:'#0061FF'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});