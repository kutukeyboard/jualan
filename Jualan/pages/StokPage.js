import React, {useState} from 'react';
import {
  FlatList,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const StokPage = () => {
  const [addTransaction, setAddTransaction] = useState('');

  const [transaction, setTransaction] = useState([]);

  const addTransactionHandle = addTransaction => {
    setAddTransaction(addTransaction);
  };

  const transactionHandler = () => {
    setTransaction(current => [
      ...current,
      {key: Math.random().toString(), value: addTransaction},
    ]);
    setAddTransaction();
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Tambah Transaksi"
          style={styles.input}
          onChangeText={addTransactionHandle}
          value={addTransaction}
        />
        <Button title="Tambah" onPress={transactionHandler} />
      </View>
      <View>
        <FlatList
          data={transaction}
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

export default StokPage;
