import { Text, View, StyleSheet } from "react-native";
import { normalizew } from "../../utils/normalize";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Page</Text>
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
export default Profile;
