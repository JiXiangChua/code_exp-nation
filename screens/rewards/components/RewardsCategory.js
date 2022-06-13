import { View, StyleSheet, Text, FlatList } from "react-native";
import RewardsCard from "./RewardsCard";

const RewardsCategory = (props) => {
  const { category, data } = props;
  return (
    <View style={styles.container}>
      <Text>{category}</Text>
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
});
