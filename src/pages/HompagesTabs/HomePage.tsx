import { View, StyleSheet } from "react-native";
import SearchBar from "./HomepagesComponents/SearchBar";
import Categories from "./HomepagesComponents/Categories";
import { normalizew, normalizeh } from "../../utils/normalize";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <SearchBar />
      </View>
      <Categories />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    width: normalizew(390),
    height: normalizeh(175),
  },
});
export default HomePage;
