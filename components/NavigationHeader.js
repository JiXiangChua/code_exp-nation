import { View, Text, StyleSheet, Image } from "react-native";
import globalStyle from "../constants/globalStyle";
import color from "../constants/color";
import IconButton from "./IconButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const NavigationHeader = (props) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={[globalStyle.header2, { color: color.Emerald }]}>
        {props.title}
      </Text>
      {props.title == "Events" && (
        <TouchableOpacity onPress={props.onPress} style={styles.rewardButton}>
          <MaterialCommunityIcons
            name="star-circle-outline"
            size={22}
            color="white"
          />
          <Text
            style={[
              globalStyle.header4,
              { color: color.White, paddingLeft: 10 },
            ]}
          >
            {props.earnedPoints} points
          </Text>
        </TouchableOpacity>
      )}
      {props.title != "Events" && props.iconName && (
        <TouchableOpacity onPress={props.onPress}>
          <IconButton
            name={props.iconName}
            size={props.iconSize}
            color={props.iconColor}
          />
        </TouchableOpacity>
      )}
      {props.image && (
        <TouchableOpacity onPress={props.onPress}>
          <Image
            source={props.image}
            style={{ width: props.iconSize, height: props.iconSize }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NavigationHeader;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  rewardButton: {
    backgroundColor: color.Emerald,
    width: 150,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
