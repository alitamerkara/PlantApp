import React from "react";
import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import SearchBar from "./HomepagesComponents/SearchBar";
import Categories from "./HomepagesComponents/Categories";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
    width: wp("100%"),
    height: hp("21.5%"),
  },
});
export default HomePage;
