import { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import color from "../../../constants/color";
import globalStyle from "../../../constants/globalStyle";

import MissionModeHeader from "../../../components/MissionModeHeader";
import PressToTalkButton from "../voice/PressToTalkButton";
import TalkingButton from "../voice/TalkingButton";

const MissionHome = ({ navigation }) => {
  const [talking, setTalking] = useState(false);

  const goToCompass = () => {
    navigation.navigate("Compass");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView
        style={[globalStyle.androidNavigationTitle, styles.viewContainer]}
      >
        <MissionModeHeader />
        <View style={styles.frequencyContainer}>
          <TextInput style={styles.textInput} placeholder="Enter Frequency" />
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              backgroundColor: "white",
            }}
            onPress={() => navigation.navigate("Group")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={1}
            onLongPress={() => setTalking(true)}
            onPressOut={() => setTalking(false)}
            style={styles.touchToTalkButton}
          >
            {!talking && <PressToTalkButton />}
            {talking && <TalkingButton />}
          </TouchableOpacity>
        </View>
        <View style={styles.compassContainer}>
          <TouchableOpacity onPress={goToCompass}>
            <Ionicons name="md-compass-outline" size={70} color="white" />
          </TouchableOpacity>
        </View>
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
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
  touchToTalkButton: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
