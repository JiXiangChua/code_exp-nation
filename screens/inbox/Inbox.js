import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import globalStyle from "../../constants/globalStyle";
import color from "../../constants/color";
import NavigationHeader from "../../components/NavigationHeader";
import MailCard from "./components/MailCard";

const Inbox = () => {
  const [status, setStatus] = useState("All");
  const setStatusFilter = (status) => {
    setStatus(status);
  };
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
        {filterTab.map((e) => (
          <TouchableOpacity
            key={e.status}
            style={[
              globalStyle.body2Bold,
              styles.filterOFFButton,
              status === e.status && styles.filterONButton,
            ]}
            onPress={() => setStatusFilter(e.status)}
          >
            <Text>{e.status}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <MailCard />
    </SafeAreaView>
  );
};

export default Inbox;

const filterTab = [
  {
    status: "All",
  },
  {
    status: "Unread",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.OffWhite,
  },
  filterContainer: {
    flexDirection: "row",
    padding: 10,
  },
  textInput: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: color.Black,
  },
  filterONButton: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: color.Emerald,
    borderBottomWidth: 5,
  },
  filterOFFButton: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: color.Black,
    borderBottomWidth: 1,
  },
});
