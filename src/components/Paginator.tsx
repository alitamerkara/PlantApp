import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { normalizeh, normalizew } from "../utils/normalize";
import { PaginatorProps } from "./types";

const Paginator = ({ data }: PaginatorProps) => {
  const activeIndex = useSelector(
    (state: RootState) => state.slicer.activeIndex
  );

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
    height: normalizeh(20),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: normalizeh(50),
    top: 0,
  },
  dot: {
    height: normalizeh(8),
    borderRadius: normalizew(6),
    marginHorizontal: normalizew(5),
    width: normalizew(8),
  },
});

export default Paginator;
