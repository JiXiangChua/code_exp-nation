import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import globalStyle from "../../constants/globalStyle";
import NavigationHeader from "../../components/NavigationHeader";
import FilterTab from "../../components/FilterTab";
import EventCard from "./components/EventCard";

const filterTabArray = [
  {
    status: "Ongoing",
  },
  {
    status: "Completed",
  },
];

const Events = ({ navigation }) => {
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
      <FilterTab array={filterTabArray} />
      <EventCard />
    </SafeAreaView>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
    marginRight: 20,
  },
});
