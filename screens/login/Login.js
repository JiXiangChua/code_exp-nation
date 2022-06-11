import { useContext } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { LoginContext } from "../../store/context/login-context";
import color from "../../constants/color";

import LoginUI from "./components/LoginUI";

const Login = () => {
  const { setIsLogin } = useContext(LoginContext);

  const loginUser = () => {
    setIsLogin(true);
  };

  return (
    <View style={styles.viewContainer}>
      {/* <Text>This is a login screen</Text>
      <Button title="Login" onPress={loginUser} /> */}
      <Image
        source={require("../../assets/images/login-background.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.overlayDarkener} />
      <LoginUI style={styles.loginUI} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayDarkener: {
    flex: 1,
    position: "absolute",
    zIndex: 2,
    backgroundColor: color.Black,
    width: "100%",
    height: "100%",
    opacity: 0.3,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  loginUI: {
    position: "absolute",
    zIndex: 3,
    width: "100%",
    height: "100%",
  },
});
