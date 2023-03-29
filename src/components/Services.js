import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default function Services() {
  const navigation = useNavigation();
  const NavigateToAllServices = () => {
    navigation.navigate("MoreSevices");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {/* Send */}
        <View style={styles.card}>
          <FontAwesome name="send-o" size={26} color="white" />
          <Text style={styles.textDescription}>Send</Text>
        </View>
        {/* Pay */}
        <View style={styles.card}>
          <Ionicons name="cash-outline" size={28} color="white" />
          <Text style={styles.textDescription}>Bill Pay</Text>
        </View>
        {/* More */}
        <Pressable onPress={NavigateToAllServices}>
          <View style={styles.card}>
            <MaterialIcons name="grid-view" size={30} color="white" />
            <Text style={styles.textDescription}>More</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    padding: 20,
    marginTop: 10,
    backgroundColor: "#159fd0",
    borderRadius: 8,
    width: width / 4,
    justifyContent: "center",
    alignItems: "center",
    height: 120,
  },
  textDescription: {
    color: "#fff",
    marginTop: 10,
    fontSize: 16,
  },
});
