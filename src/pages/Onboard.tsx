import React, { useState } from "react";
import { StyleSheet, View, FlatList, Animated } from "react-native";
import { slides } from "../components/slides";
import OnboardingItem from "./OnboardingItem";
import { OnboardingType } from "../components/types";
import Paginator from "../components/Paginator";

const Onboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewableItemsChanged = (info: {
    viewableItems: { index: number }[];
  }) => {
    if (info.viewableItems.length > 0) {
      setActiveIndex(info.viewableItems[0].index);
    }
  };

  const renderItem = ({ item }: { item: OnboardingType }) => (
    <OnboardingItem item={item} onPress={handlePress} />
  );

  const handlePress = () => {
    flatListRef.current?.scrollToIndex({
      index: activeIndex + 1 >= slides.length ? 0 : activeIndex + 1,
      animated: true,
    });
  };

  const flatListRef = React.useRef<FlatList<OnboardingType>>(null);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id.toString()}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
      />
      {activeIndex !== 2 && (
        <Paginator data={slides} activeIndex={activeIndex} />
      )}
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
