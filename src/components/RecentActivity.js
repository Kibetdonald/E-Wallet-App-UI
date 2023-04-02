import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import uberEats from "../assets/images/uber.png";
import kilimall from "../assets/images/kilimall.png";
import kplc from "../assets/images/kplc.png";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Uber Eats",
    logo: uberEats,
    date: "28 March 2023",
    amount: "Ksh. -1600",
    time: "13:44pm",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Online Shopping",
    logo: kilimall,
    date: "29 March 2023",
    amount: "Ksh. -4500",
    time: "16:30pm",
  },
  {
    id: "58694agfd0f-3da1-471f-bd96-14557gsd1e29d72",
    title: "Electricity Bill",
    logo: kplc,
    date: "29 March 2023",
    amount: "Ksh. -3300",
    time: "20:12pm",
  },
  {
    id: "bd7asdgcbea-c1b1-46c2-aed5-3ad5sdg3abb28ba",
    title: "Uber Eats",
    logo: uberEats,
    date: "28 March 2023",
    amount: "Ksh. -1600",
    time: "13:44pm",
  },
  {
    id: "3ac6dsg8afc-c605-48d3-a4f8-fbd91dsgaa97f63",
    title: "Online Shopping",
    logo: kilimall,
    date: "29 March 2023",
    amount: "Ksh. -4500",
    time: "16:30pm",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Electricity Bill",
    logo: kplc,
    date: "29 March 2023",
    amount: "Ksh. -3300",
    time: "20:12pm",
  },
];

const Item = ({ title, logo, date, amount, time }) => (
  <View style={styles.cardView}>
    <Image source={logo} style={styles.logo} />
    <View style={{ marginTop: 20 }}>
      <Text>{title}</Text>
      <Text>{date}</Text>
    </View>
    <View style={{ marginTop: 20 }}>
      <Text>{amount}</Text>
      <Text>{time}</Text>
    </View>
  </View>
);

export default function RecentActivity() {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      logo={item.logo}
      date={item.date}
      amount={item.amount}
      time={item.time}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.title}>Recent Activity</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>Weekly</Text>
          <AntDesign
            name="down"
            size={16}
            color="black"
            style={{ marginTop: 2 }}
          />
        </View>
      </View>
      {/* Flatlist */}

      <View style={{ height: 300 }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  cardView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: "#ddd",
    borderRadius: 12,
    marginTop: 10,
  },
});
