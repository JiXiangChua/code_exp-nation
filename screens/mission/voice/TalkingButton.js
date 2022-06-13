import { View, StyleSheet, Text } from "react-native";
import color from "../../../constants/color";
import globalStyle from "../../../constants/globalStyle";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const TalkingButton = () => {
  return (
    <>
      <View style={styles.outerCircle}>
        <View style={styles.circle}>
          <View>
            <MaterialIcons name="graphic-eq" size={180} color="white" />
          </View>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Ionicons name="md-mic-outline" size={24} color="white" />
        <Text style={[globalStyle.header3, styles.text]}>TALKING ...</Text>
      </View>
    </>
  );
};

export default TalkingButton;

const styles = StyleSheet.create({
  outerCircle: {
    width: 250,
    height: 250,
    borderRadius: 250,
    borderWidth: 10,
    borderColor: color.Yellow,
    justifyContent: "center",
    alignContent: "center",
  },
  circle: {
    width: 240,
    height: 240,
    borderRadius: 240,
    backgroundColor: color.Emerald,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  textContainer: {
    marginTop: 30,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: color.White,
    paddingHorizontal: 5,
  },
});
