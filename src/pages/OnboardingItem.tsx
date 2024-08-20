import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import { OnboardingType } from "../components/types";
import PrimaryButton from "../components/PrimaryButton";
import Paywall from "./Paywall";

interface OnboardingItemProps {
  item: OnboardingType;
}

const { width, height } = Dimensions.get("screen");
const OnboardingItem = ({ item, onPress }: OnboardingItemProps) => {
  return item.id === 3 ? (
    <Paywall />
  ) : (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {item.id === 1 && (
          <Text style={styles.title}>
            Take a photo to <Text style={styles.anotherTitle}> identify</Text>{" "}
            the plant!
          </Text>
        )}
        {item.id !== 3 && (
          <Image
            style={item.id === 1 ? styles.brush : styles.brush2}
            source={require("../photos/brush.png")}
          />
        )}
        {item.id === 2 && (
          <Text style={styles.title}>
            Get plant<Text style={styles.anotherTitle}> care guides</Text>
          </Text>
        )}
      </View>
      {item.id !== 3 && (
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: height,
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
    width: width * 0.362,
    height: height * 0.016,
    position: "absolute",
    top: height * 0.04,
    left: width * 0.4,
  },
  brush2: {
    width: width * 0.405,
    height: height * 0.016,
    position: "absolute",
    top: height * 0.04,
    left: width * 0.3,
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
