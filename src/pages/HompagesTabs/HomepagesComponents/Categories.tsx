import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import PremiumBox from "./PremiumBox";
import Questions from "./Questions";
import { normalizeh, normalizew } from "../../../utils/normalize";
import { DataType } from "../../../components/types";
import { CATEGORIES_DATA } from "../../../components/constants";

const renderItem = ({ item }: { item: DataType }) => {
  const image = { uri: item.image.url };
  return (
    <Pressable
      style={({ pressed }) => [
        styles.renderContainer,
        pressed ? styles.buttonPressed : null,
      ]}
    >
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>{item.title}</Text>
      </ImageBackground>
    </Pressable>
  );
};

const Categories = () => {
  const [datas, setDatas] = useState({ data: [], error: false, loading: true });

  useLayoutEffect(() => {
    const fetchData = async () => {
      await fetch(CATEGORIES_DATA)
        .then((res) => res.json())
        .then((data) => {
          setDatas((prev) => ({ ...prev, data: data.data, loading: false }));
        })
        .catch((error) => setDatas((prev) => ({ ...prev, error: true })));
    };
    fetchData();
  }, []);

  const renderData = () => {
    if (datas.loading) {
      return (
        <View style={styles.indicator}>
          <ActivityIndicator />
        </View>
      );
    } else if (datas.error) {
      return (
        <View style={styles.indicator}>
          <Text>An error occured</Text>
        </View>
      );
    }
    return (
      <FlatList
        data={datas.data}
        keyExtractor={(item) => item.id.toString()}
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
    );
  };

  return <View style={styles.container}>{renderData()}</View>;
};
const styles = StyleSheet.create({
  container: {
    width: normalizew(494),
    height: normalizeh(600),
    gap: normalizeh(10),
  },
  renderContainer: {
    width: normalizew(165),
    height: normalizeh(155),
    justifyContent: "flex-end",
    borderRadius: normalizew(11.5),
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "#29BB892E",
    marginVertical: normalizeh(8),
    marginHorizontal: normalizeh(4),
  },
  image: {
    flex: 1,
    marginHorizontal: normalizew(5),
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: normalizew(16),
    color: "#13231B",
    width: normalizew(98),
    fontWeight: "500",
    lineHeight: normalizeh(21),
    margin: normalizew(16),
    letterSpacing: normalizew(-0.32),
  },
  flatList: {
    marginLeft: normalizew(24),
  },
  buttonPressed: {
    opacity: 0.6,
  },
  indicator: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Categories;
