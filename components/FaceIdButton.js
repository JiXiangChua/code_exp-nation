import { TouchableOpacity, Image, StyleSheet } from "react-native";

const faceIdIcon = require("../assets/icons/face-id.png");
const faceIdIconWhite = require("../assets/icons/face-id-white.png");

const FaceIdButton = (props) => {
  function faceIdHandler() {
    //execute FaceId functions
    console.log("Face Id button pressed!");
  }
  return (
    <TouchableOpacity onPress={faceIdHandler}>
      <Image
        source={props.theme == "Dark" ? faceIdIconWhite : faceIdIcon}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default FaceIdButton;

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
});
