import { View, Text, Button, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DecideStack from './navigation/DecideStack';
import { UserProvider } from './utils/userContext';

const App = () => {

  return (
    // wrapping with context provide 
    <UserProvider>
      {/* wrapping with navigation */}
      <NavigationContainer>
        <DecideStack />
      </NavigationContainer>
    </UserProvider>
  )
}

styles = StyleSheet.create({})

export default App;