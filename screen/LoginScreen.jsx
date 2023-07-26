import { StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import React, {useState} from 'react'

const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  return (
    <View style={{marginTop:200, marginHorizontal:20}}>
      <Text style={{fontSize:25, fontWeight:500, marginBottom:5}} >Welcome back!</Text>
      
      <TextInput
      label="Email"
      value={email}
      onChangeText={email => setEmail(email)}
      />
      <View style={{marginBottom:20}} />

      <TextInput
      label="Password"
      value={password}
      onChangeText={password => setPassword(password)}
      secureTextEntry
      />
      <View style={{marginBottom:20}} />

      <Button style={{backgroundColor:'white'}} >Login</Button>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})