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

import Videos from '../components/Videos';
import MyCourse from '../components/courses/main_course/MyCourse';
import Material from '../components/Material';

import PdfViewer from '../components/courses/template/PdfViewer';
import PdfScreen from '../components/courses/template/PdfScreen';
import Assignments from '../components/material/Assignments';
import NcertBooks from '../components/material/NcertBooks';
import PreviousYearQP from '../components/material/PreviousYearQP';
import SupportMaterial from '../components/material/SupportMaterial';
import Sylabus from '../components/material/Sylabus';
import RivisionNotes from '../components/material/RivisionNotes';
import DoubtClearence from '../components/DoubtClearence';
import Bookmarks from '../components/Bookmarks';

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
          name="material"
          component={Material}
          options={{
            headerTintColor: '#fff',
            title: 'Materials',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="doubt_clearence"
          component={DoubtClearence}
          options={{
            headerTintColor: '#fff',
            title: 'DoubtClearence',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="bookmarks"
          component={Bookmarks}
          options={{
            headerTintColor: '#fff',
            title: 'DoubtClearence',
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

        {/* Pdf viewer refers */}
        <Stack.Screen
          name="pdf_viewer"
          component={PdfViewer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="pdf_screen"
          component={PdfScreen}
          options={{headerShown: false}}
        />
        

        {/* Material Section Refers */}
        <Stack.Screen
          name="rivision_notes"
          component={RivisionNotes}
          options={{
            headerTintColor: '#fff',
            title: 'RivisionNotes',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="assignments"
          component={Assignments}
          options={{
            headerTintColor: '#fff',
            title: 'Assignments',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="ncertbooks"
          component={NcertBooks}
          options={{
            headerTintColor: '#fff',
            title: 'NcertBooks',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="previous_year_qp"
          component={PreviousYearQP}
          options={{
            headerTintColor: '#fff',
            title: 'PreviousYearQP',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="support_material"
          component={SupportMaterial}
          options={{
            headerTintColor: '#fff',
            title: 'SupportMaterial',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="sylabus"
          component={Sylabus}
          options={{
            headerTintColor: '#fff',
            title: 'Sylabus',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default StudentStack;
