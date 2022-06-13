import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import color from "../../../constants/color";

const Compass = () => {
  // need to make a go back to mission screen button.
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white" }}>Hello</Text>
    </SafeAreaView>
  );
};

export default Compass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Black,
  },
});
