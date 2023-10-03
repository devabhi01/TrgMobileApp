import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import React, { useState } from 'react';
import { colors } from '../constants';
import GoogleSVG from '../assets/img/google.svg';
import AppleSVG from '../assets/img/apple.svg';
import { useUserContext } from '../utils/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { loginUser } from '../utils/APIs';

const LoginScreen = props => {
  //taking function to set global variables
  const { setUser, setJwtoken } = useUserContext()

  // login info
  const [loginInfo, setLoginInfo] = useState({ phoneNoOrEmail: "", password: "" })

  // handling input change
  const handleChange = (fieldName, value) => {
    setLoginInfo({ ...loginInfo, [fieldName]: value });
  };

  // loggin in...
  const handleSubmit = async () =>{
    try{
      // login through api
      const res = await loginUser(loginInfo)
      
      // taking out json response
      const data = await res.json()

      if (res.ok && res.status == 201) {
        // async storing
        await AsyncStorage.setItem('user', JSON.stringify(data.response.user));
        await AsyncStorage.setItem('jwtoken', data.response.token)
        
        // setting global variables
        setUser(data.response.user)
        setJwtoken(data.response.token)
        
        console.log(data?.msg,'Login Successfull!');
      }
      else {
        throw new Error(data?.msg || 'Something went wrong!')
      }
    }
    catch(e){
      Alert.alert("Error :", e.message)
    }
  }

  //google sign-in
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wraper}>
        <View
          style={{
            marginBottom: 75,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#241D20',
              justifyContent: 'center',
              marginTop: 100,
              fontSize: 30,
              fontWeight: 600,
            }}>
            Hello Again!
          </Text>

          <Text
            style={{
              color: '#241D20',
              alignItems: 'center',

              fontSize: 24,
              fontWeight: 500,
            }}>
            Welcome back you've
          </Text>
          <Text
            style={{
              color: '#241D20',
              alignItems: 'center',

              fontSize: 24,
              fontWeight: 500,
            }}>
            been missed{' '}
            <Text style={{ color: '#dc3545', fontWeight: 500 }}> TRG</Text>
          </Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Phone number / Email"
            placeholderTextColor={'#241D20'}
            cursorColor={colors.primary}
            allowFontScaling
            value={loginInfo.phoneNoOrEmail}
            onChangeText={(text)=>{handleChange('phoneNoOrEmail', text)}}
          />
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'#241D20'}
            cursorColor={'#dc3545'}
            maxLength={16}
            value={loginInfo.password}
            onChangeText={(text)=>{handleChange('password', text)}}
          />
        </View>
        <TouchableOpacity>
          <Text
            style={{
              color: '#A32734',
              textAlign: 'right',
              marginRight: 35,
              fontSize: 12,
              marginTop: 10,
              marginBottom: 20,
              fontWeight: 500,
            }}>
            Forgot Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            backgroundColor: '#dc3545',
            margin: 12,
            height: 50,
            borderRadius: 10,
            padding: 10,
            marginHorizontal: 30,
          }}>
          <Text
            style={{
              color: '#eee',
              textAlign: 'center',
              justifyContent: 'center',
              fontSize: 18,
              fontWeight: 500,
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#462530',
            textAlign: 'center',
            marginVertical: 20,
            fontSize: 12,
          }}>
          or continue with
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginVertical: 30,
          }}>
          <TouchableOpacity
            style={{
              borderColor: '#dc3545',
              borderWidth: 2,
              borderRadius: 10,
              padding: 8,
              justifyContent: 'center',
            }}  onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
            <GoogleSVG height={30} width={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: '#dc3545',
              borderWidth: 2,
              borderRadius: 10,
              padding: 8,
              justifyContent: 'center',
            }}>
            <AppleSVG height={35} width={35} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ color: '#462530' }}>Not a member? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
            <Text style={{ color: '#A32734', fontWeight: 500 }}>Signup now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wraper: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dc3545',
    margin: 12,
    height: 50,
    borderRadius: 10,
    padding: 10,
    color: '#241D20',
    marginHorizontal: 30,
  },
});
