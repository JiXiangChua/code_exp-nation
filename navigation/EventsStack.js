import { createStackNavigator } from "@react-navigation/stack";
import Events from "../screens/event/Events";
import Rewards from "../screens/rewards/Rewards";

const Stack = createStackNavigator();

const EventsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Events">
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="Rewards" component={Rewards} />
    </Stack.Navigator>
  );
};

export default EventsStack;
