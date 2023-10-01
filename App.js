import { View, Text, Button, StyleSheet, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DecideStack from './navigation/DecideStack';
import { UserProvider, useUserContext } from './utils/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from './components/Splash';
//auth0
import { useAuth0, Auth0Provider } from 'react-native-auth0';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const NavComponent = () => {

  const [loading, setLoading] = useState(true)
  // setting global data from async storage
  const { setUser, setJwtoken } = useUserContext()

  useEffect(() => {
    const setGlobalData = async () => {
      try {
        await setUser(JSON.parse(await AsyncStorage.getItem('user')))
        await setJwtoken(await AsyncStorage.getItem('jwtoken'))
        setLoading(false)
      }
      catch (e) {
        console.log("Error ", e)
      }
      
    }
    setGlobalData();

    // configuring google-signin
    GoogleSignin.configure({
      webClientId: "967642509622-irbv40matt7l920g5ds6r73bjqc77k1h.apps.googleusercontent.com",
    });
    
  }, [])

  return (
    //wrapping with navigation
    <NavigationContainer>
      {loading ? <Splash /> : <DecideStack />}
    </NavigationContainer>)
}

// app component
const App = () => {
  return (
    <Auth0Provider domain={"dev-h4achp4dc0pqx6ih.us.auth0.com"} clientId={"YVQ46jtQxKM7QI5fDtFgqABmfabJajOb"}>
      <>
    {/* // wrapping with context provide */}
        <UserProvider>
          <NavComponent />
        </UserProvider>
      </>
    </Auth0Provider>
  )
}

styles = StyleSheet.create({})

export default App;