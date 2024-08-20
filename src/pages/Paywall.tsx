import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Text,
  Dimensions,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const { width, height } = Dimensions.get("screen");

const Paywall = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="green" barStyle="light-content" />
      <ImageBackground
        source={require("../photos/paywall.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Text style={styles.title}>
            PlantApp <Text style={styles.anotherTitle}>Premium</Text>
          </Text>
          <Text style={styles.subTitle}>Access All Features</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    width,
    height,
  },
  backgroundImage: {
    width,
    height: "70%",
    resizeMode: "cover",
    justifyContent: "center",
    position: "relative",
  },
  content: {
    flex: 1,
    width: "80%",
    paddingBottom: 20,
    position: "absolute",
    marginLeft: "4%",
  },
  title: {
    fontSize: width * 0.1,
    color: "#FFFFFF",
    fontWeight: "800",
  },
  anotherTitle: {
    fontWeight: "300",
  },
  subTitle: {
    fontWeight: "300",
    color: "#FFFFFFB2",
    fontSize: width * 0.05,
  },
});

export default Paywall;
