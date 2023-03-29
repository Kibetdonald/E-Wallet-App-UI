import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import welcome from "../assets/images/welcome.png";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const loginNavigate = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image source={welcome} style={styles.ImageStyle} />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.Text1}>Save money to</Text>
        <Text style={styles.Text2}>save future</Text>
        <Text style={styles.Text3}>
          We offer the best platform for you to save and be able to pay bills
          easily at your confort and in the most seamless way possible.
        </Text>
        <Pressable style={styles.Button} onPress={loginNavigate}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  ImageStyle: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginTop: height / 6,
  },
  Text1: {
    fontSize: 36,
    fontWeight: "bold",
  },
  Text2: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 5,
  },
  Text3: {
    width: "70%",
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
    color: "grey",
  },
  Button: {
    width: "80%",
    height: 40,
    backgroundColor: "#159fd0",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginTop: 50,
  },
  buttonText: {
    fontSize: 12,
    color: "#fff",
  },
});
