import { createStackNavigator } from "@react-navigation/stack";
import Events from "../screens/event/Events";
import Rewards from "../screens/rewards/Rewards";
import EventsModal from "../screens/event/EventsModal";
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
            backgroundColor: color.OffWhite,
          },
          headerTintColor: color.Emerald,
        }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="EventsModal"
          component={EventsModal}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default EventsStack;
