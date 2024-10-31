// screens/HomeScreen.js
import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Modal, TextInput } from "react-native";
import FoodList from "../components/FoodList";
import DatePicker from "../components/DatePicker";
import Icon from "react-native-vector-icons/EvilIcons";
import { format, startOfToday } from "date-fns";
import Dropdown from "react-native-input-select";

const HomeScreen = ({ navigation }) => {
  const [foods, setFoods] = useState([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const addFood = (food) => {
    setFoods([...foods, { ...food, id: Date.now().toString() }]);
  };

  const editFood = (updatedFood) => {
    const updatedFoods = foods.map((food) =>
      food.id === updatedFood.id ? updatedFood : food
    );
    setFoods(updatedFoods);
    setEditModalVisible(false);
  };

  const deleteFood = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
    setEditModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="">
        <Icon name="calendar" style={styles.icon}></Icon>
      </Button>
      {/* <DatePicker></DatePicker> */}
      <Text>{format(startOfToday(), "MMM d,yyyy")}</Text>
      <Icon name="calendar" style={styles.icon}></Icon>
      <Text style={styles.header}>Calorie total placeholder</Text>
      <FoodList
        foods={foods}
        setEditModalVisible={setEditModalVisible}
        setSelectedFood={setSelectedFood}
        deleteFood={deleteFood}
      />
      <Button
        title="Add Food"
        onPress={() => navigation.navigate("AddFood", { addFood })}
      />
      <Modal visible={editModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Edit Food Item</Text>
          <TextInput
            style={styles.input}
            placeholder="Food Name"
            value={selectedFood?.name}
            onChangeText={(text) =>
              setSelectedFood({ ...selectedFood, name: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Amount"
            value={selectedFood?.amount.toString()}
            onChangeText={(text) =>
              setSelectedFood({ ...selectedFood, amount: parseInt(text) })
            }
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
            selectedValue={selectedFood?.unit.toString()}
            onValueChange={(text) =>
              setSelectedFood({ ...selectedFood, unit: text })
            }
          />
          <Button title="Save" onPress={() => editFood(selectedFood)} />
          <Button title="Cancel" onPress={() => setEditModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
  },
});

export default HomeScreen;
