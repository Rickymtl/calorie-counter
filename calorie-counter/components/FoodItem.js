// components/FoodItem.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FoodItem = ({ food }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{food.name}</Text>
      <Text>Calories: {food.calories}</Text>
      <Text>Protein: {food.protein}g</Text>
      <Text>Carbs: {food.carbs}g</Text>
      <Text>Fat: {food.fat}g</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  name: {
    fontWeight: "bold",
  },
});

export default FoodItem;
