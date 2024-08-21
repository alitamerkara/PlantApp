import React from "react";
import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import SearchBar from "./HomepagesComponents/SearchBar";
import PremiumBox from "./HomepagesComponents/PremiumBox";
import Questions from "./HomepagesComponents/Questions";
import Categories from "./HomepagesComponents/Categories";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <SearchBar />
      </View>
      {/* <PremiumBox />
        <Questions /> */}
      <Categories />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    width: "100%",
    height: 175,
  },
});
export default HomePage;
