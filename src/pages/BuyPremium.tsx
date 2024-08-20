import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { offers } from "../components/slides";
import PrimaryButton from "../components/PrimaryButton";

const { width, height } = Dimensions.get("screen");
const BuyPremium = () => {
  const handlePress = () => {};
  return (
    <View style={styles.container}>
      {offers.map((item, index) => (
        <View style={item.id == 2 ? styles.year : styles.month} key={index}>
          {item.id == 2 && (
            <View style={styles.topTitleContainer}>
              <Text style={styles.topTitle}>Save 50%</Text>
            </View>
          )}
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
        </View>
      ))}
      <PrimaryButton onPress={handlePress}>Try free for 3 days</PrimaryButton>
      <View style={styles.termsContainer}>
        <Text style={styles.terms}>
          After the 3-day free trial period you’ll be charged ₺274.99 per year
          unless you cancel before the trial expires. Yearly Subscription is
          Auto-Renewable
        </Text>
      </View>
      <Text style={styles.legal}>Terms • Privacy • Restore</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width * 0.87,
    height: height * 0.33,
    position: "relative",
  },
  year: {
    width: 327,
    height: 60,
    left: 24,
    top: 10,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#28AF6E",
    justifyContent: "center",
    padding: 20,
    marginBottom: 10,
  },
  month: {
    width: 327,
    height: 60,
    left: 24,
    top: 10,
    borderRadius: 14,
    backgroundColor: "#FFFFFF4D",
    borderWidth: 1.5,
    borderColor: "#FFFFFF4D",
    justifyContent: "center",
    padding: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  subTitle: {
    fontSize: 12,
    color: "#FFFFFFB2",
  },
  topTitleContainer: {
    width: 77,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#28AF6E",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 0,
    position: "absolute",
    top: 0,
    right: 0,
  },
  topTitle: {
    color: "white",
  },
  termsContainer: {
    width: 327,
    height: 24,
    left: 30,
    marginTop: 10,
  },
  terms: {
    fontSize: 9,
    color: "#FFFFFF85",
    textAlign: "center",
  },
  legal: {
    fontSize: 11,
    color: "#FFFFFF80",
    textAlign: "center",
    left: 30,
  },
});
export default BuyPremium;
