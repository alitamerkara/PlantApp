import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ViewToken,
  ViewabilityConfig,
} from "react-native";
import OnboardingItem from "./OnboardingItem";
import { OnboardingType } from "../components/types";
import Paginator from "../components/Paginator";
import GetStarted from "./GetStarted";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "../store/reducers/slices";
import { RootState } from "../store/store";
import { slides } from "../components/constants";

const Onboarding = () => {
  const dispatch = useDispatch();
  const { activeIndex, getStarted } = useSelector(
    (state: RootState) => state.slicer
  );

  const viewableItemsChanged = ({
    viewableItems,
    changed,
  }: {
    viewableItems: ViewToken<OnboardingType>[];
    changed: ViewToken<OnboardingType>[];
  }) => {
    if (viewableItems.length > 0) {
      dispatch(setActiveIndex(viewableItems[0].index || 0));
    }
  };

  const handlePress = () => {
    flatListRef.current?.scrollToIndex({
      index: activeIndex + 1 >= slides.length ? 0 : activeIndex + 1,
      animated: true,
    });
  };

  const flatListRef = useRef<FlatList<OnboardingType>>(null);

  const viewabilityConfig: ViewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  return (
    <View style={styles.container}>
      {getStarted ? (
        <GetStarted />
      ) : (
        <View style={styles.container}>
          <FlatList
            ref={flatListRef}
            data={slides}
            renderItem={({ item }: { item: OnboardingType }) => (
              <OnboardingItem item={item} onPress={handlePress} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id.toString()}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />
          {activeIndex !== 2 && !getStarted && <Paginator data={slides} />}
        </View>
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

export default Onboarding;
