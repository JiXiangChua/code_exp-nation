import { useState, useContext, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import globalStyle from "../../constants/globalStyle";
import { LoginContext } from "../../store/context/login-context";
import NavigationHeader from "../../components/NavigationHeader";
import FilterTab from "../../components/FilterTab";
import EventsCard from "./components/EventsCard";

const filterTabArray = [
  {
    status: "Ongoing",
  },
  {
    status: "Completed",
  },
];

const Events = ({ navigation }) => {
  const { userProfile } = useContext(LoginContext);
  const { events } = userProfile;

  const [filteredEvents, setFilteredEvents] = useState(events);
  const [filterStatus, setFilterStatus] = useState(false); //false - show on-going, true - show completed

  const setFilterStatusHandler = (status) => {
    setFilterStatus(status);
  };

  const renderEventsOnCompletedStatus = () => {
    if (filterStatus) {
      let filtered = events.filter((event) => {
        return event.status === true;
      });
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events);
    }
  };

  useEffect(() => {
    renderEventsOnCompletedStatus();
  }, [filterStatus]);

  const renderItem = ({ item }) => {
    return <EventsCard item={item} onPress={() => {}} />;
  };

  return (
    <SafeAreaView
      style={[globalStyle.androidNavigationTitle, styles.container]}
    >
      <NavigationHeader
        title="Events"
        iconName="md-gift"
        iconSize={30}
        onPress={() => navigation.navigate("Rewards")}
      />
      <FilterTab
        array={filterTabArray}
        onChangeStatus={setFilterStatusHandler}
      />
      <FlatList
        data={filteredEvents}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
