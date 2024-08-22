import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { FeatureType } from "../components/types";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("screen");
const Feature = ({ item }: { item: FeatureType }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.image} />
      </View>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.subText}>{item.subTitle}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp("40.0%"),
    height: hp("15.4%"),
    backgroundColor: "#FFFFFF14",
    borderRadius: wp("3.7%"),
    marginLeft: wp("2.6%"),
    paddingTop: hp("1.8%"),
    paddingLeft: wp("2.6%"),
  },
  imageContainer: {
    width: wp("11%"),
    backgroundColor: "#1b2420",
    padding: wp("2.1%"),
    borderRadius: wp("2.6%"),
    marginBottom: hp("1.4%"),
  },
  image: {
    width: wp("6.2%"),
    height: wp("6.2%"),
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: wp("5.3%"),
    marginBottom: hp("0.7%"),
  },
  subText: {
    color: "#FFFFFFB2",
    fontWeight: "400",
    fontSize: wp("3.4%"),
  },
});
export default Feature;
