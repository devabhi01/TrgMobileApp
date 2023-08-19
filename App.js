


import { View, Text, Button, StyleSheet } from 'react-native'


import React, { useState } from 'react'




import AuthStack from './navigation/AuthStack';





const App = () => {

  return (
    <><AuthStack />
      {/* <Drawer.Navigator>
          <Drawer.Screen name="signup" component={SignUpScreen} />
        </Drawer.Navigator>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'home'} size={24} />
            ),
          }} />
          <Tab.Screen name="Test" component={TestScreen} options={{
            tabBarLabel: 'Test',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'file'} size={24} />
            ),
          }} />
          <Tab.Screen name="Material" component={MaterialScreen} options={{
            tabBarLabel: 'Material',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'folder'} size={24} />
            ),
          }} />
          <Tab.Screen name="Setting" component={SettingScreen} options={{
            tabBarLabel: 'More',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'info'} size={24} />
            ),
          }} />
          <Tab.Screen name="Login" component={LoginSignup} options={{
            tabBarLabel: 'Login/Register',
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'info'} size={24} />
            ),
          }} />
        </Tab.Navigator> */}</>
  )
}

styles = StyleSheet.create({})

export default App;