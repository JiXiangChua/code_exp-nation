import { useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginContext } from "../store/context/login-context";
import { MissionContext } from "../store/context/mission-context";
import Login from "../screens/login/Login";
import MainTabNavigator from "./MainTabNavigator";
import MissionHome from "../screens/mission/home/MissionHome";
import Compass from "../screens/mission/compass/Compass";
import GroupScreen from "../screens/mission/group/GroupScreen";

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const RootStackNavigator = () => {
  //using Context API
  const { isLogin } = useContext(LoginContext);
  const { isMissionMode } = useContext(MissionContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isLogin && <Stack.Screen name="Login" component={Login} />}
        {isLogin && isMissionMode && (
          <Stack.Group>
            <Stack.Screen
              name="Mission"
              component={MissionHome}
              options={{
                cardStyleInterpolator: forFade,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Compass"
              component={Compass}
              options={{
                cardStyleInterpolator: forFade,
                headerShown: true,
                title: "",
                headerStyle: {
                  backgroundColor: "black",
                },
                headerShadowVisible: false,
                headerTintColor: "white",
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name="Group"
              component={GroupScreen}
              options={{
                cardStyleInterpolator: forFade,
                headerShown: true,
                title: "",
                headerStyle: {
                  backgroundColor: "black",
                },
                headerShadowVisible: false,
                headerTintColor: "white",
                headerBackTitleVisible: false,
              }}
            />
          </Stack.Group>
        )}
        {isLogin && (
          <Stack.Screen
            name="Main"
            component={MainTabNavigator}
            options={{ cardStyleInterpolator: forFade }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
