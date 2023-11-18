import { View, Text, Button, StyleSheet, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DecideStack from './navigation/DecideStack';
import { UserProvider, useUserContext } from './utils/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from './components/Splash';


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
   
      <>
    {/* // wrapping with context provide */}
        <UserProvider>
          <NavComponent />
        </UserProvider>
      </>
  )
}

styles = StyleSheet.create({})

export default App;