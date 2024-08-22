import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import { OnboardingType } from "../components/types";
import PrimaryButton from "../components/PrimaryButton";
import Paywall from "./Paywall";
interface OnboardingItemProps {
  item: OnboardingType;
}
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const OnboardingItem = ({ item, onPress, navigation }: OnboardingItemProps) => {
  return item.id === 3 ? (
    <Paywall navigation={navigation} />
  ) : (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={item.id === 1 ? styles.brush : styles.brush2}
          source={require("../photos/brush.png")}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {item.title}
            <Text style={styles.boldTitle}> {item.bold} </Text>
            {item.title2}
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <Image
          source={item.image}
          style={item.id === 1 ? styles.image : styles.image2}
        />
        {item.id === 2 && (
          <Image
            source={require("../photos/onboarding3-1.png")}
            style={styles.subImage}
          />
        )}
        <PrimaryButton onPress={onPress}>Continue</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  titleContainer: {
    width: wp("80%"),
  },
  content: {
    width: wp("100%"),
    height: hp("8.1%"),
    paddingLeft: wp("6.4%"),
    marginTop: hp("7.2%"),
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: wp("7.4%"),
    fontWeight: "600",
    lineHeight: hp("4.06%"),
    letterSpacing: -1,
  },
  boldTitle: {
    fontWeight: "900",
    lineHeight: hp("4%"),
  },
  brush: {
    width: wp("36.2%"),
    height: hp("2.6%"),
    position: "absolute",
    top: hp("4.1%"),
    left: wp("47.7%"),
  },
  brush2: {
    width: wp("40.5%"),
    height: hp("4.4%"),
    position: "absolute",
    top: hp("5%"),
    left: wp("33%"),
  },
  image: {
    width: wp("100%"),
    height: hp("65.3%"),
    marginBottom: -hp("2%"),
    resizeMode: "contain",
  },
  image2: {
    width: wp("100%"),
    height: hp("60%"),
    marginTop: hp("5%"),
    marginBottom: -hp("2%"),
    resizeMode: "contain",
    position: "relative",
  },
  subImage: {
    height: hp("20%"),
    width: wp("40%"),
    position: "absolute",
    right: 0,
  },
});

export default OnboardingItem;
