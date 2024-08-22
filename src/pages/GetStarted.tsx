import { StyleSheet, View, Text, Image, StatusBar } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function GetStarted({ setValue }) {
  const handlerPress = () => {
    setValue((value: boolean) => !value);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Welcome to <Text style={styles.boldTitle}>PlantApp</Text>
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
    marginTop: hp("7%"),
  },
  titleContainer: {
    width: wp("80%"),
    height: hp("10%"),
    marginLeft: wp("6%"),
  },
  title: {
    width: wp("76%"),
    height: hp("4%"),
    fontSize: wp("7%"),
    color: "#13231B",
    fontWeight: "400",
    lineHeight: hp("4%"),
  },
  boldTitle: {
    fontWeight: "700",
  },
  subTitle: {
    width: wp("60%"),
    height: hp("5%"),
    fontSize: wp("4%"),
    paddingRight: wp("3%"),
    color: "#13231BB2",
    fontWeight: "400",
    lineHeight: hp("2.5%"),
  },
  image: {
    width: wp("100%"),
    height: hp("61%"),
    marginTop: hp("2%"),
    resizeMode: "contain",
  },
  terms: {
    width: wp("61%"),
    height: hp("3.6%"),
    marginLeft: wp("19%"),
    marginTop: hp("2%"),
    alignItems: "center",
  },
  termsText: {
    color: "#597165B2",
    fontSize: wp("3%"),
    textAlign: "center",
    lineHeight: hp("1.8%"),
  },
});
