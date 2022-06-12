import { View, Text, StyleSheet } from "react-native";
import globalStyle from "../../../constants/globalStyle";
import color from "../../../constants/color";

const MailCard = (props) => {
  return (
    <View style={styles.announcementContainer}>
      <View style={styles.firstRow}>
        <Text style={[globalStyle.body1Bold, styles.senderContainer]}>
          {props.sender}
        </Text>
        <Text
          style={[globalStyle.body2, styles.dateContainer]}
          color={color.Grey500}
        >
          {props.date}
        </Text>
      </View>
      <View style={styles.secondRow}>
        <Text style={[globalStyle.body2, styles.captionContainer]}>
          {props.caption}
        </Text>
      </View>
    </View>
  );
};

export default MailCard;

const styles = StyleSheet.create({
  announcementContainer: {
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  firstRow: {
    flexDirection: "row",
    padding: 15,
  },
  secondRow: {
    flexDirection: "row",
    padding: 15,
    marginTop: 10,
    marginBottom: 40,
  },
  senderContainer: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  dateContainer: {
    position: "absolute",
    right: 15,
    top: 10,
  },
  captionContainer: {
    position: "absolute",
    left: 15,
    top: 10,
  },
});
