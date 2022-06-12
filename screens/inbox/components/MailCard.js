import { View, Text, StyleSheet } from "react-native";
import globalStyle from "../../../constants/globalStyle";
import color from "../../../constants/color";

const MailCard = (props) => {
  return (
    <View style={styles.announcementContainer}>
      <Text style={globalStyle.body1Bold}>{props.sender}</Text>
      <Text style={globalStyle.body2}>{props.caption}</Text>
    </View>
  );
};

export default MailCard;

const styles = StyleSheet.create({
  announcementContainer: {
    padding: 20,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "red",
    shadowRadius: 100,
    shadowOpacity: 0.2,
    shadowOffset: { x: 0, height: 3 },
  },
});
