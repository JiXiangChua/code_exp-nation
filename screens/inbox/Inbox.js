import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useEffect } from "react";
import globalStyle from "../../constants/globalStyle";
import IconButton from "../../components/IconButton";
import color from "../../constants/color";
import NavigationHeader from "../../components/NavigationHeader";

const Inbox = () => {
  return (
    <SafeAreaView
      style={[globalStyle.androidNavigationTitle, styles.container]}
    >
      <NavigationHeader
        title="Announcement"
        iconName="search-outline"
        iconSize={30}
        iconColor={color.Grey500}
      />

      <TextInput
        style={[globalStyle.header3, styles.textInput]}
        placeholder="Search"
      ></TextInput>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterONButton}>
          <Text style={[globalStyle.body2, styles.buttonText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterOFFButton}>
          <Text style={[globalStyle.body2, styles.buttonText]}>Unread</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10, //to change to a component later
  },
  filterContainer: {
    flexDirection: "row",
  },
  textInput: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    borderColor: color.Black,
  },
  buttonText: {
    textAlign: "center",
  },
  filterONButton: {
    justifyContent: "center",
    marginHorizontal: 10,
    width: 76,
    height: 29,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: color.Black,
    backgroundColor: color.Yellow,
  },
  filterOFFButton: {
    justifyContent: "center",
    marginHorizontal: 10,
    width: 76,
    height: 29,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: color.Black,
  },
});
