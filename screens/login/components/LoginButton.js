import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import globalStyle from "../../../constants/globalStyle";
import color from "../../../constants/color";

const LoginButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[props.style, styles.button]}
    >
      {/* <Image source={props.image} style={styles.backgroundImage} /> */}
      <Text style={[globalStyle.header3, styles.label]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: color.White,
    alignItems: "center",
    justifyContent: "center",
    borderColor: color.Emerald,
    borderWidth: 3,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  label: {
    color: color.Emerald,
    paddingHorizontal: 50,
    paddingVertical: 12,
  },
});
