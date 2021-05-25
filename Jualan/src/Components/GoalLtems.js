import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalLtem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
  },
});

export default GoalLtem;
