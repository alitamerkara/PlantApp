import { Text, StyleSheet, View } from "react-native";
import { normalizew } from "../../utils/normalize";

const Diagnose = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Diagnose Page</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: normalizew(30),
    fontWeight: "700",
    color: "#28AF6E",
  },
});
export default Diagnose;
