import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import InboxStack from "./InboxStack";
import EventsStack from "./EventsStack";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import color from "../constants/color";

const Tab = createBottomTabNavigator();

const MainTabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "InboxStack") {
            iconName = focused ? "mail" : "mail-outline";
          } else if (route.name === "HomeStack") {
            iconName = focused ? "card" : "card-outline";
          } else if (route.name === "EventsStack") {
            iconName = focused ? "calendar-month" : "calendar-month-outline";
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: color.Emerald,
        tabBarInactiveTintColor: color.Grey400,
      })}
    >
      <Tab.Screen
        name="InboxStack"
        component={InboxStack}
        options={{
          title: "Inbox",
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ title: "My Card" }}
      />
      <Tab.Screen
        name="EventsStack"
        component={EventsStack}
        options={{ title: "Events" }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
