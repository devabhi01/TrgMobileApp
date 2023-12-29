import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';

import React, {useState, useEffect} from 'react';
import DatePicker from 'react-native-date-picker';

import {useUserContext} from '../utils/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {registerUser, sentCodeToMail} from '../utils/APIs';
import CustomDropdown from '../components/courses/template/CustomDropdown';
import {windowWidth} from '../utils/Dimensions';

const SignUpScreen = props => {
  // using user context to set set data
  const {setUser, setJwtoken} = useUserContext();

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phoneNo: '',
    gender: 'male',
    password: '',
    cpassword: '',
    dob: new Date(),
    language: 'English',
  });

  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');

  // handling input change
  const handleChange = (fieldName, value) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };

  // submiting data and setting global states (context)
  const handleNext = async props => {
    try {
      // submiting info through api
      const res = await registerUser(userInfo);

      const data = await res.json();

      if (res.ok && res.status == 201) {
        // async storing
        await AsyncStorage.setItem('user', JSON.stringify(data.response.user));
        await AsyncStorage.setItem('jwtoken', data.response.token);

        // setting global variables
        setUser(data.response.user);
        setJwtoken(data.response.token);
        props.navigation.navigate('Otp-verify');
      } else {
        throw new Error(data?.msg || 'Something went wrong!');
      }
    } catch (error) {
      Alert.alert('Error :', error.message);
    }
  };

  const [selectGender, setSelectGender] = useState(null);
  const handleGenderSelect = selectGender => {
    setSelectGender(selectGender);
  };

  const genderData = [
    {
      gender: 'Male',
    },
    {
      gender: 'Female',
    },
    {
      gender: 'Other',
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={true} style={{width: '100%'}}>
        <View style={styles.wraper}>
          <View
            style={{
              marginBottom: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: 400,
                width: 400,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
              }}
              source={require('../assets/img/Signup.jpg')}
            />
          </View>
          <Text
            style={{
              fontSize: 25,
              color: '#dc3545',
              textAlign: 'center',
              fontWeight: 600,
              marginBottom: 30,
            }}>
            Create an account
          </Text>

          <View>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor={'#241D20'}
              cursorColor={'#dc3545'}
              keyboardType="default"
              value={userInfo.name}
              onChangeText={text => {
                handleChange('name', text);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={'#241D20'}
              cursorColor={'#dc3545'}
              keyboardType="email-address"
              value={userInfo.email}
              onChangeText={text => {
                handleChange('email', text);
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor={'#241D20'}
              cursorColor={'#dc3545'}
              keyboardType="number-pad"
              value={String(userInfo.phoneNo)}
              onChangeText={text => {
                handleChange('phoneNo', text);
              }}
            />
            <ScrollView horizontal={true} style={{width: '100%'}}>
              <View
                style={{
                  marginBottom: 10,
                  width: windowWidth - 60,
                  marginLeft: 30,
                }}>
                {/* <CustomDropdown
                  initialValue={genderData}
                  innerList="gender"
                  onSelect={handleGenderSelect}
                  borderColor={'#dc3545'}
                  borderWidth={1}
                  displayName={'Gender'}
                /> */}
              </View>
            </ScrollView>

            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Password"
              placeholderTextColor={'#241D20'}
              cursorColor={'#dc3545'}
              maxLength={16}
              value={userInfo.password}
              onChangeText={text => {
                handleChange('password', text);
              }}
            />

            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Confirm Password"
              placeholderTextColor={'#241D20'}
              cursorColor={'#dc3545'}
              maxLength={16}
              value={userInfo.cpassword}
              onChangeText={text => {
                handleChange('cpassword', text);
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: '#dc3545',
                marginVertical: 12,
                height: 50,
                borderRadius: 10,
                padding: 8,
                color: '#241D20',
                marginHorizontal: 30,
              }}>
              <TouchableOpacity
                onPress={() => setOpen(true)}
                style={{
                  justifyContent: 'center',
                  paddingRight: 200,
                }}>
                <Text style={{color: '#241D20'}}>{dobLabel}</Text>
              </TouchableOpacity>
            </View>
            <DatePicker
              modal
              open={open}
              date={userInfo.dob}
              mode={'date'}
              onConfirm={date => {
                setOpen(false);
                setDobLabel(date.toDateString());
                // setUserInfo({...userInfo, dob:date})
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#dc3545',
              marginVertical: 30,
              height: 50,
              borderRadius: 10,
              padding: 10,
              marginHorizontal: 30,
            }}
            onPress={() => {
              handleNext(props);
            }}>
            <Text
              style={{
                color: '#eee',
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: 18,
                fontWeight: 500,
              }}>
              Next
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 50,
            }}>
            <Text style={{color: '#462530'}}>Already have an account </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={{color: '#A32734', fontWeight: 500}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
    marginVertical: 12,
    height: 50,
    borderRadius: 10,
    padding: 8,
    color: '#241D20',
    marginHorizontal: 30,
  },
});
