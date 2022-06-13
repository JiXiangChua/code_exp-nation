import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import color from "../../../constants/color";
import globalStyle from "../../../constants/globalStyle";

const EventsCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, globalStyle.dropShadow]}
    >
      <Image style={{ width: "100%" }} source={item.imageBackground} />
      <View style={styles.cardtextContainer}>
        <Text style={[globalStyle.header2]}>{item.title}</Text>
        <Text style={[globalStyle.body1]}>{item.content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventsCard;

const styles = StyleSheet.create({
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
