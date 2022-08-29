import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Modal,
  Image,
} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  function inputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/favicon.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal..."
          onChangeText={inputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f000f0',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginTop: 16,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
