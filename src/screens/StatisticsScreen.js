import { View, Text, StyleSheet, Image, Pressable, Dimensions } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { BarChart } from "react-native-chart-kit";
import History from "../components/History";
import BottomTab from "../components/BottomTab";

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const chartConfig = {
  backgroundColor: '#1e2923',
  backgroundGradientFrom: '#eff3ff',
  backgroundGradientTo: '#efefef',
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

const {width, height} = Dimensions.get('window')

export default function StatisticsScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyuNFyw05KSucqjifL3PhDFrZLQh7QAS-DTw&usqp=CAU",
          }}
          style={styles.profile}
        />

        <Text style={styles.title}>Statistics</Text>
        <Feather
          name="more-vertical"
          size={24}
          color="black"
          style={{ marginTop: 10 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 40,
        }}
      >
        <View>
          <Text>Total Balance:</Text>
          <Text style={{ color: "grey" }}>142, 000</Text>
        </View>
        <Pressable style={{ flexDirection: "row" }}>
          <Text>Weekly</Text>
          <AntDesign name="down" size={16} color="black" />
        </Pressable>
      </View>
   <View style={styles.barChart}>
   <BarChart
        data={data}
        width={width/1.2}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
      />
   </View>
   <History/>
   <BottomTab/>
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
  barChart:{
    marginTop: 25
  }
});
