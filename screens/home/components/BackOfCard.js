import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const defaultCardColor = ["gold", "gold"];

const BackOfCard = (props) => {
  const { type, colors } = props.details;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={colors ? colors : defaultCardColor}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      ></LinearGradient>
    </View>
  );
};

export default BackOfCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    width: 325,
    height: 430,
    borderRadius: 25,
    marginBottom: 15,
    marginHorizontal: 10,
  },
});
