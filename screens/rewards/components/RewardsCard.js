import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import globalStyle from "../../../constants/globalStyle";
import color from "../../../constants/color";

const RewardsCard = (props) => {
  return (
    <TouchableOpacity style={[styles.itemContainer, globalStyle.dropShadow]}>
      <Image style={{ width: "100%" }} source={props.imageBackground} />
      <View style={[styles.cardtextContainer]}>
        <Text style={[globalStyle.header4, styles.text]}>{props.title}</Text>
        <Text style={[globalStyle.body1, styles.subtext]}>{props.points}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RewardsCard;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: color.Grey200,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 7,
    elevation: 5,
  },
  cardtextContainer: {
    paddingHorizontal: 30,
    marginRight: 20,
  },
  text: {
    color: color.Emerald,
    marginBottom: 10,
    marginTop: 10,
  },
  subtext: {
    marginRight: 5,
    color: color.Emerald,
    marginBottom: 10,
  },
});
