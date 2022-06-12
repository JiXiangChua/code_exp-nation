import { createStackNavigator } from "@react-navigation/stack";
import Inbox from "../screens/inbox/Inbox";
import globalStyle from "../constants/globalStyle";
import color from "../constants/color";
import IconButton from "../components/IconButton";

const Stack = createStackNavigator();

const InboxStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default InboxStack;
