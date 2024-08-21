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
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { features } from "../components/constants";
import Feature from "./Feature";
import { FeatureType, PageProps } from "../components/types";
import BuyPremium from "./BuyPremium";
import { useDispatch } from "react-redux";
import { setOnboard } from "../store/reducers/slices";

const { width, height } = Dimensions.get("screen");
const Paywall = ({ navigation }: PageProps) => {
  const dispatch = useDispatch();

  const closeOffer = () => {
    dispatch(setOnboard(false));
  };

  return (
    <View style={styles.all}>
      <ImageBackground
        source={require("../photos/paywall.png")}
        style={styles.backgroundImage}
      >
        <StatusBar barStyle="light-content" />
        <Pressable style={styles.closeButton} onPress={closeOffer}>
          <AntDesign name="closecircleo" size={24} color="white" />
        </Pressable>
        <View style={styles.content}>
          <Text style={styles.title}>
            PlantApp <Text style={styles.anotherTitle}>Premium</Text>
          </Text>
          <Text style={styles.subTitle}>Access All Features</Text>
        </View>
      </ImageBackground>
      <View style={styles.scroll}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          {features.map((item) => {
            return <Feature item={item} />;
          })}
        </ScrollView>

        <BuyPremium />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
    position: "relative",
  },
  all: {
    height,
    width,
    backgroundColor: "#101E17",
  },
  content: {
    width: 327,
    height: 71,
    left: 24,
    position: "absolute",
    top: 280,
  },
  title: {
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "800",
  },
  anotherTitle: {
    fontWeight: "300",
  },
  subTitle: {
    fontWeight: "300",
    color: "#FFFFFFB2",
    fontSize: 17,
    marginTop: 10,
  },
  closeButton: {
    position: "absolute",
    top: 55,
    left: 325,
    padding: 20,
  },
  flatList: {
    width: 250,
    height: 80,
    flexDirection: "row",
  },
  scroll: {
    gap: 20,
  },
});

export default Paywall;
