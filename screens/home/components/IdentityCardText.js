import { View, Text, StyleSheet } from "react-native";
import globalStyle from "../../../constants/globalStyle";

const IdentityCard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={globalStyle.body2}>{props.title}</Text>
      <Text style={globalStyle.header4}>{props.value}</Text>
    </View>
  );
};

export default IdentityCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
});
