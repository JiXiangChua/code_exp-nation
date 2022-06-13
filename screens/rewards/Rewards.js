import {
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import globalStyle from "../../constants/globalStyle";
import NavigationHeader from "../../components/NavigationHeader";
import color from "../../constants/color";

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

      <ScrollView
        contentContainerStyle={styles.buttonContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity>
          <Text style={[globalStyle.body1Bold, styles.button]}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[globalStyle.body1Bold, styles.button]}>My Rewards</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[globalStyle.body1Bold, styles.button]}>Popular</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[globalStyle.body1Bold, styles.button]}>Lifestyles</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[globalStyle.body1Bold, styles.button]}>Shopping</Text>
        </TouchableOpacity>
      </ScrollView>
      <View>
        <Text>My rewards... </Text>
      </View>
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
  buttonContainer: {
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 10,
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: color.White,
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignContent: "center",
    borderColor: color.Emerald,
  },
});
