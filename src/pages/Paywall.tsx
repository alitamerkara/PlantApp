import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Text,
  Dimensions,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { features } from "../components/slides";
import Feature from "./Feature";
import { FeatureType } from "../components/types";
import BuyPremium from "./BuyPremium";

const { width, height } = Dimensions.get("screen");
const FeaturesList = ({ item }: { item: FeatureType }) => {
  return <Feature item={item} />;
};

const Paywall = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../photos/paywall.png")}
        style={styles.backgroundImage}
      >
        <Pressable style={styles.closeButton}>
          <AntDesign name="closecircleo" size={24} color="white" />
        </Pressable>
        <View style={styles.content}>
          <Text style={styles.title}>
            PlantApp <Text style={styles.anotherTitle}>Premium</Text>
          </Text>
          <Text style={styles.subTitle}>Access All Features</Text>
        </View>
        <FlatList
          data={features}
          renderItem={FeaturesList}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          style={styles.flatList}
        />
        <View style={styles.buyPremium}>
          <BuyPremium />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101E17",
    width,
    height,
    position: "relative",
  },
  backgroundImage: {
    width,
    height: height * 0.7,
    resizeMode: "cover",
    justifyContent: "center",
    position: "absolute",
    top: 0,
  },
  content: {
    flex: 1,
    width: width * 0.93,
    height: height * 0.63,
    position: "absolute",
    top: height * 0.38,
    left: width * 0.064,
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
    marginTop: height * 0.006,
  },
  closeButton: {
    position: "absolute",
    top: 55,
    left: 335,
  },
  flatList: {
    width,
    flexDirection: "row",
    position: "absolute",
    top: height * 0.48,
  },
  buyPremium: {
    top: 400,
  },
});

export default Paywall;
