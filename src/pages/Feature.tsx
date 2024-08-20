import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { FeatureType } from "../components/types";

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
    width: width * 0.41,
    height: height * 0.16,
    backgroundColor: "#FFFFFF14",
    borderRadius: 14,
    marginLeft: 10,
    paddingTop: 15,
    paddingLeft: 10,
  },
  imageContainer: {
    width: "28%",
    backgroundColor: "#1b2420",
    padding: 8,
    borderRadius: 10,
    marginBottom: 12,
  },
  image: {
    width: 24,
    height: 24,
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: width * 0.053,
    marginBottom: 6,
  },
  subText: {
    color: "#FFFFFFB2",
    fontWeight: "400",
    fontSize: width * 0.034,
  },
});
export default Feature;
