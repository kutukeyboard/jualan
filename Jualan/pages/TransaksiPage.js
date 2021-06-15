import React, {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';

import {
  FlatList,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

moment.locale('en');

const TransaksiPage = () => {
  const [transaction, setTransaction] = useState([]);
  var config = {
    method: 'get',
    url: 'http://10.0.2.2:5000/jualan-54144/asia-east2/api/transaction',
    headers: {},
  };

  useEffect(() => {
    getTransaction();
  }, []);

  const getTransaction = () => {
    axios(config).then(
      response => {
        console.log(response.data);
        setTransaction(response.data);
      },
      error => {
        console.log(error);
      },
    );
  };

  return (
    <View style={styles.screen}>
      {/* Transaction */}
      <View style={styles.itemWrapper}>
        <Text style={styles.sectionTitle}>Transaksi</Text>
      </View>

      <FlatList
        style={styles.item}
        data={transaction}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item}) => (
          <View style={styles.itemColumn}>
            <Text style={[styles.item, styles.itemDate]}>
              [{moment('2011-06-12T00:00:00').format('D/MM')}]
            </Text>
            <Text style={[styles.item, styles.itemName]}>{item.name}</Text>
            <Text style={[styles.item, styles.itemPrice]}>
              Rp {item.amaunt}
            </Text>
          </View>
        )}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    padding: 10,
    margin: 10,
  },

  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemName: {
    fontSize: 16,
  },
  itemDate: {
    fontSize: 14,
  },
});

export default TransaksiPage;
