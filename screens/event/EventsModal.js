import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  Image,
} from "react-native";
import color from "../../constants/color";
import globalStyle from "../../constants/globalStyle";

const EventsModal = ({ route }) => {
  //can pass the data using routes.
  console.log(route.params.data); //to pull out data from here

  const {
    id,
    imageModalBackground,
    imageModalCalendar,
    imageModalTime,
    imageModalLocation,
    status,
    title,
    content,
    time,
    location,
    description,
  } = route.params.data;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.goBackBar} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imageModalBackground} />
      </View>
      <Text style={[globalStyle.header1, styles.titleText]}>{title}</Text>
      <View style={styles.infoContainer}>
        <Image style={styles.infoIcon} source={imageModalCalendar} />
        <Text style={[globalStyle.header4, styles.infoText]}>{content}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Image style={styles.infoIcon} source={imageModalTime} />
        <Text style={[globalStyle.header4, styles.infoText]}>{time}</Text>
      </View>
      <View style={styles.locationContainer}>
        <Image style={styles.infoIcon} source={imageModalLocation} />
        <Text style={[globalStyle.header4, styles.infoText]}>{location}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={[globalStyle.header3, styles.descriptionTitle]}>
          Descriptions
        </Text>
        <Text style={[globalStyle.body1]}>{description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default EventsModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  goBackBar: {
    backgroundColor: color.Grey400,
    width: 160,
    height: 8,
    borderRadius: 50,
    alignSelf: "center",
    marginVertical: 10,
  },
  imageContainer: {
    paddingBottom: 20,
    paddingTop: 10,
  },
  image: {
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
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
  },
  descriptionContainer: {
    marginLeft: 20,
    marginVertical: 10,
    marginRight: 20,
  },
});
