import {StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DecideStack from './navigation/DecideStack';
import {UserProvider, useUserContext} from './utils/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from './components/Splash';
import OnBoardingScreen from './screen/OnBoardingScreen';

const NavComponent = () => {
  const [loading, setLoading] = useState(true);
  // setting global data from async storage
  const {setUser, setJwtoken, setDownloads, isOldUser, setIsOldUser} = useUserContext();

  useEffect(() => {
    const setGlobalData = async () => {
      try {
        await setUser(JSON.parse(await AsyncStorage.getItem('user')));
        await setIsOldUser(JSON.parse(await AsyncStorage.getItem('isOldUser')));
        await setJwtoken(await AsyncStorage.getItem('jwtoken'));
        const downldData = JSON.parse(await AsyncStorage.getItem('downloads'));
        if(downldData) await setDownloads(downldData);
        else await setDownloads([]);
        setLoading(false);
      } catch (e) {
        console.log('Error ', e);
      }
    };
    setGlobalData();
  }, []);

  return (
    //wrapping with navigation
    <NavigationContainer>
      {loading ? <Splash /> :(isOldUser)?<DecideStack />:<OnBoardingScreen/>}
    </NavigationContainer>
  );
};

// app component
const App = () => {
  return (
    <>
        {/* // wrapping with context provide */}
        <UserProvider>
          <NavComponent />
        </UserProvider>
    </>
  );
};

styles = StyleSheet.create({});

export default App;
