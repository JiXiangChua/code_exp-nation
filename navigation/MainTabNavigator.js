import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import Inbox from "../screens/inbox/Inbox";
import Events from "../screens/event/Events";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Inbox" component={Inbox} />
      <Tab.Screen name="Events" component={Events} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
