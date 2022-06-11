import { View, Text, StyleSheet, Image } from "react-native";
import globalStyle from "../constants/globalStyle";
import color from "../constants/color";
import IconButton from "./IconButton";

const NavigationHeader = (props) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={[globalStyle.header2, { color: color.Emerald }]}>
        {props.title}
      </Text>
      {props.iconName && (
        <IconButton
          name={props.iconName}
          size={props.iconSize}
          color={props.iconColor}
        />
      )}
      {props.imageName && (
        <Image
          source={props.image}
          style={{ width: props.iconSize, height: props.iconSize }}
        />
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
