import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HompagesTabs/HomePage";
import Onboarding from "../pages/Onboarding";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Diagnose from "../pages/HompagesTabs/Diagnose";
import Scanner from "../pages/HompagesTabs/Scanner";
import MyGarden from "../pages/HompagesTabs/MyGarden";
import Profile from "../pages/HompagesTabs/Profile";
import { Image, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { useSelector } from "react-redux";
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
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarLabelStyle: {
        color: "#BDBDBD",
        fontWeight: "bold",
      },
      tabBarIcon: ({ focused }) => {
        if (route.name === "HomePage") {
          return (
            <MaterialCommunityIcons
              name="folder-multiple"
              size={25}
              color={focused ? "#28AF6E" : "#BDBDBD"}
            />
          );
        } else if (route.name === "Diagnose") {
          return (
            <MaterialIcons
              name="health-and-safety"
              size={25}
              color={focused ? "#28AF6E" : "#BDBDBD"}
            />
          );
        } else if (route.name === "Scanner") {
          return (
            <View style={styles.scanner}>
              <MaterialIcons name="document-scanner" size={25} color="white" />
            </View>
          );
        } else if (route.name === "MyGarden") {
          return (
            <Ionicons
              name="leaf"
              size={25}
              color={focused ? "#28AF6E" : "#BDBDBD"}
            />
          );
        } else if (route.name === "Profile") {
          return (
            <Feather
              name="user"
              size={25}
              color={focused ? "#28AF6E" : "#BDBDBD"}
            />
          );
        }
      },
    })}
  >
    <Tab.Screen
      name="HomePage"
      component={HomePage}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Diagnose"
      component={Diagnose}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Scanner"
      component={Scanner}
      options={{ headerShown: false, tabBarLabel: () => null }}
    />
    <Tab.Screen
      name="MyGarden"
      component={MyGarden}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

export default function Router() {
  const onboard = useSelector((state: any) => state.slicer.onboard);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {onboard ? (
          <Stack.Screen
            name="OnboardingStack"
            component={OnboardingStack}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="AppStack"
            component={AppStack}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
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
