import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const PremiumBox = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.premiumBox,
        pressed ? styles.buttonPressed : null,
      ]}
    >
      <View>
        <FontAwesome
          name="envelope"
          size={24}
          color="#F0D399"
          style={styles.message}
        />
        <View style={styles.number}>
          <Text style={styles.numberContent}>1</Text>
        </View>
      </View>
      <View style={styles.textContent}>
        <Text style={styles.title}>
          <Text style={styles.boldTitle}>FREE</Text> Premium Available
        </Text>
        <Text style={styles.subTitle}>Tap to upgrade your account!</Text>
      </View>
      <AntDesign name="right" size={24} color="#FFDE9CCC" />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  premiumBox: {
    width: wp("87.2%"),
    height: hp("7.9%"),
    backgroundColor: "#24201A",
    borderRadius: wp("3.2%"),
    marginTop: hp("2.5%"),
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    paddingHorizontal: wp("5.3%"),
    marginBottom: hp("2.5%"),
  },
  message: {
    left: wp("5.3%"),
  },
  number: {
    position: "absolute",
    backgroundColor: "red",
    padding: wp("1.1%"),
    width: wp("3.7%"),
    borderRadius: wp("3.7%"),
    top: 0,
    left: wp("9.6%"),
  },
  numberContent: {
    color: "white",
    fontSize: wp("2.1%"),
    fontWeight: "bold",
  },
  textContent: {
    width: wp("60.8%"),
    height: hp("4.7%"),
    marginLeft: wp("19.2%"),
  },
  title: {
    fontSize: wp("4.3%"),
    fontWeight: "600",
    color: "#E5C990",
    marginTop: hp("0.6%"),
  },
  boldTitle: {
    fontWeight: "700",
  },
  subTitle: {
    fontSize: wp("3.5%"),
    fontWeight: "400",
    color: "#FFDE9CCC",
  },
  buttonPressed: {
    opacity: 0.6,
  },
});
export default PremiumBox;
