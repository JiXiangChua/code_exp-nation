import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import color from "../../../constants/color";
import globalStyle from "../../../constants/globalStyle";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const GroupScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={[globalStyle.header3, styles.sectionText]}>
          Plat 1 : Sect 1
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.IoniconsContainer}>
          <Ionicons
            name="search-outline"
            size={24}
            color="grey"
            style={styles.searchIcon}
          />
        </View>
        <TextInput
          style={[globalStyle.header4, styles.searchText]}
          placeholder="Search"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType={Platform.OS === "ios" ? "web-search" : "default"}
        ></TextInput>
      </View>
      <View style={styles.namesBigContainer}>
        <FlatList
          data={namesAsObject}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  );
};

export default GroupScreen;

const sectionList = [
  "Derrick Lim",
  "Desmond Tan",
  "Rachel Kwek",
  "Tey Kai Li",
  "Ophelia Liang",
  "Chua Ji Xiang",
];

const namesAsObject = sectionList.map((name) => {
  return {
    name: name,
  };
});

const renderItem = ({ item }) => {
  return (
    <View style={styles.namesSmallContainer}>
      <FontAwesome name="user-circle-o" size={35} color="white" />
      <Text style={[globalStyle.body1, styles.namesText]}>
        {item.name.toUpperCase()}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Black,
    alignItems: "center",
  },
  sectionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  sectionText: {
    color: color.White,
    padding: 15,
    fontSize: 36,
  },
  searchContainer: {
    flexDirection: "row",
    width: "95%",
  },
  searchIcon: {
    alignSelf: "center",
  },
  IoniconsContainer: {
    backgroundColor: color.White,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  searchText: {
    backgroundColor: color.White,
    flex: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: 40,
  },
  namesBigContainer: {
    justifyContent: "flex-start",
    width: "100%",
    height: "80%",
    marginLeft: -10,
    marginTop: 25,
  },
  namesSmallContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    paddingLeft: 20,
  },
  namesText: {
    color: color.White,
    padding: 10,
    fontSize: 24,
  },
});
