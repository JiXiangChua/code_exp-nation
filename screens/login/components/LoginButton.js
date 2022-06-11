import { TouchableOpacity, Image, StyleSheet } from "react-native";

const LoginButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[props.style, styles.button]}
    >
      <Image source={props.image} style={styles.backgroundImage} />
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  button: {
    width: 220,
    height: 50,
    borderRadius: 10,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
