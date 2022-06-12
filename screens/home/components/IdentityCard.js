import { View, Image, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import color from "../../../constants/color";
import globalStyle from "../../../constants/globalStyle";

import IdentityCardText from "./IdentityCardText";

const safLogo = require("../../../assets/images/saf-logo.png");
const majulahLogo = require("../../../assets/images/majulah-logo.png");

const defaultCardColor = ["gold", "gold"];

const IdentityCard = (props) => {
  const { type, profileImage, info, colors } = props.details;
  return (
    <View style={styles.dropShadow}>
      <LinearGradient
        colors={colors ? colors : defaultCardColor}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.stripeContainer}>
          <View style={styles.topStripe} />
          <Image source={safLogo} style={styles.safLogo}></Image>
          <View style={styles.bottomStripe}></View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.profileImageContainer}>
            <Image source={profileImage} style={styles.profileImage} />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={[globalStyle.header3, styles.typeLabel]}>{type}</Text>
            {info.map((item, index) => {
              return (
                <IdentityCardText
                  key={index}
                  title={Object.keys(item)[0]}
                  value={Object.values(item)[0]}
                />
              );
            })}
          </View>
          <Image source={majulahLogo} style={styles.majulahLogo} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default IdentityCard;

const styles = StyleSheet.create({
  dropShadow: {
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 3,
  },
  card: {
    flexDirection: "row",
    width: 325,
    height: 430,
    borderRadius: 25,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  stripeContainer: {
    //position: "absolute",
    //zIndex: 1,
    flex: 1,
    width: 60,
    height: "100%",
    marginLeft: 20,
  },
  topStripe: {
    flex: 1,
    borderBottomRightRadius: 20,
    backgroundColor: color.Emerald,
  },
  safLogo: {
    flex: 1,
    paddingVertical: 10,
    alignSelf: "center",
    transform: [{ scale: 0.8 }],
  },
  bottomStripe: {
    flex: 5,
    alignItems: "flex-end",
    backgroundColor: color.Emerald,
    borderTopRightRadius: 20,
  },
  infoContainer: {
    flex: 3,
    flexDirection: "column",
  },
  profileImageContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    marginRight: 20,
    borderRadius: 20,
  },
  detailsContainer: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 20,
  },
  majulahLogo: {
    opacity: 0.2,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  typeLabel: {
    color: color.White,
  },
});
