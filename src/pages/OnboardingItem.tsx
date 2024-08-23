import { Text, View, Image, StyleSheet } from "react-native";
import { OnboardingType } from "../components/types";
import PrimaryButton from "../components/PrimaryButton";
import Paywall from "./Paywall";
import { OnboardingItemProps } from "../components/types";
import { normalizeh, normalizew } from "../utils/normalize";

const OnboardingItem: React.FC<OnboardingItemProps> = ({
  item,
  onPress,
}: OnboardingItemProps) => {
  return item.id === 3 ? (
    <Paywall />
  ) : (
    <View style={styles.container}>
      <Image
        style={item.id === 1 ? styles.brush : styles.brush2}
        source={require("../photos/brush.png")}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          {item.title}
          <Text style={styles.boldTitle}> {item.bold} </Text>
          {item.title2}
        </Text>
      </View>
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
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onPress}>Continue</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: normalizeh(755),
    backgroundColor: "white",
  },
  content: {
    width: normalizew(315),
    height: normalizeh(66),
    paddingLeft: normalizew(24),
    marginTop: normalizeh(59),
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: normalizew(303),
    fontSize: normalizew(28),
    fontWeight: "600",
    lineHeight: normalizeh(33),
    letterSpacing: -1,
  },
  boldTitle: {
    fontWeight: "900",
  },
  brush: {
    width: normalizew(136),
    height: normalizeh(13),
    position: "absolute",
    top: normalizeh(93),
    left: normalizew(203),
  },
  brush2: {
    width: normalizew(152),
    height: normalizeh(44),
    position: "absolute",
    top: normalizeh(95),
    left: normalizew(143),
  },
  image: {
    width: normalizew(390),
    height: normalizeh(530),
    marginTop: normalizeh(12),
    marginBottom: normalizeh(-58),
    resizeMode: "contain",
  },
  image2: {
    width: normalizew(390),
    height: normalizeh(540),
    marginTop: normalizeh(15),
    marginBottom: normalizeh(-70),
    resizeMode: "contain",
    position: "relative",
  },
  subImage: {
    height: normalizeh(240),
    width: normalizew(340),
    position: "absolute",
    right: normalizew(10),
    top: normalizeh(130),
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingItem;
