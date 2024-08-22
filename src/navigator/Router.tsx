import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { OnboardingStack } from "./OnboardingStack";
import { AppStack } from "./AppStack";

export default function Router() {
  const onboard = useSelector((state: any) => state.slicer.onboard);

  return (
    <NavigationContainer independent={true}>
      {onboard ? <OnboardingStack /> : <AppStack />}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  scanner: {
    backgroundColor: "#28AF6E",
    top: -20,
    borderWidth: 4,
    borderColor: "#FFFFFF3D",
    borderRadius: 60,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
