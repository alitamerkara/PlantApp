import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage";
import Onboarding from "../pages/Onboarding";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const OnboardingStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Onboarding"
      component={Onboarding}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
const AppStack = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomePage"
      component={HomePage}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

export default function Router() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="OnboardingStack"
          component={OnboardingStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AppStack"
          component={AppStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
