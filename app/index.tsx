import {  Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomButton from '../components/CustomButton';
import getstarted from '../assets/images/getstarted.png';
import  logoFull from '../assets/images/logo-full.png'; 
import { router } from 'expo-router';
import {getCurrentUser} from '../api/users';

const { height, width } = Dimensions.get('window');
const Index = () => {
  
  const handleOnboarding = () => {
    router.push('/onboarding');
  }

  const getUserData = async () => {
    const res = await getCurrentUser();
    return res;
  };

  useEffect(() => {
    getUserData().then((res) => {
      if(res?.$id) {
        router.push('/home');
      }
    });
  }, [])
  
  
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <Image source={getstarted} resizeMode='contain' style={styles.onboardingImg}  />
        <View > 
          
          {/* Logo Area */}
          <Image source={logoFull} style={styles.logofull} resizeMode='contain' />

          <Text style={styles.title}>Let's Get You Closer {"\n"} 
            <Text style={styles.subheading}>To Your Ideal Home</Text>
          </Text>
          
          
            {/* Get Started Button */}
            <TouchableOpacity onPress={handleOnboarding} style={styles.customButtonContainer} > 
            <CustomButton title='Get Started' />
            </TouchableOpacity>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default  Index

const styles = StyleSheet.create({
  safeAreaContainer:{
  backgroundColor:'white',
  height:'100%'
  },
  logofull:{
    width:200,
    height:80,
    marginHorizontal:'auto',
    marginBottom:20
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
  },
  subheading:{
      color:'#0061FF'
  },
  onboardingImg:{
    height:height*0.68, 
    width:width
  },
  customButtonContainer:{
    marginTop:20,
    justifyContent:'center',
    alignItems:'center'
  }
})