// components/FoodItem.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { format, startOfToday } from "date-fns";

const DatePicker = () => {
  let today = startOfToday();
  return <view>{format(today, "MMM-d,YYYY")}</view>;
};

export default DatePicker;
