// components/FoodList.js
import React from "react";
import { View, FlatList } from "react-native";
import FoodItem from "./FoodItem";

const FoodList = ({ foods }) => {
  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <FoodItem food={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default FoodList;
