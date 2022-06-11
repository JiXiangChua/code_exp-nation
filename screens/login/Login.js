import { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { LoginContext } from "../../store/context/login-context";

const Login = () => {
  const { setIsLogin } = useContext(LoginContext);

  const loginUser = () => {
    setIsLogin(true);
  };

  return (
    <View>
      <Text>This is a login screen</Text>
      <Button title="Login" onPress={loginUser} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
