import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'


const MyCourse = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'#0a0a0a'}}>No Course joined</Text>
      </View>

    </SafeAreaView>
  )
}

export default MyCourse