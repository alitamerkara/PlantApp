import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
    width: wp("100%"),
    height: hp("24.6%"),
    gap: hp("1.2%"),
    marginBottom: hp("4%"),
  },
  title: {
    marginHorizontal: wp("1.6%"),
    fontSize: wp("4%"),
    fontWeight: "500",
  },
  renderContainer: {
    width: wp("55%"),
    height: hp("20.2%"),
    justifyContent: "flex-end",
    padding: wp("3.7%"),
  },
  image: {
    flex: 1,
    marginHorizontal: wp("1.3%"),
    borderRadius: wp("3.2%"),
    overflow: "hidden",
  },
  text: {
    fontSize: wp("4%"),
    color: "#FFFFFF",
  },
  flatList: {
    width: wp("98.7%"),
    height: hp("24.6%"),
  },
});
export default Questions;
