import React, {useState} from 'react';
import {
  FlatList,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const ItamList = props => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ItamList;
