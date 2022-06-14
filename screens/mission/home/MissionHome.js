import { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { LoginContext } from "../../../store/context/login-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import color from "../../../constants/color";
import globalStyle from "../../../constants/globalStyle";
import { FontAwesome } from "@expo/vector-icons";

import MissionModeHeader from "../../../components/MissionModeHeader";
import PressToTalkButton from "../voice/PressToTalkButton";
import TalkingButton from "../voice/TalkingButton";

const MissionHome = ({ navigation }) => {
  const { userProfile } = useContext(LoginContext);
  const { sectionlist } = userProfile;
  const [talking, setTalking] = useState(false);

  const goToCompass = () => {
    navigation.navigate("Compass");
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView
        style={[globalStyle.androidNavigationTitle, styles.viewContainer]}
      >
        <MissionModeHeader />
        <View style={styles.frequencyContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Frequency"
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={() => navigation.navigate("Group")}>
            <FontAwesome name="users" size={24} color="white" />
            <Text
              style={[
                globalStyle.header4,
                { color: "white", textAlign: "center" },
              ]}
            >
              {sectionlist.length}
            </Text>
          </TouchableOpacity>
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
