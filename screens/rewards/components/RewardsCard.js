import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import globalStyle from "../../../constants/globalStyle";
import color from "../../../constants/color";

const RewardsCard = (props) => {
  return (
    <TouchableOpacity style={[styles.itemContainer, globalStyle.dropShadow]}>
      <Image
        style={{
          width: "100%",
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7,
        }}
        source={props.imageBackground}
      />
      <View style={[styles.cardtextContainer]}>
        <Text style={[globalStyle.header4, styles.text]} numberOfLines={3}>
          {props.title}
        </Text>
      </View>
      <View style={styles.pointContainer}>
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
    flex: 2,
    paddingHorizontal: 30,
    marginRight: 20,
  },
  pointContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  text: {
    color: color.Emerald,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: -25,
    width: 180,
  },
  subtext: {
    color: color.Emerald,
    marginLeft: 5,
    marginTop: 10,
  },
});
