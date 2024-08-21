import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./pages/Onboarding";
import HomePage from "./pages/HomePage";
const Stack = createNativeStackNavigator();
export default function Home() {
  return (
    <View style={styles.container}>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <Stack.Navigator>
          <Stack.Screen
            name="HomePage"
            component={HomePage}
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
  },
});
