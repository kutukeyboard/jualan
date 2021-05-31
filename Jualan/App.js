import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StatusBar} from 'react-native';
import {Colors} from './components/style';

import LoginPage from './pages/Account/LoginPage';
import OtpPage from './pages/Account/OtpPage';
import RegisterPage from './pages/Account/RegisterPage';
import LogOutPage from './pages/Account/LogOutPage';
import HomePage from './pages/HomePage';

const Stack = createStackNavigator();

const App = () => {
  const user = true;
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.primaryColor} />
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {fontSize: 16},
          headerTitleAlign: 'center',
          headerTintColor: '#607D8B',
          headerStyle: {height: 40},
          animationEnabled: false,
        }}>
        {user ? (
          <Stack.Screen name="Home" options={{headerShown: false}}>
            {() => <HomePage />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" options={{headerShown: false}}>
              {() => <LoginPage />}
            </Stack.Screen>
            <Stack.Screen name="Otp" options={{headerShown: false}}>
              {() => <OtpPage />}
            </Stack.Screen>
            <Stack.Screen name="Register" options={{headerShown: false}}>
              {() => <RegisterPage />}
            </Stack.Screen>
            <Stack.Screen name="Log" options={{headerShown: false}}>
              {() => <LogOutPage />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
