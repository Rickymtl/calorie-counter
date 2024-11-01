// database.js
import SQLite from "react-native-sqlite-storage";

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "FoodDatabase.db";
const database_version = "1.0";
const database_displayname = "SQLite React Native Food Database";
const database_size = 200000;

export const getDBConnection = async () => {
  return await SQLite.openDatabase(
    database_name,
    database_version,
    database_displayname,
    database_size
  );
};

export const createTables = async (db) => {
  await db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS FoodItems (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, amount REAL, unit TEXT);"
    );
  });
};

export const addFoodItem = async (db, food) => {
  const { name, amount, unit } = food;
  await db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO FoodItems (name, amount, unit) VALUES (?, ?, ?);",
      [name, amount, unit]
    );
  });
};

export const getFoodItems = async (db) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM FoodItems;",
        [],
        (tx, results) => {
          const rows = results.rows;
          let items = [];
          for (let i = 0; i < rows.length; i++) {
            items.push(rows.item(i));
          }
          resolve(items);
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};

export const updateFoodItem = async (db, food) => {
  const { id, name, amount, unit } = food;
  await db.transaction((tx) => {
    tx.executeSql(
      "UPDATE FoodItems SET name = ?, amount = ?, unit = ? WHERE id = ?;",
      [name, amount, unit, id]
    );
  });
};

export const deleteFoodItem = async (db, id) => {
  await db.transaction((tx) => {
    tx.executeSql("DELETE FROM FoodItems WHERE id = ?;", [id]);
  });
};
