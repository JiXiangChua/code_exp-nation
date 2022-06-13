import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import color from "../../constants/color";

const RewardsModal = ({ route }) => {
  //can pass the data using routes.
  console.log(route.params.data); //to pull out data from here
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBackBar} />
      <Text>This is rewards modal screen</Text>
    </View>
  );
};

export default RewardsModal;

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
