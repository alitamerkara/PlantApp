import { StyleSheet, View, Text, Image, StatusBar } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { normalizeh, normalizew } from "../utils/normalize";
import { useDispatch, useSelector } from "react-redux";
import { setGetStarted } from "../store/reducers/slices";
import { RootState } from "../store/store";

export default function GetStarted() {
  const dispatch = useDispatch();
  const getStarted = useSelector((state: RootState) => state.slicer.getStarted);

  const handlerPress = () => {
    dispatch(setGetStarted(!getStarted));
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
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={handlerPress}>Get Started</PrimaryButton>
      </View>
      <View style={styles.terms}>
        <Text style={styles.termsText}>
          By tapping next, you are agreeing to PlantID{" "}
          <Text style={styles.underline}>Terms of Use</Text> &{" "}
          <Text style={styles.underline}>Privacy Policy</Text>.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 75,
  },
  titleContainer: {
    marginLeft: normalizew(24),
  },
  title: {
    fontSize: normalizew(28),
    color: "#13231B",
    fontWeight: "400",
    lineHeight: normalizeh(33),
  },
  boldTitle: {
    fontWeight: "700",
  },
  subTitle: {
    width: normalizew(275),
    fontSize: normalizew(16),
    color: "#13231BB2",
    fontWeight: "400",
    lineHeight: normalizeh(22),
  },
  image: {
    width: "100%",
    height: normalizew(499),
    marginTop: 20,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  terms: {
    height: normalizeh(50),
    marginTop: normalizeh(17),
    alignItems: "center",
  },
  termsText: {
    color: "#597165B2",
    fontSize: normalizew(11),
    textAlign: "center",
    lineHeight: normalizeh(15),
    width: normalizeh(232),
  },
  underline: {
    textDecorationLine: "underline",
  },
});
