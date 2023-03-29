import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function MoreServices() {
  const navigation = useNavigation();
  const ReturnToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          onPress={ReturnToDashboard}
        />
        <Text style={styles.title}>Services</Text>
        <Feather name="more-vertical" size={24} color="black" />
      </View>
      <Text style={styles.subtitle}>Most Used</Text>
      {/* Most used */}
      <View style={styles.row}>
        <View style={{ alignItems: "center" }}>
          <FontAwesome
            name="send-o"
            size={24}
            color="white"
            style={styles.Icons}
          />
          <Text style={styles.serviceText}>Pay</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Ionicons
            name="cash-outline"
            size={24}
            color="white"
            style={styles.Icons}
          />
          <Text style={styles.serviceText}>Bill Pay</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <MaterialIcons
            name="local-hospital"
            size={30}
            color="white"
            style={styles.Icons}
          />
          <Text style={styles.serviceText}>Medical</Text>
        </View>
      </View>
      {/* Bills */}
      <Text style={styles.subtitle}>Bills</Text>
      <View style={styles.row}>
        <View style={{ alignItems: "center" }}>
          <FontAwesome
            name="send-o"
            size={24}
            color="white"
            style={styles.Icons}
          />
          <Text style={styles.serviceText}>Pay</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Ionicons
            name="cash-outline"
            size={24}
            color="white"
            style={styles.Icons}
          />
          <Text style={styles.serviceText}>Bill Pay</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <MaterialIcons
            name="local-hospital"
            size={30}
            color="white"
            style={styles.Icons}
          />
          <Text style={styles.serviceText}>Medical</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={{ alignItems: "center" }}>
          <FontAwesome
            name="send-o"
            size={24}
            color="white"
            style={styles.Icons}
          />
          <Text style={styles.serviceText}>Pay</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Ionicons
            name="cash-outline"
            size={24}
            color="white"
            style={styles.Icons}
          />
          <Text style={styles.serviceText}>Bill Pay</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <MaterialIcons
            name="local-hospital"
            size={30}
            color="white"
            style={styles.Icons}
          />
          <Text style={styles.serviceText}>Medical</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={{ alignItems: "center" }}>
          <FontAwesome
            name="send-o"
            size={24}
            color="white"
            style={styles.Icons}
          />
          <Text style={styles.serviceText}>Pay</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Ionicons
            name="cash-outline"
            size={24}
            color="white"
            style={styles.Icons}
          />
          <Text style={styles.serviceText}>Bill Pay</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <MaterialIcons
            name="local-hospital"
            size={30}
            color="white"
            style={styles.Icons}
          />
          <Text style={styles.serviceText}>Medical</Text>
        </View>
      </View>
      {/* End of Bills */}
      <Text style={styles.subtitle}>Others</Text>
      <View style={styles.row}>
        <View style={{ alignItems: "center" }}>
          <FontAwesome
            name="send-o"
            size={24}
            color="white"
            style={styles.Icons}
          />
          <Text style={styles.serviceText}>Pay</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Ionicons
            name="cash-outline"
            size={24}
            color="white"
            style={styles.Icons}
          />
          <Text style={styles.serviceText}>Bill Pay</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <MaterialIcons
            name="local-hospital"
            size={30}
            color="white"
            style={styles.Icons}
          />
          <Text style={styles.serviceText}>Medical</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topWrapper: {
    height: 40,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 2,
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 20,
  },
  Icons: {
    backgroundColor: "#159fd0",
    padding: 20,
    borderRadius: 50,
    color: "#fff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "10%",
    marginTop: 20,
  },
  serviceText: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "400",
  },
});
