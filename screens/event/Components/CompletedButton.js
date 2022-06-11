import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import color from "../../../constants/color";
import globalStyle from "../../../constants/globalStyle";

const CompletedButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[props.style, styles.button]}
    >
      <Text style={[globalStyle.header4]}> Completed</Text>
    </TouchableOpacity>
  );
};

export default CompletedButton;

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 40,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.Grey300,
  },
});
