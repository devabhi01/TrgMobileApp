import { StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import React, {useState} from 'react'

const SignUpScreen = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
  return (
    <View style={{marginTop:200, marginHorizontal:20}}>
      <Text style={{fontSize:25, fontWeight:500, marginBottom:5}} >Create Your Account</Text>
      <TextInput
      label="Name"
      value={name}
      onChangeText={name => setName(name)}
      />
      <View style={{marginBottom:20}} />

      <TextInput
      label="Number"
      value={phoneNo}
      onChangeText={phoneNo => setPhoneNo(phoneNo)}
      />
      <View style={{marginBottom:20}} />

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

      <Button style={{backgroundColor:'white'}} >Submit</Button>

    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})