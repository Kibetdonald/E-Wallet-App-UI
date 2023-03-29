import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Entypo, FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons'; 

const {height, width} = Dimensions.get('window')
export default function BottomTab() {
  return (
    <View style={styles.BottomTab}>
    <FontAwesome name="home" size={22} color="#000" />
    <Entypo name="bar-graph" size={22} color="#000" />
    <AntDesign name="scan1" size={28} style={styles.MainIcon}/>
    <FontAwesome name="user-circle-o" size={22} color="#000" />
    <Ionicons name="ios-chatbubble-ellipses-sharp" size={22} color="#000" />
    </View>
  )
}

const styles = StyleSheet.create({
  BottomTab:{
    height: 60,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 40,
    paddingTop: 5,
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    alignItems: "center"
  },
  MainIcon:{
    backgroundColor: "#159fd0",
    padding: 10,
    borderRadius: 50,
    color: "#fff"
  }
})