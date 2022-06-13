import { View, StyleSheet, Text } from "react-native";
import color from "../../../constants/color";
import globalStyle from "../../../constants/globalStyle";
import { Ionicons } from "@expo/vector-icons";

const PressToTalkButton = () => {
  return (
    <>
      <View style={styles.circle}>
        <View style={{ marginLeft: 10 }}>
          <Ionicons name="md-mic-outline" size={180} color="white" />
        </View>
      </View>
      <Text style={[globalStyle.header3, styles.text]}>
        PRESS AND HOLD TO TALK
      </Text>
    </>
  );
};

export default PressToTalkButton;

const styles = StyleSheet.create({
  circle: {
    width: 250,
    height: 250,
    borderRadius: 250,
    backgroundColor: color.Emerald,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: color.White,
    marginTop: 30,
  },
});
