import React, {useState} from 'react';
import {
  FlatList,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const HutangPage = () => {
  const [AddDebt, setAddDebt] = useState('');

  const [debt, setDebt] = useState([]);

  const addDebtHandle = addDebts => {
    setAddDebt(addDebts);
  };

  const debtHandler = () => {
    setDebt(current => [
      ...current,
      {key: Math.random().toString(), value: AddDebt},
    ]);
    setAddDebt();
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Tambah Transaksi"
          style={styles.input}
          onChangeText={addDebtHandle}
          value={AddDebt}
        />
        <Button title="Tambah" onPress={debtHandler} />
      </View>
      <View>
        <FlatList
          data={debt}
          renderItem={dataItem => (
            <View style={styles.listItem}>
              <Text style={styles.listListDate}>01/01/11</Text>
              <Text>Rp {dataItem.item.value} </Text>
            </View>
          )}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  input: {
    width: '80%',

    color: 'black',
    padding: 10,
  },

  listItem: {
    padding: 5,
    margin: 5,
    backgroundColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  listListDate: {
    fontSize: 12,
  },
});

export default HutangPage;
