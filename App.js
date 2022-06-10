import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import RootStackNavigator from "./navigation/RootStackNavigator";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <RootStackNavigator />
    </>
  );
}
