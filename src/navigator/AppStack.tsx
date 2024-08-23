import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../pages/HompagesTabs/HomePage";
import HomeIcon from "../../assets/Logos/Icon.svg";
import DiagnoseIcon from "../../assets/Logos/Vector.svg";
import ScannerIcon from "../../assets/Logos/scanner.svg";
import LeafIcon from "../../assets/Logos/Leaf.svg";
import ProfileIcon from "../../assets/Logos/profile.svg";
import Diagnose from "../pages/HompagesTabs/Diagnose";
import Scanner from "../pages/HompagesTabs/Scanner";
import MyGarden from "../pages/HompagesTabs/MyGarden";
import Profile from "../pages/HompagesTabs/Profile";

const Tab = createBottomTabNavigator();

export const AppStack = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarLabelStyle: ({ focused }: { focused: boolean }) => ({
        color: focused ? "#28AF6E" : "#BDBDBD",
        fontWeight: "bold",
      }),
      tabBarIcon: ({ focused }) => {
        const fill = focused ? "#28AF6E" : "#BDBDBD";
        if (route.name === "HomePage") {
          return <HomeIcon fill={fill} />;
        } else if (route.name === "Diagnose") {
          return <DiagnoseIcon fill={fill} />;
        } else if (route.name === "Scanner") {
          return (
            <View style={styles.scanner}>
              <ScannerIcon fill={fill} />
            </View>
          );
        } else if (route.name === "MyGarden") {
          return <LeafIcon fill={fill} />;
        } else if (route.name === "Profile") {
          return <ProfileIcon fill={fill} />;
        }
      },
      tabBarActiveTintColor: "#28AF6E", // Aktif tab rengi (ikonlar ve etiketler)
      tabBarInactiveTintColor: "#BDBDBD", // Aktif olmayan tab rengi (ikonlar ve etiketler)
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
