import { createStackNavigator } from "@react-navigation/stack";
import Events from "../screens/event/Events";

const Stack = createStackNavigator();

const EventsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={Events} />
    </Stack.Navigator>
  );
};

export default EventsStack;
