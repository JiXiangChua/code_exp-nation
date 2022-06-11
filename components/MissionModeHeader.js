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
      <Text style={[globalStyle.body1, styles.label]}>MISSION MODE</Text>
      <Switch
        trackColor={{ false: color.Grey300, true: color.Emerald }}
        thumbColor={isMissionMode ? color.Black : color.White}
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
    height: 40,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
  },
  switch: {
    marginRight: 20,
    transform: [{ scaleX: 0.8 }, { scaleY: 0.7 }],
  },
});
