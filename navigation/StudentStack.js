import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// impoterted Component
import HomeScreen from '../screen/HomeScreen';
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
import BottomNav from './BottomNav';
import ProfileSettings from '../components/ProfileSettings';
import TestDetail from '../components/testseries/TestDetail';
import BoardScreen from '../components/testseries/BoardScreen';
import ResultScreen from '../components/testseries/ResultScreen';



const Stack = createStackNavigator();

const StudentStack = () => {
    return (
        <>
        {/* all other stack screens  */}
        <Stack.Navigator screenOptions={{ headerShown: true }}>

            {/* nesting bottom nav */}
            <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />

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
            <Stack.Screen name="profile_setting" component={ProfileSettings} />

            {/* Quiz App Refers */}
            <Stack.Screen name="test_detail" component={TestDetail} options={{headerShown:false}} />
            <Stack.Screen name="test_board" component={BoardScreen} options={{headerShown:false}} />
            <Stack.Screen name="result_screen" component={ResultScreen} options={{headerShown:false}} />
            
        </Stack.Navigator>
        </>
    );
};

export default StudentStack;
