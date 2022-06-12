import { Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import globalStyle from "../../../constants/globalStyle";

const barcodeImage = require("../../../assets/icons/barcode.png");

const Barcode = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={barcodeImage} style={styles.image} />
      <Text style={[globalStyle.body1, styles.label]}>Show barcode</Text>
    </TouchableOpacity>
  );
};

export default Barcode;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
  },
  image: {
    resizeMode: "contain",
    width: 30,
    height: 30,
  },
  label: {
    alignSelf: "center",
    marginHorizontal: 8,
  },
});
