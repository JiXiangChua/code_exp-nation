import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  Dimensions,
} from "react-native";
import FontAwesomeIconButton from "../../components/FontAwesomeIconButton";
import { LoginContext } from "../../store/context/login-context";

import globalStyle from "../../constants/globalStyle";
import color from "../../constants/color";
import MissionModeHeader from "../../components/MissionModeHeader";
import IdentityCard from "./components/IdentityCard";
import Barcode from "./components/Barcode";

const SPACING_FOR_CARD_INSET = Dimensions.get("window").width * 0.1 - 10;

const Home = () => {
  const { userProfile } = useContext(LoginContext);
  const { name, licenses } = userProfile;

  const showBarcodeHandler = () => {
    //TODO
  };

  return (
    <SafeAreaView
      style={[globalStyle.androidNavigationTitle, styles.container]}
    >
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={[globalStyle.body1Bold, styles.welcomeText]}>
            Welcome back,
          </Text>
          <Text style={[globalStyle.header2, styles.nameText]}>{name}</Text>
        </View>
        <View style={styles.settingButtonContainer}>
          <FontAwesomeIconButton
            name="user-circle-o"
            size={35}
            color={color.Black}
          />
        </View>
      </View>
      <View style={styles.missionContainer}>
        <MissionModeHeader />
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardScrollContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            snapToInterval={345} //your element width + marginLeft and marginRight
            snapToAlignment="center"
            contentInset={{
              // iOS ONLY
              top: 0,
              left: SPACING_FOR_CARD_INSET, // Left spacing for the very first card
              bottom: 0,
              right: SPACING_FOR_CARD_INSET, // Right spacing for the very last card
            }}
            contentContainerStyle={{
              // contentInset alternative for Android
              paddingHorizontal:
                Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0, // Horizontal spacing before and after the ScrollView
            }}
          >
            {licenses &&
              licenses.map((license) => {
                return <IdentityCard key={license.type} details={license} />;
              })}
          </ScrollView>
        </View>
        <Barcode onPress={showBarcodeHandler} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.OffWhite,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  titleContainer: {
    flex: 3,
    flexDirection: "column",
  },
  welcomeText: {
    color: color.Black,
  },
  nameText: {
    color: color.Emerald,
  },
  settingButtonContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  missionContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    flex: 9,
    alignItems: "center",
  },
  cardScrollContainer: {
    width: "100%",
  },
});
