import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// impoterted Component
import LoginSignup from '../screen/LoginSignup';
import LoginScreen from '../screen/LoginScreen';
import SignUpScreen from '../screen/SignUpScreen';
<<<<<<< HEAD
import HomeScreen from '../screen/HomeScreen';
import AppDrawer from '../components/AppDrawer';
import BottomNav from './BottomNav';
import AppStack from './AppStack';
import Cbse from '../components/courses/main_course/Cbse';
import Icse from '../components/courses/main_course/Icse';
import Ssc from '../components/courses/main_course/Ssc';
import Cuet from '../components/courses/main_course/Cuet';
import Dsssb from '../components/courses/main_course/Dsssb';
import Quiz from '../components/courses/main_course/Quiz';
import Test from '../components/courses/main_course/Test';
import Clat from '../components/courses/main_course/Clat';
import YourCourse from '../components/courses/main_course/YourCourse';
import AccountPrivacy from '../components/setting/AccountPrivacy';
import Notification from '../components/setting/Notification';
import Helpsupport from '../components/setting/Helpsupport';
import OneC from '../components/courses/classes/OneC';
import OtpVerification from '../components/courses/misc/OtpVerification';
=======
>>>>>>> dcbdbcf34e65e968481ff2ce2f35efa1f5208644

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
<<<<<<< HEAD
      <Stack.Screen name="LoginSignup" component={LoginSignup} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="Otp-verify" component={OtpVerification} />
      {/* <Stack.Screen name="home" component={HomeScreen} /> */}
      <Stack.Screen name="Home_tab" component={AppStack} />

      {/* Home Screeen Refers */}
      <Stack.Screen name="cbse" component={Cbse} />
      <Stack.Screen name="icse" component={Icse} />
      <Stack.Screen name="ssc" component={Ssc} />
      <Stack.Screen name="clat" component={Clat} />
      <Stack.Screen name="cuet" component={Cuet} />
      <Stack.Screen name="dsssb" component={Dsssb} />
      <Stack.Screen name="quiz" component={Quiz} />
      <Stack.Screen name="test" component={Test} />
      <Stack.Screen name="your_course" component={YourCourse} />

      {/* Setting Screen refers */}
      <Stack.Screen name="account_privacy" component={AccountPrivacy} />
      <Stack.Screen name="notification" component={Notification} />
      <Stack.Screen name="helpsupport" component={Helpsupport} />

      {/* cbse screen refers */}
      <Stack.Screen name="OneC" component={OneC} />
=======
        <Stack.Screen name="LoginSignup" component={LoginSignup} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
>>>>>>> dcbdbcf34e65e968481ff2ce2f35efa1f5208644
    </Stack.Navigator>
  );
};

export default AuthStack;
