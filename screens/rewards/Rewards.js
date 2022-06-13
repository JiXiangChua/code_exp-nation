import { useState, useContext, useEffect } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  ImageBackground,
  FlatList,
} from "react-native";
import globalStyle from "../../constants/globalStyle";
import { LoginContext } from "../../store/context/login-context";
import NavigationHeader from "../../components/NavigationHeader";
import color from "../../constants/color";
import RewardsCategory from "./components/RewardsCategory";
import RewardsCard from "./components/RewardsCard";

const Rewards = () => {
  const { userProfile } = useContext(LoginContext);
  let { rewards } = userProfile;

  return (
    <SafeAreaView>
      <ImageBackground
        style={{ width: "100%" }}
        source={require("../../assets/images/RewardsHeaderBackdrop.png")}
      >
        <View style={[styles.container]}>
          <Text style={[globalStyle.header1, styles.pointsText]}>800</Text>
          <Text style={[globalStyle.header4, styles.pointsAvailText]}>
            points available
          </Text>
        </View>
      </ImageBackground>

      <ScrollView
        contentContainerStyle={styles.buttonContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity>
          <Text style={[globalStyle.body1Bold, styles.button]}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[globalStyle.body1Bold, styles.button]}>My Rewards</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[globalStyle.body1Bold, styles.button]}>Popular</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[globalStyle.body1Bold, styles.button]}>Lifestyles</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[globalStyle.body1Bold, styles.button]}>Shopping</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* <FlatList
        data={rewards}
        renderItem={({ item }) => {
          return <RewardsCategory category={item.category} data={item.data} />;
        }}
        keyExtractor={(item) => item.category}
      /> */}

      <ScrollView>
        {rewards.map((reward) => {
          return (
            <RewardsCategory
              key={reward.category}
              category={reward.category}
              data={reward.data}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    height: 185,
  },
  pointsText: {
    zIndex: 1,
    color: color.Emerald,
    marginLeft: 30,
    marginTop: 70,
  },
  pointsAvailText: {
    color: color.Emerald,
    marginLeft: 30,
  },
  buttonContainer: {
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 10,
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: color.White,
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignContent: "center",
    borderColor: color.Emerald,
  },
});
