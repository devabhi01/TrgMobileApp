import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import HomeScreen from "./screen/HomeScreen";
import SignUpScreen from './screen/SignUpScreen';
import { PaperProvider } from 'react-native-paper';
import LoginScreen from './screen/LoginScreen';


const App = () => {

  return (
    <PaperProvider>
      <View>
        <HomeScreen />
        {/* <SignUpScreen /> */}
        <LoginScreen/>
      </View>
    </PaperProvider>
  )
}

styles = StyleSheet.create({})

export default App;