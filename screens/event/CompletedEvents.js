import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import globalStyle from "../../constants/globalStyle";
import NavigationHeader from "../../components/NavigationHeader";

const CompletedEvents = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NavigationHeader title="Completed Events" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CompletedEvents;

const styles = StyleSheet.create({});
