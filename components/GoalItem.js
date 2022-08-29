import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedData}
      >
        <Text style={styles.text}>{props.text} </Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5ceacc',
  },
  pressedData: {
    opacity: 0.5,
  },
  text: {
    color: '#ffffff',
    padding: 8,
  },
});
