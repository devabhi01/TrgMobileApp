import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { colors } from '../constants';
import { useUserContext } from '../utils/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser } from '../utils/APIs';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = props => {
  //taking function to set global variables
  const { setUser, setJwtoken } = useUserContext();

  // login info
  const [loginInfo, setLoginInfo] = useState({
    phoneNoOrEmail: '',
    password: '',
  });

  // handling input change
  const handleChange = (fieldName, value) => {
    setLoginInfo({ ...loginInfo, [fieldName]: value });
  };

  // loggin in...
  const handleSubmit = async () => {
    try {
      // login through api
      const res = await loginUser(loginInfo);

      // taking out json response
      const data = await res.json();

      if (res.ok && res.status == 201) {
        // async storing
        await AsyncStorage.setItem('user', JSON.stringify(data.response.user));
        await AsyncStorage.setItem('jwtoken', data.response.token);

        // setting global variables
        setUser(data.response.user);
        setJwtoken(data.response.token);

        console.log(data?.msg, 'Login Successfull!');
      } else {
        throw new Error(data?.msg || 'Something went wrong!');
      }
    } catch (e) {
      Alert.alert('Error :', e.message);
    }
  };

  const [isClicked, setIsClicked] = useState(false);
  const togglePassword = () => {
    setIsClicked(!isClicked);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
              been missed by
              <Text style={{ color: '#dc3545', fontWeight: 500 }}> TRG</Text>
            </Text>
          </View>
          <View>
            <View style={styles.input}>
              <TextInput
                style={styles.inputText}
                placeholder="Phone number / Email"
                inputMode={'email' || 'numeric'}
                placeholderTextColor={'#241D20'}
                cursorColor={colors.primary}
                allowFontScaling
                value={loginInfo.phoneNoOrEmail}
                onChangeText={text => {
                  handleChange('phoneNoOrEmail', text);
                }}
              />
            </View>
            <View
              style={[
                styles.input,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              ]}>
              <TextInput
                style={styles.inputText}
                secureTextEntry={!isClicked} // Modify secureTextEntry based on isClicked state
                placeholder="Password"
                placeholderTextColor={'#241D20'}
                cursorColor={'#dc3545'}
                maxLength={16}
                value={loginInfo.password}
                onChangeText={text => {
                  handleChange('password', text);
                }}
              />
              <TouchableOpacity onPress={togglePassword}>
                <Icon
                  name={isClicked ? 'eye-off' : 'eye'}
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('forgot_password')}>
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
              marginHorizontal: 20,
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
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ color: '#462530' }}>Not a member? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text style={{ color: '#A32734', fontWeight: 500 }}>
                Signup now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    paddingBottom: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dc3545',
    margin: 12,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#241D20',
    marginHorizontal: 20,
  },
  inputText: {
    color: '#241D20',
  },
});
