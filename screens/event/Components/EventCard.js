import { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import color from "../../../constants/color";
import globalStyle from "../../../constants/globalStyle";

//const imageBackground = require("../../../assets/images/events-combatshoot.png");

const DATA = [
  {
    id: "1",
    title: "Combat Shoot",
    content: "31 / 01 / 2023 - 15 / 01 / 2023",
    imageBackground: require("../../../assets/images/events-combatshoot.png"),
  },
  {
    id: "2",
    title: "IPPT",
    content: "01 / 05 / 2023 - 31 / 05 / 2023",
    imageBackground: require("../../../assets/images/events-combatshoot.png"),
  },
  {
    id: "3",
    title: "Exercise Wallaby ",
    content: "22 / 09/ 2023 - 21 / 10 / 2023",
    imageBackground: require("../../../assets/images/events-combatshoot.png"),
  },
  {
    id: "4",
    title: "Outfield",
    content: "3 Days (TBC)",
    imageBackground: require("../../../assets/images/events-combatshoot.png"),
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <View style={styles.overlay}>
      <Image source={item.imageBackground} />
    </View>
    <View style={styles.cardtextContainer}>
      <Text style={[globalStyle.header2, styles.textStyle]}>{item.title}</Text>
      <Text style={[globalStyle.body1, styles.textStyle]}>{item.content}</Text>
    </View>
  </TouchableOpacity>
);

const EventCard = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    zindex: 1,
  },
  cardtextContainer: {
    zindex: 2,
  },
  item: {
    backgroundColor: color.Grey500,
    paddingTop: 20,
    paddingBottom: 50,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    flexRight: 10,
    borderColor: color.Black,
    borderWidth: 1,
  },
  textStyle: {
    marginLeft: 20,
    color: color.OffWhite,
  },
});
