import { View, Text, StyleSheet, Image } from "react-native";
import globalStyle from "../constants/globalStyle";
import color from "../constants/color";
import IconButton from "./IconButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const NavigationHeader = (props) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={[globalStyle.header2, { color: color.Emerald }]}>
        {props.title}
      </Text>
      {props.iconName && (
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
  },
});
