import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import { PageProps } from "../components/types";
import PrimaryButton from "../components/PrimaryButton";

const { width, height, fontScale } = Dimensions.get("screen");
export default function HomePage({ navigation }: PageProps) {
  const handlerPress = () => {
    navigation.navigate("Onboard");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Welcome to <Text style={styles.anotherTitle}>PlantApp</Text>
        </Text>
        <Text style={styles.subTitle}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
      </View>
      <Image source={require("../photos/homepage.png")} style={styles.image} />
      <PrimaryButton onPress={handlerPress}>Get Started</PrimaryButton>
      <View style={styles.terms}>
        <Text style={styles.termsText}>
          By tapping next, you are agreeing to PlantID Terms of Use & Privacy
          Policy.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  titleContainer: {
    width: "70%",
    height: "10%",
    marginTop: "7%",
    marginLeft: "6%",
  },
  title: {
    fontSize: width * 0.08,
    height: height * 0.04,
    color: "#13231B",
    fontWeight: "400",
  },
  anotherTitle: {
    fontWeight: "700",
  },
  subTitle: {
    fontSize: width * 0.04,
    marginVertical: height * 0.015,
    height: height * 0.54,
    color: "#13231BB2",
    fontWeight: "400",
  },
  image: {
    width: width,
    height: "60%",
    resizeMode: "contain",
  },
  terms: {
    alignItems: "center",
    marginTop: height * 0.02,
  },
  termsText: {
    color: "#597165B2",
    fontSize: width * 0.03,
    width: width * 0.61,
    height: height * 0.036,
    textAlign: "center",
  },
});
