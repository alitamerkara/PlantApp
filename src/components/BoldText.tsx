import { Text, StyleSheet } from "react-native";

const BoldText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};
const styles = StyleSheet.create({
  text: {
    fontWeight: "800",
  },
});
export default BoldText;
