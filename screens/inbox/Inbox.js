import { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  SafeAreaView,
  FlatList,
  Platform,
} from "react-native";
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
  const [filteredMails, setFilteredMails] = useState(mails);
  const [filterStatus, setFilterStatus] = useState(false); //false - show all mail, true - show unread only
  const [showSearchBar, setShowSearchBar] = useState(false);

  const setFilterStatusHandler = (status) => {
    setFilterStatus(status);
  };

  const renderMailsOnReadStatus = () => {
    if (filterStatus) {
      let filtered = mails.filter((mail) => {
        return mail.status === false;
      });
      setFilteredMails(filtered);
    } else {
      setFilteredMails(mails);
    }
  };

  useEffect(() => {
    renderMailsOnReadStatus();
  }, [filterStatus]);

  const searchBarFilter = (text) => {
    if (text) {
      let filtered = filteredMails.filter((mail) => {
        return (
          mail.sender.toLowerCase().includes(text) ||
          mail.caption.toLowerCase().includes(text)
        );
      });
      setFilteredMails(filtered);
    } else {
      //Search bar is blank
      renderMailsOnReadStatus();
    }
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
        onPress={() => setShowSearchBar((prevState) => !prevState)}
      />

      {showSearchBar && (
        <TextInput
          style={[globalStyle.header4, styles.textInput]}
          placeholder="Search"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType={Platform.OS === "ios" ? "web-search" : "default"}
          onEndEditing={() => {
            setShowSearchBar(false);
          }}
          onChangeText={searchBarFilter}
        ></TextInput>
      )}

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
