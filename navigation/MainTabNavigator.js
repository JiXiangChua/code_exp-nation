import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import InboxStack from "./InboxStack";
import EventsStack from "./EventsStack";

const Tab = createBottomTabNavigator();

const MainTabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="InboxStack"
        component={InboxStack}
        options={{ title: "Inbox" }}
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
