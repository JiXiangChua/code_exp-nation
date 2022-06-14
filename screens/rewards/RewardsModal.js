import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import color from "../../constants/color";
import globalStyle from "../../constants/globalStyle";
import GenericButton from "../../components/GenericButton";

const imageModalCalendar = require("../../assets/images/eventsmodal-calendar.png");
const imageModalLocation = require("../../assets/images/eventsmodal-location.png");

const RewardsModal = ({ navigation, route }) => {
  //can pass the data using routes.
  const { title, date, location, description, imageModalBackground } =
    route.params.data;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 9, overflow: "hidden" }}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageModalBackground} />
        </View>
        <Text style={[globalStyle.header1, styles.titleText]}>{title}</Text>
        <View style={styles.infoContainer}>
          <Image style={styles.infoIcon} source={imageModalCalendar} />
          <Text style={[globalStyle.header4, styles.infoText]}>{date}</Text>
        </View>
        <View style={styles.locationContainer}>
          <Image style={styles.infoIcon} source={imageModalLocation} />
          <Text style={[globalStyle.header4, styles.infoText]}>{location}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={[globalStyle.header3, styles.descriptionTitle]}>
            Description
          </Text>
          <ScrollView>
            <Text style={[globalStyle.body1]}>{description}</Text>
          </ScrollView>
        </View>
      </View>
      <View style={styles.buttonContaier}>
        <GenericButton
          title="Redeem Now"
          color={color.White}
          backgroundColor={color.Emerald}
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

export default RewardsModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 40 : 0,
  },
  imageContainer: {
    paddingBottom: 20,
    paddingTop: 10,
  },
  image: {
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 5,
  },
  titleText: {
    color: color.Emerald,
    marginLeft: 20,
  },
  infoContainer: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  infoIcon: {
    marginRight: 10,
  },
  infoText: {
    color: color.Black,
    marginLeft: 10,
    marginRight: 20,
  },
  locationContainer: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 10,
    marginRight: 20,
  },
  descriptionContainer: {
    marginLeft: 20,
    marginVertical: 10,
    marginRight: 20,
  },
  buttonContaier: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
