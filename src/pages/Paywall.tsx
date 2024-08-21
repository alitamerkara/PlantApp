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
import { features } from "../components/constants";
import Feature from "./Feature";
import { FeatureType, PageProps } from "../components/types";
import BuyPremium from "./BuyPremium";
import { useDispatch } from "react-redux";
import { setOnboard } from "../store/reducers/slices";

const { width, height } = Dimensions.get("screen");

const FeaturesList = ({ item }: { item: FeatureType }) => {
  return <Feature item={item} />;
};

const Paywall = ({ navigation }: PageProps) => {
  const dispatch = useDispatch();

  const closeOffer = () => {
    dispatch(setOnboard(false));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../photos/paywall.png")}
        style={styles.backgroundImage}
      >
        <Pressable style={styles.closeButton} onPress={closeOffer}>
          <AntDesign name="closecircleo" size={24} color="white" />
        </Pressable>
        <View style={styles.design}>
          <View style={styles.content}>
            <Text style={styles.title}>
              PlantApp <Text style={styles.anotherTitle}>Premium</Text>
            </Text>
            <Text style={styles.subTitle}>Access All Features</Text>
          </View>
          <FlatList
            data={features}
            renderItem={FeaturesList}
            // keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            style={styles.flatList}
          />
          <View style={styles.buyPremium}>
            <BuyPremium />
          </View>
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
    height: height * 0.65,
    resizeMode: "cover",
    justifyContent: "center",
    position: "absolute",
    top: 0,
  },
  design: {
    height: 514,
    width: 351,
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
    left: 325,
    padding: 20,
  },
  flatList: {
    width: width,
    flexDirection: "row",
    top: height * 0.48,
    marginBottom: 15,
  },
  buyPremium: {
    top: 400,
  },
});

export default Paywall;
