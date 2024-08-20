import React from "react";
import { StyleSheet, View, FlatList, Animated } from "react-native";
import { slides } from "../components/slides";
import OnboardingItem from "./OnboardingItem";
import { OnboardingType } from "../components/types";

const Onboard = () => {
  const renderItem = ({ item }: { item: OnboardingType }) => (
    <OnboardingItem item={item} onPress={handlePress} />
  );

  const handlePress = () => {};

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id.toString()}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Onboard;
