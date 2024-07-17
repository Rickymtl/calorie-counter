// screens/HomeScreen.js
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import FoodList from "../components/FoodList";

const HomeScreen = ({ navigation }) => {
  const [foods, setFoods] = useState([]);

  const addFood = (food) => {
    setFoods([...foods, food]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calorie Counter</Text>
      <Button
        title="Add Food"
        onPress={() => navigation.navigate("AddFood", { addFood })}
      />
      <FoodList foods={foods} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});

export default HomeScreen;
