import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import globalStyle from "../../../constants/globalStyle";
import color from "../../../constants/color";

const MailCard = (props) => {
  const setMailAsRead = () => {
    props.onPress(props.id);
  };

  return (
    <TouchableOpacity
      style={[styles.announcementContainer, globalStyle.dropShadow]}
      onPress={setMailAsRead}
    >
      <View style={styles.firstRow}>
        <Text style={globalStyle.body1Bold}>{props.sender}</Text>
        <Text style={globalStyle.body2} color={color.Grey500}>
          {props.date}
        </Text>
      </View>
      <View style={styles.secondRow}>
        <Text style={globalStyle.body2}>{props.caption}</Text>
        {!props.status && <View style={styles.notifyIcon} />}
      </View>
    </TouchableOpacity>
  );
};

export default MailCard;

const styles = StyleSheet.create({
  announcementContainer: {
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: color.White,
  },
  firstRow: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  secondRow: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    paddingBottom: 40,
    justifyContent: "space-between",
  },
  notifyIcon: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: "red",
  },
});
