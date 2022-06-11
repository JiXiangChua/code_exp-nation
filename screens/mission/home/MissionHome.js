import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import MissionModeHeader from "../../../components/MissionModeHeader";
import globalStyle from "../../../constants/globalStyle";

const MissionHome = () => {
  return (
    <SafeAreaView
      style={[globalStyle.androidNavigationTitle, styles.container]}
    >
      <MissionModeHeader />
      <Text>This is a Mission Home screen</Text>
    </SafeAreaView>
  );
};

export default MissionHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
