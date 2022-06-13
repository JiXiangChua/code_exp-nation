import { View, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import color from "../../../constants/color";
import globalStyle from "../../../constants/globalStyle";

import MissionModeHeader from "../../../components/MissionModeHeader";
import PressToTalkButton from "../voice/PressToTalkButton";

const MissionHome = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView
        style={[globalStyle.androidNavigationTitle, styles.viewContainer]}
      >
        <MissionModeHeader />
        <View style={styles.frequencyContainer}>
          <TextInput style={styles.textInput} placeholder="Enter Frequency" />
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              backgroundColor: "white",
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <PressToTalkButton />
        </View>
        <View style={styles.compassContainer}></View>
      </SafeAreaView>
    </View>
  );
};

export default MissionHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Black,
  },
  viewContainer: {
    flex: 1,
    alignItems: "center",
  },
  frequencyContainer: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginTop: 40,
  },
  textInput: {
    backgroundColor: color.White,
    width: "80%",
    height: 40,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flex: 5,
    //justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  compassContainer: {
    flex: 1,
    width: 100,
    backgroundColor: "blue",
  },
});
