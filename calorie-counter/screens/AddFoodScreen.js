// screens/AddFoodScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import AddFood from "../components/AddFood";

const AddFoodScreen = ({ route, navigation }) => {
  const { addFood } = route.params;

  return (
    <View style={styles.container}>
      <AddFood
        addFood={(food) => {
          addFood(food);
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default AddFoodScreen;
