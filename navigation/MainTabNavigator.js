import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import InboxStack from "./InboxStack";
import EventsStack from "./EventsStack";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="InboxStack" component={InboxStack} />
      <Tab.Screen name="EventsStack" component={EventsStack} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
