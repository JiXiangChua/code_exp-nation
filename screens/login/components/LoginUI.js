import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { LoginContext } from "../../../store/context/login-context";

import { singpassAPI } from "../../../helper/singpassAPI";
import LoginButton from "./LoginButton";
import FaceIdButton from "../../../components/FaceIdButton";

const LoginUI = (props) => {
  const { setIsLogin, setUserProfile } = useContext(LoginContext);

  function login() {
    (async () => {
      try {
        // const response = await fetch(singpass api)
        // const json = await response.json();
        const json = await singpassAPI();
        if (json.status == "OK") {
          setIsLogin(true);
          setUserProfile(json.data); //store the user profile from singpass API to a global state
        }
      } catch (error) {
        //handle error and inform user the authentication from singpass fails.
      }
    })();
  }

  return (
    <View style={props.style}>
      <View style={styles.buttonContainer}>
        <LoginButton title={"Log In with Singpass"} onPress={login} />
      </View>
      <View style={styles.faceIdContainer}>
        <FaceIdButton theme="Light" />
      </View>
    </View>
  );
};

export default LoginUI;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 30,
  },
  faceIdContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 50,
  },
});
