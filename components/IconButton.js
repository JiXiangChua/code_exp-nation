import { TouchableOpacity, Text, StyleSheet } from "react-native";
import color from "../constants/color";
import { Ionicons } from "@expo/vector-icons";

const IconButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Ionicons name={props.name} size={props.size} color={props.color} />
    </TouchableOpacity>
  );
};

export default IconButton;
