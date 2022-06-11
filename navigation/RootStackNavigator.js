import { useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginContext } from "../store/context/login-context";
import Login from "../screens/login/Login";
import MainTabNavigator from "./MainTabNavigator";
import MissionHome from "../screens/mission/home/MissionHome";

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  //FOR NOW WITHOUT CONTEXT
  const [isMissionMode, setIsMissionMode] = useState(false);

  //using Context API
  const { isLogin } = useContext(LoginContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isLogin && <Stack.Screen name="Login" component={Login} />}
        {isLogin && isMissionMode && (
          <Stack.Screen name="Mission" component={MissionHome} />
        )}
        {isLogin && <Stack.Screen name="Main" component={MainTabNavigator} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
