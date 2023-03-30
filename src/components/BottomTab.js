import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Entypo, FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");
export default function BottomTab() {
  const navigation = useNavigation();
  const NavigateDashboard = () => {
    navigation.navigate("Dashboard");
  };
  const NavigateStatistics = () => {
    navigation.navigate("Statistics");
  };
  const NavigateAccount = () => {
    navigation.navigate("Account");
  };
  const NavigateMessage = () => {
    navigation.navigate("Message");
  };
  return (
    <View style={styles.BottomTab}>
      <FontAwesome
        name="home"
        size={22}
        color="#000"
        onPress={NavigateDashboard}
      />
      <Entypo
        name="bar-graph"
        size={22}
        color="#000"
        onPress={NavigateStatistics}
      />
      <AntDesign name="scan1" size={28} style={styles.MainIcon} />
      <FontAwesome
        name="user-circle-o"
        size={22}
        color="#000"
        onPress={NavigateAccount}
      />
      <Ionicons
        name="ios-chatbubble-ellipses-sharp"
        size={22}
        color="#000"
        onPress={NavigateMessage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  BottomTab: {
    height: 60,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 40,
    paddingTop: 5,
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    alignItems: "center",
  },
  MainIcon: {
    backgroundColor: "#159fd0",
    padding: 10,
    borderRadius: 50,
    color: "#fff",
  },
});
