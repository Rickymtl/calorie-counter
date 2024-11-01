// components/FoodItem.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

const FoodItem = ({
  food,
  setEditModalVisible,
  setSelectedFood,
  deleteFood,
}) => {
  const renderRightActions = () => (
    <View style={styles.actionsContainer}>
      <TouchableOpacity
        style={[styles.actionButton, styles.editButton]}
        onPress={() => {
          setSelectedFood(food);
          setEditModalVisible(true);
        }}
      >
        <Text style={styles.actionButtonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.actionButton, styles.deleteButton]}
        onPress={() => {
          setEditModalVisible(false);
          deleteFood(food.id);
        }}
      >
        <Text style={styles.actionButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.container}>
          <Text style={styles.name}>{food.name}</Text>
          <Text>
            Amount: {food.amount} {food.unit}
          </Text>
          {/* <Text>Unit: {food.unit}</Text> */}
          {/* <Text>Carbs: {food.carbs}g</Text>
          <Text>Fat: {food.fat}g</Text> */}
        </View>
      </Swipeable>
    </GestureHandlerRootView>
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
  actionsContainer: {
    flexDirection: "row",
  },
  actionButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
  },
  editButton: {
    backgroundColor: "#4CAF50",
  },
  deleteButton: {
    backgroundColor: "#F44336",
  },
  actionButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default FoodItem;
