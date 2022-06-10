import { createStackNavigator } from "@react-navigation/stack";
import Inbox from "../screens/inbox/Inbox";

const Stack = createStackNavigator();

const InboxStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inbox" component={Inbox} />
    </Stack.Navigator>
  );
};

export default InboxStack;
