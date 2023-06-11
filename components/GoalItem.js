import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem}>
      <View style={styles.goalItems}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    padding: 8,

    borderRadius: 6,
    backgroundColor: "#654193",
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
