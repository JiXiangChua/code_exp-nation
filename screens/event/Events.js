import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CompletedButton from "./Components/CompletedButton";
import color from "../../constants/color";
import globalStyle from "../../constants/globalStyle";
import NavigationHeader from "../../components/NavigationHeader";

const RewardsButtonImage = require("../../assets/icons/rewardsButton.png");

const Events = ({ navigation }) => {
  return (
    <SafeAreaView
      style={[globalStyle.androidNavigationTitle, styles.container]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <NavigationHeader
          title="Events"
          image={RewardsButtonImage}
          iconSize={30}
          onPress={() => navigation.navigate("Rewards")}
        />
        <View style={styles.buttonContainer}>
          <CompletedButton />
        </View>
      </ScrollView>
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
