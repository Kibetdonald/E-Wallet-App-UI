import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyuNFyw05KSucqjifL3PhDFrZLQh7QAS-DTw&usqp=CAU",
          }}
          style={styles.profile}
        />

        <Text style={styles.title}>Account</Text>
        <Feather
          name="more-vertical"
          size={24}
          color="black"
          style={{ marginTop: 10 }}
        />
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
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});
