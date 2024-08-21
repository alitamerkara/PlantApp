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
export default function GetStarted({ setValue }) {
  const handlerPress = () => {
    setValue((value: boolean) => !value);
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
    width: width * 0.8,
    height: height * 0.1,
    marginTop: height * 0.07,
    marginLeft: width * 0.06,
  },
  title: {
    width: width * 0.76,
    height: height * 0.04,
    fontSize: width * 0.07,
    color: "#13231B",
    fontWeight: "400",
  },
  anotherTitle: {
    fontWeight: "700",
  },
  subTitle: {
    width: width * 0.8,
    height: height * 0.05,
    fontSize: width * 0.04,
    color: "#13231BB2",
    fontWeight: "400",
  },
  image: {
    width: width,
    height: height * 0.61,
    resizeMode: "contain",
  },
  terms: {
    width: width * 0.61,
    height: height * 0.03,
    marginLeft: width * 0.19,
    marginTop: height * 0.02,
    alignItems: "center",
  },
  termsText: {
    color: "#597165B2",
    fontSize: width * 0.029,
    textAlign: "center",
  },
});
