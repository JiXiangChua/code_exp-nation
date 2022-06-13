import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
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
    <SafeAreaView>
      <View style={[styles.container]}>
        <Image
          source={require("../../assets/images/RewardsHeaderBackdrop.png")}
        />
        {/* <Text style={[globalStyle.header1, styles.pointsText]}>800</Text>
        <Text style={[globalStyle.header4, styles.pointsAvailText]}>
          points available
        </Text> */}
      </View>

      <RewardsFilterTab array={filterTabArray} />
    </SafeAreaView>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.Grey100,
    height: 185,
  },
  pointsText: {
    color: color.Emerald,
    marginLeft: 25,
    marginTop: 70,
  },
  pointsAvailText: {
    color: color.Emerald,
    marginLeft: 25,
  },
});
