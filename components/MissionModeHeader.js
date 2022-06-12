import { useContext, useEffect } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MissionContext } from "../store/context/mission-context";

import color from "../constants/color";
import globalStyle from "../constants/globalStyle";

const MissionModeHeader = () => {
  const { isMissionMode, setMissionMode } = useContext(MissionContext);

  const navigation = useNavigation();

  useEffect(() => {
    if (isMissionMode) {
      navigation.navigate("Mission");
    } else if (!isMissionMode) {
      navigation.navigate("Main");
    }
  }, [isMissionMode]);

  const toggleMissionMode = () => {
    setMissionMode(); //toggle from on to off and vice-versa
  };

  return (
    <View style={styles.missionContainer}>
      <Text style={[globalStyle.header4, styles.label]}>MISSION MODE</Text>
      <Switch
        trackColor={{ false: color.Grey400, true: color.White }}
        thumbColor={isMissionMode ? color.Black : color.White}
        ios_backgroundColor={color.Grey400}
        value={isMissionMode}
        onValueChange={toggleMissionMode}
        style={styles.switch}
      />
    </View>
  );
};

export default MissionModeHeader;

const styles = StyleSheet.create({
  missionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    height: 70,
    paddingHorizontal: 20,
    backgroundColor: color.Emerald,
    borderRadius: 20,
  },
  label: {
    color: color.White,
  },
  switch: {
    transform: [{ scaleX: 1 }, { scaleY: 1 }],
  },
});
