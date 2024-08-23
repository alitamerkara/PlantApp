import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  Keyboard,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { normalizeh, normalizew } from "../../../utils/normalize";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../photos/searchLeaf1.png")}
        style={styles.image}
      >
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.greeting}>Hi, plant lover!</Text>
            <Text style={styles.greeting2}>Good Afternoon! ⛅</Text>
          </View>
          <View style={styles.searchInput}>
            <AntDesign
              name="search1"
              size={18}
              color="#ABABAB"
              onPress={() => Keyboard.dismiss()}
            />
            <TextInput style={styles.input} placeholder="Search for plants" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: normalizew(390),
  },
  image: {
    flex: 1,
    resizeMode: "center",
  },
  textContainer: {
    marginTop: normalizew(50),
    width: normalizeh(225),
  },
  content: {
    marginLeft: normalizew(30),
  },
  greeting: {
    fontSize: normalizew(16),
    fontWeight: "400",
    height: normalizeh(19),
  },
  greeting2: {
    fontSize: normalizew(24),
    fontWeight: "500",
    height: normalizew(28),
  },
  searchInput: {
    marginTop: normalizeh(10),
    alignItems: "center",
    flexDirection: "row",
    height: normalizeh(44),
    width: normalizew(327),
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 0.2,
    borderColor: "#3C3C4340",
    padding: normalizew(10),
  },
  input: {
    paddingLeft: normalizew(8),
    fontSize: normalizew(15),
    width: normalizew(294),
  },
});
export default SearchBar;
