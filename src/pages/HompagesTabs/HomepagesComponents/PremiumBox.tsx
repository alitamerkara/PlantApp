import { Text, View, StyleSheet, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { normalizeh, normalizew } from "../../../utils/normalize";

const PremiumBox = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.premiumBox,
        pressed && styles.buttonPressed,
      ]}
    >
      <View>
        <FontAwesome
          name="envelope"
          size={24}
          color="#F0D399"
          style={styles.message}
        />
        <View style={styles.number}>
          <Text style={styles.numberContent}>1</Text>
        </View>
      </View>
      <View style={styles.textContent}>
        <Text style={styles.title}>
          <Text style={styles.boldTitle}>FREE</Text> Premium Available
        </Text>
        <Text style={styles.subTitle}>Tap to upgrade your account!</Text>
      </View>
      <AntDesign name="right" size={24} color="#FFDE9CCC" />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  premiumBox: {
    width: normalizew(340),
    height: normalizeh(64),
    backgroundColor: "#24201A",
    borderRadius: normalizew(12),
    marginVertical: normalizeh(20),
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    paddingHorizontal: normalizew(20),
  },
  message: {
    left: normalizew(20),
  },
  number: {
    position: "absolute",
    backgroundColor: "red",
    padding: normalizew(5),
    width: normalizew(14),
    borderRadius: 14,
    top: 0,
    left: normalizew(36),
  },
  numberContent: {
    color: "white",
    fontSize: normalizew(8),
    fontWeight: "bold",
  },
  textContent: {
    width: normalizew(228),
    height: normalizeh(38),
    marginLeft: normalizew(72),
  },
  title: {
    fontSize: normalizew(16),
    fontWeight: "600",
    color: "#E5C990",
  },
  boldTitle: {
    fontWeight: "700",
  },
  subTitle: {
    fontSize: normalizew(13),
    fontWeight: "400",
    color: "#FFDE9CCC",
  },
  buttonPressed: {
    opacity: 0.6,
  },
});
export default PremiumBox;
