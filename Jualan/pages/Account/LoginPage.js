import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';

import {Colors} from '../../components/style';

const LoginPage = () => {
  const [confirm, setConfirm] = useState(null);

  if (confirm === null) {
    return (
      <SafeAreaView style={pageStyle.container}>
        <View>
          <Image
            source={require('./../../images/logo.png')}
            style={pageStyle.loginImage}
          />
          <Text style={pageStyle.headerHelloText}>Oh, hello!</Text>
          <Text style={pageStyle.headerText}>
            Please login to your account.
          </Text>
        </View>
      </SafeAreaView>
    );
  } else {
    <SafeAreaView style={Layout.contentVerticalContainer}>
      <View>
        <Text style={pageStyle.sectionLabel}>Enter OTP</Text>
        <Text style={pageStyle.smalltext}>
          We have sent an OTP to your phone.
        </Text>
      </View>
    </SafeAreaView>;
  }
};

const pageStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    padding: 40,
    height: '100%',
  },
  loginImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignSelf: 'center',
  },
  headerHelloText: {
    textAlign: 'center',
    fontSize: 26,
    marginTop: 30,
    color: Colors.bgColor,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 30,
    color: Colors.bgColor,
  },
  loginInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 10,
    paddingBottom: 10,
    height: 45,
    color: Colors.textColor,
  },
  loginInputNoBorder: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    height: 45,
    color: Colors.textColor,
  },
  signupButton: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginButton: {
    marginTop: 400,
  },
  SignupText: {
    color: Colors.bgColor,
    fontWeight: '300',
  },
  SignupTextBold: {
    color: Colors.bgColor,
    fontWeight: '700',
  },
  errorLabel: {
    color: Colors.bgColor,
    fontSize: 12,
    marginTop: 2,
    marginBottom: 10,
    marginLeft: 20,
  },
  sectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    backgroundColor: '#fff',
    height: 45,
    width: 45,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    paddingTop: 7,
    paddingLeft: 3,
    textAlign: 'center',
  },
  imageStyleEnd: {
    backgroundColor: '#fff',
    height: 45,
    width: 45,
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 7,
    paddingRight: 3,
    textAlign: 'center',
    borderColor: 'transparent',
  },
  otpContainer: {
    flex: 1,
    marginTop: 40,
  },
  sectionLabel: {
    marginTop: 10,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    color: '#607D8B',
  },
  smalltext: {
    marginTop: 5,
    fontSize: 12,
    color: '#607D8B',
    textAlign: 'center',
  },
});

export default LoginPage;
