import { Keyboard, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import ArrowLeft from '../assets/svgs/arrowleft'; // Import your SVG component
import Id from '../assets/svgs/id';
import Password from '../assets/svgs/password';
import Email from '../assets/svgs/email';
const CustomTextField = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        style={styles.textInput}
        onChangeText={props.onChangeText}
      />
    {
        props.icon === 'id' &&       <Id style={styles.icon} color='#7D7D7D' /> 
    }
    {
        props.icon === 'password' &&       <Password style={styles.icon} color='#7D7D7D' />
    }
    {
        props.icon === 'email' &&       <Email style={styles.icon} color='#7D7D7D' />
    }
    </View>
  );
};

export default CustomTextField;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#7D7D7D',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  textInput: {
    flex: 1, // Take up remaining space
    paddingVertical: 15,
    fontSize: 20,
  },
  icon: {
    marginLeft: 10, // Add spacing between the TextInput and the icon
  },
});