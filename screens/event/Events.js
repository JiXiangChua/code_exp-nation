import { useState, useContext, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import globalStyle from "../../constants/globalStyle";
import color from "../../constants/color";
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

  let filtered;

  const renderEventsOnCompletedStatus = () => {
    if (filterStatus) {
      filtered = events.filter((event) => {
        return event.status === true;
      });
      setFilteredEvents(filtered);
    } else {
      filtered = events.filter((event) => {
        return event.status === false;
      });
      setFilteredEvents(filtered);
    }
  };

  useEffect(() => {
    renderEventsOnCompletedStatus();
  }, [filterStatus]);

  const renderItem = ({ item }) => {
    return (
      <EventsCard
        item={item}
        onPress={() => navigation.navigate("EventsModal", { data: item })}
      />
    );
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
    backgroundColor: color.OffWhite,
  },
});
