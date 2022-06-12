import { StyleSheet, TextInput, SafeAreaView } from "react-native";
import globalStyle from "../../constants/globalStyle";
import color from "../../constants/color";
import NavigationHeader from "../../components/NavigationHeader";
import FilterTab from "../../components/FilterTab";
import MailCard from "./components/MailCard";

const filterTab = [
  {
    status: "All",
  },
  {
    status: "Unread",
  },
];

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

      <FilterTab array={filterTab} />

      <MailCard />
    </SafeAreaView>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.OffWhite,
  },
  textInput: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: color.Black,
  },
});
