import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// impoterted Component
import HomeScreen from '../screen/HomeScreen';
import Cbse from '../components/courses/main_course/Cbse';
import Icse from '../components/courses/main_course/Icse';
import Ssc from '../components/courses/main_course/Ssc';
import Cuet from '../components/courses/main_course/Cuet';
import Dsssb from '../components/courses/main_course/Dsssb';
import Quiz from '../components/courses/main_course/Quiz';

import Clat from '../components/courses/main_course/Clat';

import AccountPrivacy from '../components/setting/AccountPrivacy';
import Notification from '../components/setting/Notification';
import Helpsupport from '../components/setting/Helpsupport';
import BottomNav from './BottomNav';
import ProfileSettings from '../components/ProfileSettings';
import TestDetail from '../components/testseries/TestDetail';
import BoardScreen from '../components/testseries/BoardScreen';
import ResultScreen from '../components/testseries/ResultScreen';
import OthersComp from '../components/courses/main_course/OthersComp';
import Police from '../components/courses/main_course/Police';
import SettingScreen from '../screen/SettingScreen';

import SupportMaterial from '../components/SupportMaterial';
import RivisionNotes from '../components/RivisionNotes';
import Videos from '../components/Videos';
import MyCourse from '../components/courses/main_course/MyCourse';

const Stack = createStackNavigator();

const StudentStack = () => {
  return (
    <>
      {/* all other stack screens  */}
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {backgroundColor: '#dc3545'},
        }}>
        {/* nesting bottom nav */}
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{headerShown: false}}
        />

        {/* Home Screeen Refers */}
        <Stack.Screen
          name="cbse"
          component={Cbse}
          options={{headerTintColor: '#fff'}}
        />
        <Stack.Screen name="icse" component={Icse} />
        <Stack.Screen name="ssc" component={Ssc} />
        <Stack.Screen name="clat" component={Clat} />
        <Stack.Screen name="cuet" component={Cuet} />
        <Stack.Screen name="dsssb" component={Dsssb} />
        <Stack.Screen name="police" component={Police} />
        <Stack.Screen name="other_comp" component={OthersComp} />

        {/* Setting Screen refers */}
        <Stack.Screen
          name="setting_screen"
          component={SettingScreen}
          options={{
            headerTintColor: '#fff',
            title: 'Settings',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="account_privacy" component={AccountPrivacy} />
        <Stack.Screen name="notification" component={Notification} />
        <Stack.Screen name="helpsupport" component={Helpsupport} />
        <Stack.Screen
          name="profile_setting"
          component={ProfileSettings}
          options={{title: 'Profile'}}
        />

        {/* more Button stack screen */}
        <Stack.Screen
          name="support_material"
          component={SupportMaterial}
          options={{
            headerTintColor: '#fff',
            title: 'Support Material',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="rivision_notes"
          component={RivisionNotes}
          options={{
            headerTintColor: '#fff',
            title: 'Rivision Notes',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="videos"
          component={Videos}
          options={{
            headerTintColor: '#fff',
            title: 'Videos',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="my_course"
          component={MyCourse}
          options={{
            headerTintColor: '#fff',
            title: 'MyCourse',
            headerTitleAlign: 'center',
          }}
        />
        {/* Quiz App Refers */}
        <Stack.Screen
          name="test_detail"
          component={TestDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="test_board"
          component={BoardScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="result_screen"
          component={ResultScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default StudentStack;
