import { View, Text, StyleSheet } from "react-native";
import globalStyle from "../../../constants/globalStyle";

const MailCard = (props) => {
  return (
    <View style={styles.announcementContainer}>
      <Text>{props.sender}</Text>
      <Text>{props.caption}</Text>
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
  },
});
