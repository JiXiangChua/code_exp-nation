import { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { LoginContext } from "../../store/context/login-context";
import globalStyle from "../../constants/globalStyle";
import color from "../../constants/color";
import NavigationHeader from "../../components/NavigationHeader";
import FilterTab from "../../components/FilterTab";
import MailCard from "./components/MailCard";
import { refreshNumberOfUnreadMails } from "../../store/redux/unreadMails-slice";

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
  let { mails } = userProfile;
  const [filteredMails, setFilteredMails] = useState(mails);
  const [filterStatus, setFilterStatus] = useState(false); //false - show all mail, true - show unread only
  const [showSearchBar, setShowSearchBar] = useState(false);

  const dispatch = useDispatch();
  const numberOfUnreadMails = useSelector(
    (state) => state.unreadMails.numberOfUnreadMails
  );

  const setFilterStatusHandler = (status) => {
    setFilterStatus(status);
  };

  const renderMailsOnReadStatus = () => {
    let filtered = mails.filter((mail) => {
      return mail.status === false;
    });
    if (filterStatus) {
      setFilteredMails(filtered);
    } else {
      setFilteredMails(mails);
    }
    dispatch(
      refreshNumberOfUnreadMails({ numberOfUnreadMails: filtered.length })
    );
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

  const setMailAsRead = (id) => {
    let selectedMail = mails.filter((mail) => mail.id === id);
    selectedMail[0].status = true;
    let updatedMail = filteredMails.map((mail) => {
      if (mail.id === selectedMail[0].id) {
        return selectedMail[0];
      } else {
        return mail;
      }
    });
    mails = updatedMail;
    renderMailsOnReadStatus(); //update the filter mail
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
      {filteredMails.length !== 0 && (
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
                onPress={setMailAsRead}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(mail) => mail.id}
        />
      )}
      {filteredMails.length === 0 && (
        <Text style={[globalStyle.body1, styles.defaultNoMessageText]}>
          No messages are found
        </Text>
      )}
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
    marginTop: 0,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: color.Black,
  },
  defaultNoMessageText: {
    alignSelf: "center",
    marginTop: "50%",
  },
});
