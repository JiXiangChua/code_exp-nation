import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import globalStyle from "../../constants/globalStyle";
import NavigationHeader from "../../components/NavigationHeader";
import RewardsFilterTab from "../../components/RewardsFilterTab";
import color from "../../constants/color";

const filterTabArray = [
  {
    status: "All",
  },
  {
    status: "My Rewards",
  },
  {
    status: "Popular",
  },
  {
    status: "Lifestyle",
  },
];

const Rewards = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <Text style={[globalStyle.header1, styles.text]}>800</Text>
      <Text style={[globalStyle.header4, styles.text]}>points available</Text>
      <RewardsFilterTab array={filterTabArray} />
    </SafeAreaView>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  text: {
    color: color.Emerald,
    marginLeft: 20,
    marginTop: -5,
  },
});
