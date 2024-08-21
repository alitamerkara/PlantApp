import React from "react";
import { StyleSheet, Text, Pressable, Dimensions } from "react-native";
import { PrimaryButtonProps } from "./types";

export default function PrimaryButton({
  children,
  onPress,
}: PrimaryButtonProps) {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#28AF6E",
    width: 327,
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: width * 0.064,
    marginTop: height * 0.02,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
});
