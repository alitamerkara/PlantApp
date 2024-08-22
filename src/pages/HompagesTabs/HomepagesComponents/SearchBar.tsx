import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  Keyboard,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
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
    width: "100%",
  },
  image: {
    flex: 1,
    resizeMode: "center",
  },
  textContainer: {
    marginTop: 50,
    width: 225,
  },
  content: {
    marginLeft: 30,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "400",
    height: 19,
  },
  greeting2: {
    fontSize: 24,
    fontWeight: "500",
    height: 28,
  },
  searchInput: {
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    height: 44,
    width: 327,
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 0.2,
    borderColor: "#3C3C4340",
    padding: 10,
  },
  input: {
    paddingLeft: 8,
    fontSize: 15,
    width: "90%",
  },
});
export default SearchBar;
