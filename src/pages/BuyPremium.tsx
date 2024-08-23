import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useDispatch } from "react-redux";
import { setOnboard } from "../store/reducers/slices";
import { normalizeh, normalizew } from "../utils/normalize";
import { offers } from "../components/constants";

const BuyPremium = () => {
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(setOnboard(false));
  };
  return (
    <View style={styles.container}>
      <View style={styles.offerContainer}>
        {offers.map((item, index) => (
          <Pressable
            style={({ pressed }) => [
              item.id == 2 ? styles.year : styles.month,
              pressed ? styles.buttonPressed : null,
            ]}
            key={index}
          >
            {item.id == 2 && (
              <View style={styles.topTitleContainer}>
                <Text style={styles.topTitle}>Save 50%</Text>
              </View>
            )}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subTitle}>{item.subTitle}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={handlePress}>Try free for 3 days</PrimaryButton>
      </View>
      <View style={styles.termsContainer}>
        <Text style={styles.terms}>
          After the 3-day free trial period you’ll be charged ₺274.99 per year
          unless you cancel before the trial expires. Yearly Subscription is
          Auto-Renewable
        </Text>
        <Text style={styles.legal}>Terms • Privacy • Restore</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: normalizeh(10),
    position: "relative",
    marginLeft: normalizew(10),
    gap: normalizew(18),
  },
  offerContainer: {
    gap: normalizew(2),
  },
  year: {
    width: normalizew(327),
    height: normalizeh(60),
    left: normalizew(24),
    borderRadius: 14,
    borderWidth: normalizew(1.5),
    borderColor: "#28AF6E",
    justifyContent: "center",
    padding: normalizew(20),
    marginBottom: normalizeh(10),
  },
  month: {
    width: normalizew(327),
    height: normalizeh(60),
    left: normalizew(24),
    borderRadius: 14,
    borderWidth: normalizew(1.5),
    borderColor: "#FFFFFF4D",
    justifyContent: "center",
    padding: normalizew(20),
    marginBottom: normalizeh(10),
  },
  buttonPressed: {
    opacity: 0.6,
  },
  title: {
    fontSize: normalizew(16),
    fontWeight: "500",
    color: "#FFFFFF",
    lineHeight: normalizeh(19),
  },
  subTitle: {
    fontSize: normalizew(12),
    color: "#FFFFFFB2",
    lineHeight: normalizeh(15),
  },
  topTitleContainer: {
    width: normalizew(77),
    height: normalizeh(26),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#28AF6E",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 0,
    position: "absolute",
    top: 0,
    right: 0,
  },
  topTitle: {
    color: "white",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  termsContainer: {
    height: normalizeh(24),
    alignItems: "center",
    marginTop: normalizeh(10),
    gap: normalizeh(20),
  },
  terms: {
    fontSize: normalizew(9),
    color: "#FFFFFF85",
    textAlign: "center",
    width: normalizew(300),
    lineHeight: normalizeh(12),
  },
  legal: {
    fontSize: normalizew(11),
    color: "#FFFFFF80",
    textAlign: "center",
    lineHeight: normalizeh(13),
  },
});
export default BuyPremium;
