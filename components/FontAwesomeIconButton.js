import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const FontAwesomeIconButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <FontAwesome name={props.name} size={props.size} color={props.color} />
    </TouchableOpacity>
  );
};

export default FontAwesomeIconButton;
