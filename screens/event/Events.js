import { View, Text, StyleSheet, Button } from "react-native";

const Events = ({ navigation }) => {
  return (
    <View>
      <Text>This is an Events screen</Text>
      <Button
        title="Go to rewards"
        onPress={() => navigation.navigate("Rewards")}
      />
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({});
