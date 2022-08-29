import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((newCourseGoals) => [
      ...newCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  function deleteGoalHandler(id) {
    setCourseGoals((newCourseGoals) => {
      return newCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  //start add goal
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  //end add goal
  function endAddGoal() {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appComponent}>
      <Button
        title="Add New Goal"
        color="#f54e78"
        onPress={startAddGoalHandler}
      />
      {modalIsVisible && (
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoal}
        />
      )}
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />

        {/*  <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => (
            <View style={styles.goalItems} key={goal}>
              <Text style={styles.text}>{goal} </Text>
            </View>
          ))}
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appComponent: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalContainer: {
    flex: 5,
  },
});
