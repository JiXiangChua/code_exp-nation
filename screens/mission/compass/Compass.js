import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Magnetometer } from "expo-sensors";
import color from "../../../constants/color";

const { height, width } = Dimensions.get("window");

const Compass = () => {
  const [subscription, setSubscription] = useState(null);
  const [magnetometer, setMagnetometer] = useState(0);

  useEffect(() => {
    _toggle();
    return () => {
      _unsubscribe();
    };
  }, []);

  const _toggle = () => {
    if (subscription) {
      _unsubscribe();
    } else {
      _subscribe();
    }
  };

  const _subscribe = () => {
    setSubscription(
      Magnetometer.addListener((data) => {
        setMagnetometer(_angle(data));
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const _angle = (magnetometer) => {
    let angle = 0;
    if (magnetometer) {
      let { x, y, z } = magnetometer;
      if (Math.atan2(y, x) >= 0) {
        angle = Math.atan2(y, x) * (180 / Math.PI);
      } else {
        angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
      }
    }
    return Math.round(angle);
  };

  const _direction = (degree) => {
    if (degree >= 22.5 && degree < 67.5) {
      return "NE";
    } else if (degree >= 67.5 && degree < 112.5) {
      return "E";
    } else if (degree >= 112.5 && degree < 157.5) {
      return "SE";
    } else if (degree >= 157.5 && degree < 202.5) {
      return "S";
    } else if (degree >= 202.5 && degree < 247.5) {
      return "SW";
    } else if (degree >= 247.5 && degree < 292.5) {
      return "W";
    } else if (degree >= 292.5 && degree < 337.5) {
      return "NW";
    } else {
      return "N";
    }
  };

  // Match the device top with pointer 0° degree. (By default 0° starts from the right of the device.)
  const _degree = (magnetometer) => {
    return magnetometer - 90 >= 0 ? magnetometer - 90 : magnetometer + 271;
  };

  return (
    <View style={styles.container}>
      <View style={styles.indicatorContainer}>
        <Text
          style={{
            color: "#fff",
            fontSize: height / 26,
            fontWeight: "bold",
          }}
        >
          {_direction(_degree(magnetometer))}
        </Text>
      </View>
      <View style={styles.pointerContainer}>
        <Image
          source={require("../../../assets/images/compass_pointer.png")}
          style={{
            height: height / 26,
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={styles.compassContainer}>
        <Image
          source={require("../../../assets/images/compass_bg.png")}
          style={{
            height: width - 80,
            justifyContent: "center",
            alignItems: "center",
            resizeMode: "contain",
            transform: [{ rotate: 360 - magnetometer + "deg" }],
          }}
        />
        <Text
          style={{
            color: "#fff",
            fontSize: height / 27,
            width: width,
            marginTop: 40,
            textAlign: "center",
          }}
        >
          {_degree(magnetometer)}°
        </Text>
      </View>
    </View>
  );
};

export default Compass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Black,
  },
  indicatorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  pointerContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  compassContainer: {
    flex: 6,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
