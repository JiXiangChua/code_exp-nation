import { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView, Switch } from "react-native";
import FontAwesomeIconButton from "../../components/FontAwesomeIconButton";
import { LoginContext } from "../../store/context/login-context";

import globalStyle from "../../constants/globalStyle";
import color from "../../constants/color";
import MissionModeHeader from "../../components/MissionModeHeader";

const Home = () => {
  const { userProfile } = useContext(LoginContext);
  const { name } = userProfile;

  return (
    <SafeAreaView
      style={[globalStyle.androidNavigationTitle, styles.container]}
    >
      <MissionModeHeader />
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={[globalStyle.body1, styles.titleText]}>
            Welcome back,
          </Text>
          <Text style={[globalStyle.header2, styles.titleText]}>{name}</Text>
        </View>
        <View style={styles.settingButtonContainer}>
          <FontAwesomeIconButton
            name="user-circle-o"
            size={35}
            color={color.Black}
          />
        </View>
      </View>
      <View style={styles.cardContainer}>{/* For ID card and Bar code */}</View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  titleContainer: {
    flex: 3,
    flexDirection: "column",
  },
  titleText: {
    color: color.Emerald,
  },
  settingButtonContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  cardContainer: {
    flex: 9,
    backgroundColor: "red",
  },
});
