import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// impoterted Component
import Cbse from '../components/courses/main_course/Cbse';
import Icse from '../components/courses/main_course/Icse';
import Ssc from '../components/courses/main_course/Ssc';
import Cuet from '../components/courses/main_course/Cuet';
import Dsssb from '../components/courses/main_course/Dsssb';

import Clat from '../components/courses/main_course/Clat';

import AccountPrivacy from '../components/setting/AccountPrivacy';
import Notification from '../components/setting/Notification';
import Helpsupport from '../components/setting/Helpsupport';
import ProfileSettings from '../components/ProfileSettings';
import TestDetail from '../components/testseries/TestDetail';
import BoardScreen from '../components/testseries/BoardScreen';
import OthersComp from '../components/courses/main_course/OthersComp';
import Police from '../components/courses/main_course/Police';
import SettingScreen from '../screen/SettingScreen';

import Videos from '../components/Videos';
import MyCourse from '../components/courses/main_course/MyCourse';
import Material from '../components/Material';

import PdfViewer from '../components/courses/template/PdfViewer';
import PdfScreen from '../components/courses/template/PdfScreen';
import RivisionNotes from '../components/material/RivisionNotes';
import DoubtClearence from '../components/DoubtClearence';
import Bookmarks from '../components/Bookmarks';

import Announcement from '../components/header/Announcement';
import DrawerNav from './DrawerNav';
import Downloads from '../components/Downloads';
import ListScreen from '../components/courses/template/ListScreen';
import TestList from '../components/testseries/TestList';
import MaterialList from '../components/material/MaterialList';
import MaterialModal from '../components/material/MaterialModal';
import OnBoardingScreen from '../screen/OnBoardingScreen';
import MyMaterial from '../components/MyMaterial';




const Stack = createStackNavigator();

const StudentStack = () => {
  return (
    <>
      {/* all other stack screens  */}
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: '#dc3545' },
        }}>
        {/* nesting bottom nav */}
        <Stack.Screen
          name="home"
          component={DrawerNav}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="announcement"
          component={Announcement}
          options={{
            headerTintColor: '#fff',
            title: 'Announcement',
            headerTitleAlign: 'center',
          }}
        />

        {/* Home Screeen Refers */}
        <Stack.Screen
          name="cbse"
          component={Cbse}
          options={{
            headerTintColor: '#fff',
            title: 'CBSE',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="icse"
          component={Icse}
          options={{
            headerTintColor: '#fff',
            title: 'ICSE',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="ssc"
          component={Ssc}
          options={{
            headerTintColor: '#fff',
            title: 'SSC',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="clat"
          component={Clat}
          options={{
            headerTintColor: '#fff',
            title: 'CLAT',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="cuet"
          component={Cuet}
          options={{
            headerTintColor: '#fff',
            title: 'CUET',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="dsssb"
          component={Dsssb}
          options={{
            headerTintColor: '#fff',
            title: 'DSSSB',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="police"
          component={Police}
          options={{
            headerTintColor: '#fff',
            title: 'Police Services',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="other_comp"
          component={OthersComp}
          options={{
            headerTintColor: '#fff',
            title: 'Other Competitive Exams',
            headerTitleAlign: 'center',
          }}
        />

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
        <Stack.Screen
          name="account_privacy"
          component={AccountPrivacy}
          options={{
            headerTintColor: '#fff',
            title: 'Account Privacy',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="notification"
          component={Notification}
          options={{
            headerTintColor: '#fff',
            title: 'Notification',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="helpsupport"
          component={Helpsupport}
          options={{
            headerTintColor: '#fff',
            title: 'Support',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="profile_setting"
          component={ProfileSettings}
          options={{
            headerTintColor: '#fff',
            title: 'Profile Settings',
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
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
            title: 'My Bookmarks',
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
          name="downloads"
          component={Downloads}
          options={{
            headerTintColor: '#fff',
            title: 'Downloads',
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
        <Stack.Screen
          name="my_material"
          component={MyMaterial}
          options={{
            headerTintColor: '#fff',
            title: 'My material(Paid)',
            headerTitleAlign: 'center',
          }}
        />
        {/* Quiz App Refers */}
        <Stack.Screen
          name="test_detail"
          component={TestDetail}
          options={{
            headerShown: false,
            headerTintColor: '#fff',
            title: '',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="test_board"
          component={BoardScreen}
          options={{
            headerTintColor: '#fff',
            title: '',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="testlist"
          component={TestList}
          options={{
            headerTintColor: '#fff',
            title: 'Choose Test Date',
            headerTitleAlign: 'center',
          }}
        />

        {/* Pdf viewer refers */}
        <Stack.Screen
          name="pdf_viewer"
          component={PdfViewer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pdf_screen"
          component={PdfScreen}
          options={{ headerShown: false }}
        />

        {/* Material Section Refers */}
        <Stack.Screen
          name="materialList"
          component={MaterialList}
          options={{
            headerTintColor: '#fff',
            title: '',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="material_modal"
          component={MaterialModal}
          options={{
            headerShown: false,
            // headerTintColor: '#fff',
            title: '',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="rivision_notes"
          component={RivisionNotes}
          options={{
            headerTintColor: '#fff',
            title: 'RivisionNotes',
            headerTitleAlign: 'center',
          }}
        />

        {/* material screen refers */}
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{
            headerTintColor: '#fff',
            title: 'Choose Subject',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="onBoarding"
          component={OnBoardingScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* Misc Screen refers */}

      </Stack.Navigator>
    </>
  );
};

export default StudentStack;
