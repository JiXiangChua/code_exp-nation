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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          style={{ width: "100%" }}
          source={require("../../assets/images/RewardsHeaderBackdrop.png")}
        >
          <View style={[styles.headerContainer]}>
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
          nestedScrollEnabled={true}
        >
          {filters.map((filter) => {
            return (
              <TouchableOpacity key={filter} style={styles.buttonBorder}>
                <Text style={[globalStyle.body1Bold, styles.button]}>
                  {filter}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <ScrollView nestedScrollEnabled={true}>
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
      </ScrollView>

      {/* <FlatList
        data={rewards}
        renderItem={({ item }) => {
          return <RewardsCategory category={item.category} data={item.data} />;
        }}
        keyExtractor={(item) => item.category}
      /> */}
    </SafeAreaView>
  );
};

export default Rewards;

const filters = ["All", "My Rewards", "Popular", "Lifestyle", "Shopping"];

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.OffWhite,
  },
  headerContainer: {
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
    marginTop: 20,
    marginLeft: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonBorder: {
    flexDirection: "column",
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: color.Emerald,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.White,
    width: 110,
  },
});
