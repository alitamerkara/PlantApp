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
          <Image source={item.image} style={styles.image} />
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
    height,
  },
  titleContainer: {
    width: width * 0.7,
    height: height * 0.08,
    marginVertical: height * 0.06,
    marginLeft: width * 0.064,
    position: "relative",
  },
  title: {
    fontSize: width * 0.073,
    fontWeight: "500",
  },
  anotherTitle: {
    fontWeight: "800",
  },
  brush: {
    width: width * 0.3,
    height: height * 0.05,
    position: "absolute",
    top: height * 0.02,
    right: "5%",
  },
  brush2: {
    width: width * 0.37,
    height: height * 0.05,
    position: "absolute",
    top: height * 0.027,
    right: "15%",
  },
  image: {
    width: width,
    height: "60%",
    marginBottom: -height * 0.02,
    resizeMode: "contain",
    position: "relative",
  },
  subImage: {
    height: "20%",
    width: "40%",
    position: "absolute",
    top: "-7%",
    right: "10%",
  },
});
export default OnboardingItem;
