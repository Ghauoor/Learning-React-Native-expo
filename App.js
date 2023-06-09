import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Ghayoor</Text>
      <Text style={styles.text}>Hello Another One</Text>
      <Button title="Hello" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 15,
    borderWidth: 2,
    borderColor: "purple",
    color: "black",
    padding: 16,
  },
});
