import { useState, useContext } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { LoginContext } from "../../../store/context/login-context";
import color from "../../../constants/color";
import globalStyle from "../../../constants/globalStyle";

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, styles.shadowProp]}>
    <View style={styles.overlay}>
      <Image source={item.imageBackground} />
    </View>
    <View style={styles.cardtextContainer}>
      <Text style={[globalStyle.header2, styles.textStyle]}>{item.title}</Text>
      <Text style={[globalStyle.body1, styles.textStyle]}>{item.content}</Text>
    </View>
  </TouchableOpacity>
);

const EventsCard = () => {
  const { userProfile } = useContext(LoginContext);
  const { events } = userProfile;
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default EventsCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    zindex: 1,
    position: "absolute",
    opacity: 0.6,
  },
  cardtextContainer: {
    zindex: 2,
  },
  item: {
    backgroundColor: color.Grey500,
    paddingTop: 20,
    paddingBottom: 50,
    marginVertical: 8,
    marginHorizontal: 22,
    borderRadius: 20,
    flexRight: 10,
    borderColor: color.Black,
    borderWidth: 1,
  },
  textStyle: {
    marginLeft: 20,
    color: color.OffWhite,
  },
  shadowProp: {
    elevation: 10,
    shadowColor: color.Black,
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});
