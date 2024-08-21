import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import PremiumBox from "./PremiumBox";
import Questions from "./Questions";

const renderItem = ({ item }) => {
  const image = { uri: item.image.url };
  return (
    <View style={styles.renderContainer}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>{item.title}</Text>
      </ImageBackground>
    </View>
  );
};

const Categories = () => {
  const [datas, setDatas] = useState({
    data: [],
    loading: true,
    error: false,
  });
  useLayoutEffect(() => {
    const fetchData = async () => {
      await fetch("https://dummy-api-jtg6bessta-ey.a.run.app/getCategories")
        .then((res) => res.json())
        .then((data) => {
          setDatas(data.data);
        })
        .catch((error) => console.log("Error fetching data", error));
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView bounces={false}>
        <PremiumBox />
        <Questions />
        <FlatList
          data={datas}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          style={styles.flatList}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 494,
    height: 600,
    gap: 10,
  },
  renderContainer: {
    width: 158,
    height: 152,
    justifyContent: "flex-end",
    padding: 14,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 16,
    color: "#13231B",
    width: 70,
    fontWeight: "500",
  },
  flatList: {
    marginLeft: 48,
  },
});
export default Categories;
