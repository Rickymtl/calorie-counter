// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import { SafeAreaView, StyleSheet, ScrollView, View, Text } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Text>hello</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
// App.js
import React from "react";
import StackNavigator from "./navigation/StackNavigator";

const App = () => {
  return <StackNavigator />;
};

export default App;
