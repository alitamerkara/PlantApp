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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
    width: wp("100%"),
    height: hp("41.5%"),
    resizeMode: "cover",
    position: "relative",
  },
  all: {
    height: hp("100%"),
    width: wp("100%"),
    backgroundColor: "#101E17",
  },
  content: {
    width: wp("87.8%"),
    height: hp("8.4%"),
    left: wp("6.4%"),
    position: "absolute",
    top: hp("33.2%"),
  },
  title: {
    fontSize: wp("7.7%"),
    color: "#FFFFFF",
    fontWeight: "800",
  },
  anotherTitle: {
    fontWeight: "300",
  },
  subTitle: {
    fontWeight: "300",
    color: "#FFFFFFB2",
    fontSize: wp("4.4%"),
    marginTop: hp("1.2%"),
  },
  closeButton: {
    position: "absolute",
    top: hp("6.5%"),
    left: wp("83.3%"),
    padding: wp("5.3%"),
  },
  flatList: {
    width: wp("64.1%"),
    height: hp("9.5%"),
    flexDirection: "row",
  },
  scroll: {
    gap: hp("2.4%"),
  },
});

export default Paywall;
