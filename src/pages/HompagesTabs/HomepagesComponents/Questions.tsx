import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import { normalizeh, normalizew } from "../../../utils/normalize";
import { QUESTION_DATA } from "../../../components/constants";
import { DataType, QuestionType } from "../../../components/types";

const renderItem = ({ item }: { item: QuestionType }) => {
  const image = { uri: item.image_uri };
  return (
    <Pressable
      style={({ pressed }) => [
        styles.questionContainer,
        pressed ? styles.buttonPressed : null,
      ]}
    >
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.renderContainer}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const Questions = () => {
  const [datas, setDatas] = useState([]);

  useLayoutEffect(() => {
    const fetchData = async () => {
      await fetch(QUESTION_DATA)
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
    width: normalizew(375),
    height: normalizeh(200),
    gap: normalizeh(10),
    marginBottom: normalizeh(32.5),
  },
  questionContainer: {
    width: normalizew(240),
    height: normalizeh(164),
  },
  title: {
    marginHorizontal: normalizew(5),
    fontSize: normalizew(15),
    fontWeight: "500",
  },
  renderContainer: {
    width: normalizew(206),
    height: normalizeh(164),
    justifyContent: "flex-end",
    paddingHorizontal: normalizew(10),
    paddingVertical: normalizeh(20),
  },
  image: {
    flex: 1,
    marginHorizontal: normalizew(5),
    borderRadius: normalizew(12),
    overflow: "hidden",
  },
  text: {
    fontSize: normalizew(15),
    color: "#FFFFFF",
  },
  flatList: {
    width: normalizew(370),
    height: normalizeh(200),
  },
  buttonPressed: {
    opacity: 0.6,
  },
});
export default Questions;
