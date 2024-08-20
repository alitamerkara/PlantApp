import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomePage from "./HomePage";
import Onboard from "./Onboard";
const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <View style={{ borderWidth: 1, flex: 1 }}>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Onboard"
            component={Onboard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
  },
});
