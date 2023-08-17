import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import {useDispatch} from 'react-redux'
import {addToCart} from '../redux/action'



const TestScreen = () => {

  const dispatch = useDispatch()

const handlePress = (item) =>{
  console.log("pressed");
  dispatch(addToCart(item))

}

  return (
    <View>
      <Text>TestScreen</Text>
      <Button onPress={()=>{handlePress({material:'test-series', count:1})}} >done</Button>
    </View>
  )
}

export default TestScreen