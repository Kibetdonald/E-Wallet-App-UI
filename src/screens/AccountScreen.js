import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import {
  Feather,
  MaterialIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import BottomTab from "../components/BottomTab";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-afgjed5-3ad53abb28ba",
    icon: "account-circle",
    title: "My Account",
  },
  {
    id: "bd7acbea-c1b1-46c2-aegjgd5-3ad53abb28ba",
    icon: "location-on",
    title: "Location",
  },
  {
    id: "bd7acbea-c1b1-46c2-aejgd5-3ad53abb28ba",
    icon: "privacy-tip",
    title: "Privacy Policy",
  },
  {
    id: "bd7acbea-c1b1-46c2-afjed5-3ad53abb28ba",
    icon: "settings",
    title: "Settings",
  },
  {
    id: "bd7acbea-c1b1-46c2-aefjhd5-3ad53abb28ba",
    icon: "help",
    title: "Help and Support",
  },
  {
    id: "bd7acbea-c1b1-46c2-afjhed5-3ad53abb28ba",
    icon: "email",
    title: "Contact Us",
  },
];

const Item = ({ title, icon }) => (
  <View style={styles.profile}>
    <MaterialIcons
      name={icon}
      size={16}
      color="black"
      style={styles.MainIcon}
    />
    <Text style={styles.profileTitle}>{title}</Text>
    <AntDesign name="right" size={20} color="black" />
  </View>
);
const renderItem = ({ item }) => <Item title={item.title} icon={item.icon} />;

export default function AccountScreen() {
  const LoginNavigate = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color="black"
          style={{ marginTop: 15 }}
        />

        <Text style={styles.title}>Account</Text>
        <Feather
          name="more-vertical"
          size={24}
          color="black"
          style={{ marginTop: 10 }}
        />
      </View>
      <View style={styles.AccountInfo}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyuNFyw05KSucqjifL3PhDFrZLQh7QAS-DTw&usqp=CAU",
          }}
          style={styles.profilePic}
        />
        <View style={{ marginLeft: 20, marginTop: 15 }}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.jobTitle}>Law Practitioner</Text>
        </View>
      </View>
      {/* Profile */}
      <FlatList
        data={DATA}
        style={{ paddingHorizontal: 20 }}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Pressable style={styles.btn} onPress={LoginNavigate}>
        <Text style={styles.btnText}>Log Out</Text>
      </Pressable>
      <BottomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 10,
  },
  AccountInfo: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 20,
    justifyContent: "center",
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "grey",
  },
  profile: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#ddd",
    padding: 12,
    borderRadius: 10,
  },
  MainIcon: {
    backgroundColor: "#159fd0",
    padding: 10,
    borderRadius: 10,
    color: "#fff",
  },
  profileTitle: {
    fontWeight: "500",
    fontSize: 15,
  },
  btn: {
    backgroundColor: "#159fd0",
    padding: 15,
    width: "90%",
    alignItems: "center",
    marginLeft: "5%",
    borderRadius: 5,
    marginBottom: 50,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
  },
});
