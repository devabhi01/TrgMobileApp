import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DecideStack from './navigation/DecideStack';
import {UserProvider, useUserContext} from './utils/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from './components/Splash';
import {StripeProvider} from '@stripe/stripe-react-native';

const NavComponent = () => {
  const [loading, setLoading] = useState(true);
  // setting global data from async storage
  const {setUser, setJwtoken, setDownloads} = useUserContext();

  useEffect(() => {
    const setGlobalData = async () => {
      try {
        await setUser(JSON.parse(await AsyncStorage.getItem('user')));
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
      {loading ? <Splash /> : <DecideStack />}
    </NavigationContainer>
  );
};

// app component
const App = () => {
  return (
    <>
      <StripeProvider publishableKey="pk_test_51OIpBHSBoBUkzh0Q83JSOVvCiumj2kgG8EAQdRx0hIcp3mTPxYLAuneKiVk3uZO3LhQeT6ENc98f7HqXXAefA7Sf00aCzFZE09">
        {/* // wrapping with context provide */}
        <UserProvider>
          <NavComponent />
        </UserProvider>
      </StripeProvider>
    </>
  );
};

styles = StyleSheet.create({});

export default App;
