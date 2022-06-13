import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import globalStyle from "../../../constants/globalStyle";
import color from "../../../constants/color";

const RewardsCard = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.firstRow}>
        <Text style={globalStyle.header2}>{props.title}</Text>
      </View>
      <View style={styles.item}>
        <Image source={props.imageBackground} />
        <View style={styles.cardtextContainer}>
          <Text style={globalStyle.body1Bold}>{props.content}</Text>
          <Text style={globalStyle.body2} color={color.Grey500}></Text>
          <Text style={globalStyle.body2}>{props.message}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RewardsCard;

const styles = StyleSheet.create({
  firstRow: {
    flex: 1,
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  cardtextContainer: {
    marginLeft: 20,
    color: color.Black,
  },
  item: {
    backgroundColor: color.Grey200,
    paddingBottom: 10,
    marginVertical: 8,
    marginHorizontal: 21.5,
    borderRadius: 10,
    borderColor: color.Black,
    borderWidth: 1,
  },
});
