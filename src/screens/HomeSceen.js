import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import BottomTab from "../components/BottomTab";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Services from "../components/Services";
import RecentActivity from "../components/RecentActivity";

const { height, width } = Dimensions.get("window");
export default function HomeSceen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
            }}
            style={styles.Profile}
          />
          <View style={{ marginLeft: 10, marginTop: 5 }}>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Hi, Susan</Text>
            <Text style={{ color: "grey", fontSize: 15 }}>
              Let's save your money.{" "}
            </Text>
          </View>
        </View>
        <Ionicons
          name="notifications"
          size={24}
          color="black"
          style={{ marginTop: 10 }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.balance1}>Current Balance</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.balance2}>Ksh. 142,000</Text>
            <Entypo name="switch" size={21} color="white" />
          </View>
          {/* Account Number */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              justifyContent: "space-between",
              width: width / 1.38,
            }}
          >
            <View style={styles.AccountNumber}>
              <FontAwesome name="circle" size={10} color="white" />
              <View style={{ width: 5 }} />
              <FontAwesome name="circle" size={10} color="white" />
              <View style={{ width: 5 }} />
              <FontAwesome name="circle" size={10} color="white" />
              <View style={{ width: 5 }} />
              <FontAwesome name="circle" size={10} color="white" />
              <View style={{ width: 5 }} />
            </View>
            <View style={styles.AccountNumber}>
              <FontAwesome name="circle" size={10} color="white" />
              <View style={{ width: 5 }} />
              <FontAwesome name="circle" size={10} color="white" />
              <View style={{ width: 5 }} />
              <FontAwesome name="circle" size={10} color="white" />
              <View style={{ width: 5 }} />
              <FontAwesome name="circle" size={10} color="white" />
              <View style={{ width: 5 }} />
            </View>
            <View style={styles.AccountNumber}>
              <FontAwesome name="circle" size={10} color="white" />
              <View style={{ width: 5 }} />
              <FontAwesome name="circle" size={10} color="white" />
              <View style={{ width: 5 }} />
              <FontAwesome name="circle" size={10} color="white" />
              <View style={{ width: 5 }} />
              <FontAwesome name="circle" size={10} color="white" />
              <View style={{ width: 5 }} />
            </View>

            <Text style={styles.LastCardDetails}>2140</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              justifyContent: "space-between",
              width: width / 1.38,
            }}
          >
            <Text style={styles.CardName}>Master Card</Text>
            <Text style={styles.Code}>08/24</Text>
          </View>
        </View>
      </View>
      {/* Services */}
      <Services />
      {/* Recent Activity */}
      <RecentActivity />
      <BottomTab />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    paddingTop: "10%",
  },
  card: {
    width: "90%",
    backgroundColor: "#301934",
    height: 200,
    marginTop: 30,
    borderRadius: 20,
    borderRightWidth: 6,
    borderRightColor: "#159fd0",
    borderBottomWidth: 6,
    borderBottomColor: "#159fd0",
    padding: 20,
  },
  Profile: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  balance1: {
    color: "grey",
    fontSize: 18,
  },
  balance2: {
    color: "#fff",
    fontSize: 20,
  },
  AccountNumber: {
    flexDirection: "row",
  },
  LastCardDetails: {
    fontSize: 15,
    color: "#fff",
    marginTop: -1,
  },
  CardName: {
    color: "#fff",
  },
  Code: {
    color: "#fff",
  },
});
