import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feature from "./Feature";
import BuyPremium from "./BuyPremium";
import { useDispatch } from "react-redux";
import { setOnboard } from "../store/reducers/slices";
import { normalizeh, normalizew } from "../utils/normalize";
import { features } from "../components/constants";

const Paywall = () => {
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
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            PlantApp <Text style={styles.boldTitle}>Premium</Text>
          </Text>
          <Text style={styles.subTitle}>Access All Features</Text>
        </View>
      </ImageBackground>
      <View style={styles.scroll}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          nestedScrollEnabled={true}
        >
          {features.map((item, index) => {
            return <Feature key={index} item={item} />;
          })}
        </ScrollView>
        <BuyPremium />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: normalizew(390),
    height: normalizeh(340),
    resizeMode: "contain",
    position: "relative",
  },
  all: {
    width: normalizew(390),
    height: normalizeh(844),
    backgroundColor: "#101E17",
  },
  titleContainer: {
    width: normalizew(327),
    height: normalizeh(71),
    left: normalizew(24),
    position: "absolute",
    top: normalizeh(264),
  },
  title: {
    fontSize: normalizew(30),
    color: "#FFFFFF",
    fontWeight: "800",
  },
  boldTitle: {
    fontWeight: "300",
  },
  subTitle: {
    fontWeight: "300",
    color: "#FFFFFFB2",
    fontSize: normalizew(17),
    marginTop: normalizeh(6),
  },
  closeButton: {
    position: "absolute",
    top: normalizeh(55),
    left: normalizew(320),
    padding: normalizew(25),
  },
  scroll: {
    gap: normalizeh(20),
  },
});

export default Paywall;
