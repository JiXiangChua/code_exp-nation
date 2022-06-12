import { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import globalStyle from "../constants/globalStyle";
import color from "../constants/color";

const RewardsFilterTab = (props) => {
  const { array } = props;

  const [status, setStatus] = useState(array[0].status);
  const setStatusFilter = (status) => {
    setStatus(status);
  };

  return (
    <View style={styles.filterContainer}>
      {array.map((e) => (
        <TouchableOpacity
          key={e.status}
          style={[
            globalStyle.body1Bold,
            styles.filterOFFButton,
            status === e.status && styles.filterONButton,
          ]}
          onPress={() => setStatusFilter(e.status)}
        >
          <Text>{e.status}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RewardsFilterTab;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    padding: 10,
    paddingTop: 30,
  },
  filterONButton: {
    width: "25%",
    flexDirection: "row",
    justifyContent: "center",
    borderColor: color.Emerald,
    borderWidth: 2,
    backgroundColor: color.Emerald,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  filterOFFButton: {
    width: "25%",
    flexDirection: "row",
    justifyContent: "center",
    borderColor: color.Emerald,
    borderWidth: 1,
    backgroundColor: color.White,
    marginHorizontal: 5,
    borderRadius: 5,
  },
});
