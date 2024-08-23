import { StyleSheet, Text, Pressable } from "react-native";
import { OnboardingItemProps, PrimaryButtonProps } from "./types";
import { normalizeh, normalizew } from "../utils/normalize";
import React from "react";

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

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#28AF6E",
    width: normalizew(327),
    height: normalizeh(52),
    borderRadius: normalizew(12),
    alignItems: "center",
    justifyContent: "center",
    marginTop: normalizeh(16),
  },
  buttonText: {
    color: "white",
    fontSize: normalizew(18),
    fontWeight: "700",
  },
});
