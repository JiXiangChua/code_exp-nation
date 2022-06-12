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
  <TouchableOpacity onPress={onPress} style={[styles.item, styles.dropShadow]}>
    <Image source={item.imageBackground} />
    <View style={styles.cardtextContainer}>
      <Text style={[globalStyle.header2]}>{item.title}</Text>
      <Text style={[globalStyle.body1]}>{item.content}</Text>
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
  dropShadow: {
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 3,
  },
});
