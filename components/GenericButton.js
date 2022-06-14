import { TouchableOpacity, Text, StyleSheet } from "react-native";
import color from "../constants/color";
import globalStyle from "../constants/globalStyle";

const GenericButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: props.backgroundColor }]}
      onPress={props.onPress}
    >
      <Text style={[globalStyle.header4, { color: props.color }]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default GenericButton;

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 40,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: color.Emerald,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    alignSelf: "center",
  },
});
