import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Colors} from '../components/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';

import TransaksiPage from './TransaksiPage';
import HutangPage from './HutangPage';
import StokPage from './StokPage';
import LainnyaPage from './LainnyaPage';

const Tab = createBottomTabNavigator();

const HomePage = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          let iconColor;
          const focusColor = Colors.primaryColor;
          const unfocusColor = Colors.thirdColor;
          switch (route.name) {
            case 'Transaksi':
              iconName = 'book';
              break;
            case 'Hutang':
              iconName = 'credit-card';
              break;

            case 'Stok':
              iconName = 'barcode';
              break;
            case 'Lainnya':
              iconName = 'user';
              break;
          }
          if (focused) {
            iconColor = focusColor;
          } else {
            iconColor = unfocusColor;
          }
          return <Icon name={iconName} size={20} color={iconColor} /> ;
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: Colors.thirdColor,
        style: pageStyle.tabBar,
      }}>
      <Tab.Screen name="Transaksi" component={TransaksiPage} />
      <Tab.Screen name="Hutang" component={HutangPage} />
      <Tab.Screen name="Stok" component={StokPage} />
      <Tab.Screen name="Lainnya" component={LainnyaPage} />
    </Tab.Navigator>
  );
};

const pageStyle = StyleSheet.create({
  tabBar: {
    fontSize: 8,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: Colors.bgColor,
  },
});
export default HomePage;
