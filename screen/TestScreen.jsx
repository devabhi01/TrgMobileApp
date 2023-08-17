import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'



const TestScreen = () => {

  return (
    <View>
      <Text>TestScreen</Text>
      <Button onPress={()=>{handlePress({material:'test-series', count:1})}} >done</Button>
    </View>
  )
}

export default TestScreen