import { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import globalStyle from "../constants/globalStyle";
import color from "../constants/color";

const FilterTab = (props) => {
  const { array, onChangeStatus } = props;

  const [status, setStatus] = useState(array[0].status);
  const setStatusFilter = (status) => {
    setStatus(status);
    if (status === array[0].status) {
      //In Inbox screen, All represents false and Unread represents true state.
      onChangeStatus(false); //show all
    } else {
      onChangeStatus(true); //show filtered condition elements
    }
  };

  return (
    <View style={styles.filterContainer}>
      {array.map((e) => (
        <TouchableOpacity
          key={e.status}
          style={[
            globalStyle.body2Bold,
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

export default FilterTab;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    padding: 10,
  },
  filterONButton: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: color.Emerald,
    borderBottomWidth: 5,
  },
  filterOFFButton: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: color.Black,
    borderBottomWidth: 1,
  },
});
