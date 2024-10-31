// components/FoodList.js
import React from "react";
import { FlatList } from "react-native";
import FoodItem from "./FoodItem";

const FoodList = ({
  foods,
  setEditModalVisible,
  setSelectedFood,
  deleteFood,
}) => {
  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => (
        <FoodItem
          food={item}
          setEditModalVisible={setEditModalVisible}
          setSelectedFood={setSelectedFood}
          deleteFood={deleteFood}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default FoodList;
