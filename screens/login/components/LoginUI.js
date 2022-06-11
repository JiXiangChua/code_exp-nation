import { useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LoginContext } from "../../../store/context/login-context";

import globalStyle from "../../../constants/globalStyle";
import color from "../../../constants/color";
import { singpassAPI } from "../../../helper/singpassAPI";
import LoginButton from "./LoginButton";
import FaceIdButton from "../../../components/FaceIdButton";

const LoginButtonImage = require("../../../assets/images/SingpassLogin.png");

const LoginUI = (props) => {
  const { setIsLogin } = useContext(LoginContext);

  function login() {
    (async () => {
      try {
        // const response = await fetch(singpass api)
        // const json = await response.json();
        const json = await singpassAPI();
        if (json.status == "OK") {
          setIsLogin(true);
        }
      } catch (error) {
        //handle error and inform user the authentication from singpass fails.
      }
    })();
  }

  return (
    <SafeAreaView style={props.style}>
      <View style={styles.appNameContainer}>
        <Text style={[globalStyle.header2, styles.appName]}>Nation</Text>
        <FontAwesome name="user-circle-o" size={70} color={color.Yellow} />
      </View>
      <View style={styles.loginContainer}>
        <LoginButton
          image={LoginButtonImage}
          onPress={login}
          style={styles.loginButton}
        />
        <FaceIdButton theme="Dark" />
      </View>
    </SafeAreaView>
  );
};

export default LoginUI;

const styles = StyleSheet.create({
  appNameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    color: color.Yellow,
    alignSelf: "center",
    marginBottom: 20,
  },
  loginContainer: {
    flex: 1,
    alignItems: "center",
  },
  loginButton: {
    marginTop: 80,
  },
});
