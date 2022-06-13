import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import color from "../../../constants/color";
import globalStyle from "../../../constants/globalStyle";

const EventsCard = ({ item, onPress }) => {
  console.log(item);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, globalStyle.dropShadow]}
    >
      <View>
        <Image
          style={{ width: "100%", zIndex: 0 }}
          source={item.imageBackground}
        />
        <View style={styles.pointsContainer}>
          <Text style={[globalStyle.body1Bold, { color: color.White }]}>
            {item.pointsAvailable} points
          </Text>
        </View>
      </View>
      <View style={styles.cardtextContainer}>
        <Text style={[globalStyle.header2]}>{item.title}</Text>
        <Text style={[globalStyle.body1, { letterSpacing: 1 }]}>
          {item.content}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EventsCard;

const styles = StyleSheet.create({
  cardtextContainer: {
    marginLeft: 20,
    color: color.White,
  },
  item: {
    backgroundColor: color.White,
    paddingBottom: 10,
    marginVertical: 8,
    marginHorizontal: 21.5,
    borderRadius: 10,
  },
  pointsContainer: {
    zIndex: 2,
    position: "absolute",
    right: 0,
    width: 100,
    height: 30,
    borderRadius: 10,
    backgroundColor: color.Emerald,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.95,
  },
});
