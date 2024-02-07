import { View, StyleSheet } from "react-native";
// import LoginScreen from "./app/screens/LoginScreen";
// import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./app/navigation/appNavigator";
// import Stac

export default function App() {
  return (
    <View style={styles.container}>
      <MyStack />;
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});