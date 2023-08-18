import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import React, {useState} from 'react';

import BackgroundImage from '../components/assets/img/bg_redish.jpg';
import GoogleSVG from '../components/assets/img/google.svg';
import AppleSVG from '../components/assets/img/apple.svg';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
            <Text style={{color: '#dc3545', fontWeight: 500}}> TRG</Text>
          </Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Username / Email"
            placeholderTextColor={'#241D20'}
            cursorColor={'#dc3545'}
            allowFontScaling
          />
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'#241D20'}
            cursorColor={'#dc3545'}
            maxLength={16}
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
            }}>
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
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{color: '#462530'}}>Not a member? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
            <Text style={{color: '#A32734', fontWeight: 500}}>Signup now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

    // <View style={{marginTop:200, marginHorizontal:20}}>
    //   <Text style={{fontSize:25, fontWeight:500, marginBottom:5}} >Welcome back!</Text>

    //   <TextInput
    //   label="Email"
    //   value={email}
    //   onChangeText={email => setEmail(email)}
    //   />
    //   <View style={{marginBottom:20}} />

    //   <TextInput
    //   label="Password"
    //   value={password}
    //   onChangeText={password => setPassword(password)}
    //   secureTextEntry
    //   />
    //   <View style={{marginBottom:20}} />

    //   <Button style={{backgroundColor:'white'}} >Login</Button>

    // </View>
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
