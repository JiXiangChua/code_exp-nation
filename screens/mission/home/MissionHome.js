import { View, Text, SafeAreaView } from "react-native";
import MissionModeHeader from "../../../components/MissionModeHeader";

const MissionHome = () => {
  return (
    <SafeAreaView>
      <MissionModeHeader />
      <Text>This is a Mission Home screen</Text>
    </SafeAreaView>
  );
};

export default MissionHome;
