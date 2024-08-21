import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

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
    width: 327,
    height: 64,
    marginLeft: 24,
    backgroundColor: "#24201A",
    borderRadius: 12,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 20,
    marginBottom: 20,
  },
  message: {
    left: 20,
  },
  number: {
    position: "absolute",
    backgroundColor: "red",
    padding: 4,
    width: 14,
    borderRadius: 14,
    top: 0,
    left: 36,
  },
  numberContent: {
    color: "white",
    fontSize: 8,
    fontWeight: "bold",
  },
  textContent: {
    width: 228,
    height: 38,
    marginLeft: 72,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#E5C990",
    marginTop: 5,
  },
  boldTitle: {
    fontWeight: "700",
  },
  subTitle: {
    fontSize: 13,
    fontWeight: "400",
    color: "#FFDE9CCC",
  },
  buttonPressed: {
    opacity: 0.6,
  },
});
export default PremiumBox;
