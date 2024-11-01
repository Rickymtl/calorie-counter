// components/AddFood.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import Dropdown from "react-native-input-select";

const AddFood = ({ addFood }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("g");

  const handleSubmit = () => {
    addFood({ name, amount, unit });
    setName("");
    setAmount("");
    setUnit("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Food Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Dropdown
        label="Unit"
        placeholder=""
        options={[
          { label: "Grams", value: "g" },
          { label: "Ounce", value: "oz" },
          { label: "Each", value: "each" },
        ]}
        selectedValue={unit}
        onValueChange={setUnit}
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Unit"
        value={unit}
        onChangeText={setUnit}
        keyboardType="numeric"
      /> */}
      {/* <TextInput
        style={styles.input}
        placeholder="Carbs"
        value={carbs}
        onChangeText={setCarbs}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Fat"
        value={fat}
        onChangeText={setFat}
        keyboardType="numeric"
      /> */}
      <Button title="Add Food" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default AddFood;
