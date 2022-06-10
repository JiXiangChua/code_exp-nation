import { View, Text, StyleSheet, Button } from "react-native";
import IconButton from "../../components/IconButton";
import color from "../../constants/color";

const Events = ({ navigation }) => {
  return (
    <View>
      <Text>This is an Events screen</Text>
      {/* <Button
        title="Go to rewards"
        onPress={() => navigation.navigate("Rewards")}
      /> */}
      <IconButton
        name="search-outline"
        size={30}
        color={color.Grey500}
        onPress={() => navigation.navigate("Rewards")}
      />
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({});
