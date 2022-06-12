import { useState, useContext, useEffect } from "react";
import { StyleSheet, TextInput, SafeAreaView, FlatList } from "react-native";
import { LoginContext } from "../../store/context/login-context";
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
  const { userProfile } = useContext(LoginContext);
  const { mails } = userProfile;
  const [filterStatus, setFilterStatus] = useState(false); //false - show all mail, true - show unread only

  const setFilterStatusHandler = (status) => {
    setFilterStatus(status);
  };

  let filteredMails = mails;

  if (filterStatus) {
    filteredMails = mails.filter((mail) => {
      return mail.status === false;
    });
  }

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

      <FilterTab array={filterTab} onChangeStatus={setFilterStatusHandler} />
      <FlatList
        data={filteredMails}
        renderItem={(itemData) => {
          return (
            <MailCard
              sender={itemData.item.sender}
              status={itemData.item.status}
              caption={itemData.item.caption}
              message={itemData.item.message}
              date={itemData.item.date}
            />
          );
        }}
        keyExtractor={(mail) => mail.id}
      />
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
