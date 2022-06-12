import { createStackNavigator } from "@react-navigation/stack";
import Events from "../screens/event/Events";
import Rewards from "../screens/rewards/Rewards";
import color from "../constants/color";

const Stack = createStackNavigator();

const EventsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Events">
      <Stack.Screen
        name="Events"
        component={Events}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Rewards"
        component={Rewards}
        options={{
          headerShown: true,
          title: "",
          headerStyle: {
            backgroundColor: color.Grey200,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default EventsStack;
