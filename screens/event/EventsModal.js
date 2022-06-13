import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import color from "../../constants/color";

const EventsModal = () => {
  //can pass the data using routes.
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackBar} />
      <Text>Hello World</Text>
    </View>
  );
};

export default EventsModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goBackBar: {
    backgroundColor: color.Grey400,
    width: 160,
    height: 8,
    borderRadius: 50,
    alignSelf: "center",
    marginVertical: 10,
  },
});
