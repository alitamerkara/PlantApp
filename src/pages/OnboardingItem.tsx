import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import { OnboardingType } from "../components/types";
import PrimaryButton from "../components/PrimaryButton";
import Paywall from "./Paywall";
interface OnboardingItemProps {
  item: OnboardingType;
}

const { width, height } = Dimensions.get("screen");
const OnboardingItem = ({ item, onPress, navigation }: OnboardingItemProps) => {
  return item.id === 3 ? (
    <Paywall navigation={navigation} />
  ) : (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {item.title}
          <Text style={styles.anotherTitle}> {item.bold} </Text>
          {item.title2}
        </Text>
        <Image style={styles.brush} source={require("../photos/brush.png")} />
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
    width: width * 0.81,
    height: height * 0.081,
    marginTop: height * 0.073,
    marginLeft: width * 0.064,
    position: "relative",
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: "500",
  },
  anotherTitle: {
    fontWeight: "800",
  },
  brush: {
    width: width * 0.405,
    height: height * 0.026,
    position: "absolute",
    top: height * 0.034,
    left: width * 0.32,
  },
  image: {
    width: width,
    height: height * 0.653,
    marginBottom: -height * 0.02,
    resizeMode: "contain",
  },
  image2: {
    width: width,
    height: height * 0.6,
    marginTop: height * 0.05,
    marginBottom: -height * 0.02,
    resizeMode: "contain",
    position: "relative",
  },
  subImage: {
    height: "20%",
    width: "40%",
    position: "absolute",
    right: 0,
  },
});

export default OnboardingItem;
