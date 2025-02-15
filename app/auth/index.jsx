import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import logoFull from "../../assets/images/logo-full.png";
  import CustomTextField from "../../components/CustomTextField";
  import CustomButton from "../../components/CustomButton";
import { createUser, logIn } from "../../api/users";
import { router } from "expo-router";
  
  const AuthScreen = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async () => {
      if(isSignUp){
        const result = await createUser(email, password, username);
        if(result){
            Alert.alert("Account Created Successfully");
            setIsSignUp(false);
            setUsername("");
            setEmail("");
            setPassword("");
        }
        
      }else{
        // const result = await logIn(email, password);
        // if(result){
        //     Alert.alert("Signed In Successfully");
            
        // }
        router.push('/home');
      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingContainer}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
          >
            {/* Logo Container */}
            <View style={styles.logoContainer}>
              <Image source={logoFull} style={styles.logo} resizeMode="contain" />
            </View>
  
            {/* Sign In/Up Area */}
            <View style={styles.formContainer}>
              <Text style={styles.headerText}>
                {isSignUp ? "Sign Up" : "Sign In"}
              </Text>
  
              <Text style={styles.label}>Email</Text>
              <CustomTextField
                placeholder="Email"
                icon="email"
                value={email}
                onChangeText={setEmail}
              />
  
              {isSignUp && (
                <>
                  <Text style={styles.label}>Username</Text>
                  <CustomTextField
                    placeholder="username"
                    icon="username"
                    value={username}
                    onChangeText={setUsername}
                  />
                </>
              )}
  
              <Text style={styles.label}>Password</Text>
              <CustomTextField
                placeholder="Password"
                secureTextEntry
                icon="password"
                value={password}
                onChangeText={setPassword}
              />
            </View>
  
            {/* Action Area */}
            <View style={styles.actionContainer}>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={handleSubmit}
              >
                <CustomButton title={isSignUp ? "Create Account" : "Sign In"} />
              </TouchableOpacity>
  
              <TouchableOpacity
                style={styles.toggleButton}
                onPress={() => setIsSignUp(!isSignUp)}
              >
                <Text style={styles.toggleText}>
                  {isSignUp
                    ? "Already have an account? Sign In"
                    : "Don't have an account? Sign Up"}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default AuthScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    keyboardAvoidingContainer: {
      flex: 1,
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: "center",
    },
    logoContainer: {
      alignItems: "center",
      marginBottom: 30,
    },
    logo: {
      width: 250,
      height: 80,
    },
    formContainer: {
      paddingHorizontal: 25,
    },
    headerText: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 10,
    },
    actionContainer: {
      alignItems: "center",
      marginTop: 20,
    },
    buttonContainer: {
      width: "100%",
      alignItems: "center",
    },
    toggleButton: {
      marginTop: 15,
    },
    toggleText: {
      color: "#0061FF",
      fontWeight: "bold",
    },
  });