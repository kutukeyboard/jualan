import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from '../components/style';

import Icon from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TransaksiPage from './TransaksiPage';
import HutangPage from './HutangPage';
import StokPage from './StokPage';
import LainnyaPage from './LainnyaPage';

const Tab = createBottomTabNavigator();

const HomePage = () => {
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
              iconName = 'home';
              break;
            case 'Hutang':
              iconName = 'mail';
              break;
            case 'Stok':
              iconName = 'tag';
            case 'Lainnya':
              iconName = 'tool';
              break;
          }
          if (focused) {
            iconColor = focusColor;
          } else {
            iconColor = unfocusColor;
          }
          return <Icon name={iconName} size={25} color={iconColor} />;
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
