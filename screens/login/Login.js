import { useContext } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { LoginContext } from "../../store/context/login-context";
import color from "../../constants/color";
import globalStyle from "../../constants/globalStyle";

import LoginUI from "./components/LoginUI";

const Login = () => {
  const { setIsLogin } = useContext(LoginContext);

  const loginUser = () => {
    setIsLogin(true);
  };

  return (
    <View style={styles.viewContainer}>
      <View style={styles.titleContainer}>
        <Image
          source={require("../../assets/images/login-image.png")}
          style={styles.backgroundImage}
        />
        {/* <View style={styles.overlayDarkener} /> */}
        <Text style={[globalStyle.header1, styles.appName]}>NATIONLAH</Text>
      </View>
      <LoginUI style={styles.loginUI} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "flex-end",
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
    transform: [{ scale: 0.8 }],
  },
  appName: {
    color: color.Emerald,
    alignSelf: "center",
    letterSpacing: 4,
  },
  loginUI: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
