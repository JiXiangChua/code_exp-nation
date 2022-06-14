import { View, StyleSheet, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import color from "../../../constants/color";
import globalStyle from "../../../constants/globalStyle";
import RewardsCard from "./RewardsCard";

const RewardsCategory = (props) => {
  const { category, data } = props;
  const navigation = useNavigation();

  const goToRewardsDetailModal = (item) => {
    navigation.navigate("RewardsModal", { data: item });
  };

  return (
    <View style={styles.container}>
      <Text style={[globalStyle.header3, styles.categoryText]}>{category}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => {
          return (
            <RewardsCard
              title={item.title}
              content={item.content}
              points={item.points}
              imageBackground={item.imageBackground}
              id={item.id}
              onPress={goToRewardsDetailModal.bind(this, item)}
            />
          );
        }}
        keyExtractor={(myrewards) => myrewards.id}
      />
    </View>
  );
};

export default RewardsCategory;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  categoryText: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 5,
    color: color.Emerald,
  },
});
