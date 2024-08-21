import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Router from "./src/navigator/Router";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Router />
        <StatusBar style="auto" />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
