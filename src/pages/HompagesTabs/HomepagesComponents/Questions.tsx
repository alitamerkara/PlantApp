import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
} from "react-native";

const renderItem = ({ item }) => {
  const image = { uri: item.image_uri };
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.renderContainer}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </ImageBackground>
  );
};

const Questions = () => {
  const [datas, setDatas] = useState([]);
  useLayoutEffect(() => {
    const fetchData = async () => {
      await fetch("https://dummy-api-jtg6bessta-ey.a.run.app/getQuestions")
        .then((res) => res.json())
        .then((data) => setDatas(data))
        .catch((error) => console.log("Error fetching data", error));
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started</Text>
      <FlatList
        data={datas}
        renderItem={renderItem}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 494,
    height: 200,
    marginLeft: 24,
    gap: 10,
  },
  title: {
    marginHorizontal: 6,
    fontSize: 15,
    fontWeight: "500",
  },
  renderContainer: {
    width: 240,
    height: 164,
    justifyContent: "flex-end",
    padding: 14,
  },
  image: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 12,
    overflow: "hidden",
  },
  text: {
    fontSize: 15,
    color: "#FFFFFF",
  },
  flatList: {
    width: 370,
    height: 200,
  },
});
export default Questions;
