import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import color from "../../../constants/color";
import globalStyle from "../../../constants/globalStyle";

const GroupScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white" }}>This is group screen</Text>
    </SafeAreaView>
  );
};

export default GroupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Black,
  },
});
