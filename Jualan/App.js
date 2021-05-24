import React, {useState} from 'react';

import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import GoalItem from './Components/GoalLtems';

function App() {
  const [enteredGoal, setEnteredGoal] = React.useState('');
  const [courseGoal, setCourseGoal] = useState([]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoal(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: enteredGoal},
    ]);
    setEnteredGoal('');
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContener}>
        <TextInput
          placeholder="Input"
          style={styles.input}
          onChangeText={setEnteredGoal}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },

  inputContener: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input: {
    width: '80%',
    padding: 10,
  },
});

export default App;
