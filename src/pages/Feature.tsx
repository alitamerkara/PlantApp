import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { FeatureType } from "../components/types";
import { normalizeh, normalizew } from "../utils/normalize";
const Feature = ({ item }: { item: FeatureType }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} />
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.subText}>{item.subTitle}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: normalizew(150),
    height: normalizeh(117),
    backgroundColor: "#FFFFFF14",
    borderRadius: normalizew(14),
    marginLeft: normalizew(10),
    paddingTop: normalizeh(14),
    paddingLeft: normalizew(14),
  },
  image: {
    width: normalizew(36),
    height: normalizeh(36),
    backgroundColor: "#1b2420",
    borderRadius: normalizew(10),
    marginBottom: normalizeh(11),
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: normalizew(20),
    marginBottom: normalizeh(3),
    letterSpacing: 0.38,
  },
  subText: {
    color: "#FFFFFFB2",
    fontWeight: "400",
    fontSize: normalizew(13),
  },
});
export default Feature;
