import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login/Login";
import MainTabNavigator from "./MainTabNavigator";

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  //FOR NOW WITHOUT CONTEXT
  const [isLogin, setIsLogin] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isLogin && <Stack.Screen name="Login" component={Login} />}
        {isLogin && <Stack.Screen name="Main" component={MainTabNavigator} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
