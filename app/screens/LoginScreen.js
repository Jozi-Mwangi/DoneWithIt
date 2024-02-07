import axios from "axios";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    Linking,
  AsyncStorage,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Alert,
} from "react-native";
import BRANCH_ENDPOINT from "../utils/constants";

const LoginScreen = () => {
  const navigation = useNavigation();
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
    //   const requestBody = {
    //     username: "jozi.mwangi@gmail.com",
    //     password: "moc.liamg@ignawm.izoj",
    //   };
    //   const headers = {
    //     "Content-Type": "application/json",
    //   };
    //   const response = await axios.post(
    //     `${BRANCH_ENDPOINT}/api/login`,
    //     requestBody,
    //     { headers }
    //   );
    //   const authToken = response.data.authToken;
    //   await AsyncStorage.setItem("authToken", authToken);

    //   setPassword("");
    //   setEmail("");
    } catch (error) {
    //   Alert.alert("Login Failed. Invalid email or password", error);
    }

    `
    For Debugging Purposes
    `
    
    console.log("Email:", email);
    console.log("Password:", password);
    navigation.navigate("MessageThreadScreen")
};

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#444",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: "#fff",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#007bff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginScreen;
