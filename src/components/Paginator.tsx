import React from "react";
import { View, StyleSheet } from "react-native";
import { OnboardingType } from "../types";

interface PaginatorProps {
  data: OnboardingType[];
  activeIndex: number;
}

const Paginator = ({ data, activeIndex }: PaginatorProps) => {
  return (
    <View style={styles.container}>
      {data.map((_, i: number) => (
        <View
          style={[
            styles.dot,
            {
              backgroundColor: i === activeIndex ? "black" : "#13231B40",
              width: i === activeIndex ? 11 : 8,
              height: i === activeIndex ? 11 : 8,
            },
          ]}
          key={i}
        ></View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    top: 0,
  },
  dot: {
    height: 8,
    borderRadius: 6,
    marginHorizontal: 5,
    width: 8,
  },
});

export default Paginator;
