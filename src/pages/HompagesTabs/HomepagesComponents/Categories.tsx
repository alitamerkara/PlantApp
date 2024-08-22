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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
      <FlatList
        data={datas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        ListHeaderComponent={
          <>
            <PremiumBox />
            <Questions />
          </>
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp("126.7%"),
    height: hp("71.1%"),
    gap: hp("1.2%"),
  },
  renderContainer: {
    width: wp("40.5%"),
    height: hp("18%"),
    justifyContent: "flex-end",
    borderRadius: wp("3.1%"),
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "#29BB892E",
    marginVertical: hp("1%"),
    marginHorizontal: hp("0.5%"),
  },
  image: {
    flex: 1,
    marginHorizontal: wp("1.3%"),
  },
  text: {
    fontSize: wp("4.1%"),
    color: "#13231B",
    width: wp("17.9%"),
    fontWeight: "500",
  },
  flatList: {
    marginLeft: wp("6.2%"),
  },
});
export default Categories;
