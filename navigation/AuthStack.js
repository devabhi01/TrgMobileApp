import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// impoterted Component
import LoginSignup from '../screen/LoginSignup';
import LoginScreen from '../screen/LoginScreen';
import SignUpScreen from '../screen/SignUpScreen';
import OtpVerification from '../components/OtpVerification';
import ForgotPass from '../components/ForgotPass';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginSignup" component={LoginSignup} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Otp-verify" component={OtpVerification} />
        <Stack.Screen name="forgot_password" component={ForgotPass} />
    </Stack.Navigator>
  );
};

export default AuthStack;
