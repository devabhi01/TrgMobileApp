import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {useUserContext} from '../utils/userContext';
import {verifyOTP} from '../utils/APIs';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OtpVerification = () => {
  // taking user data
  const {user, setUser} = useUserContext();

  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [f3, setF3] = useState('');
  const [f4, setF4] = useState('');

  const [count, setCount] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const ValidateOTP = async () => {
    const email = user.email;
    let enteredOTP = f1 + f2 + f3 + f4;
    try {
      const res = await verifyOTP({email, verifyCode: enteredOTP});
      const data = await res.json();

      if (res.ok) {
        // async storing
        await AsyncStorage.setItem('user', JSON.stringify(data.response));

        // setting global variables
        setUser(data.response);

        Alert.alert('Congrats!', 'Email Verified...');
      } else {
        throw new Error(data?.msg || 'Something went wrong!');
      }
    } catch (error) {
      Alert.alert('Error : ', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wraper}>
          <View style={styles.image}>
            <Image
              style={{
                height: 350,
                width: 350,
                alignSelf: 'center',
              }}
              source={require('../assets/img/Otp-verify.png')}
            />
          </View>
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={{color: '#444444', textAlign: 'center', marginTop: 20}}>
            OTP sent to {user.email}
          </Text>
          <View style={styles.otpview}>
            <TextInput
              ref={et1}
              style={[
                styles.inputview,
                {borderColor: f1.length >= 1 ? '#dc3545' : '#444444'},
              ]}
              keyboardType="number-pad"
              maxLength={1}
              value={f1}
              onChangeText={txt => {
                setF1(txt);
                if (txt.length >= 1) {
                  et2.current.focus();
                } else if (txt.length < 1) {
                  et1.current.focus();
                }
              }}
            />
            <TextInput
              ref={et2}
              style={[
                styles.inputview,
                {borderColor: f2.length >= 1 ? '#dc3545' : '#444444'},
              ]}
              keyboardType="number-pad"
              maxLength={1}
              value={f2}
              onChangeText={txt => {
                setF2(txt);
                if (txt.length >= 1) {
                  et3.current.focus();
                } else if (txt.length < 1) {
                  et1.current.focus();
                }
              }}
            />
            <TextInput
              ref={et3}
              style={[
                styles.inputview,
                {borderColor: f3.length >= 1 ? '#dc3545' : '#444444'},
              ]}
              keyboardType="number-pad"
              maxLength={1}
              value={f3}
              onChangeText={txt => {
                setF3(txt);
                if (txt.length >= 1) {
                  et4.current.focus();
                } else if (txt.length < 1) {
                  et2.current.focus();
                }
              }}
            />
            <TextInput
              ref={et4}
              style={[
                styles.inputview,
                {borderColor: f4.length >= 1 ? '#dc3545' : '#444444'},
              ]}
              keyboardType="number-pad"
              maxLength={1}
              value={f4}
              onChangeText={txt => {
                setF4(txt);
                if (txt.length >= 1) {
                  et4.current.focus();
                } else if (txt.length < 1) {
                  et3.current.focus();
                }
              }}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              disabled={count == 0 ? false : true}
              onPress={() => {
                setCount(60);
              }}>
              <Text
                style={[
                  styles.resendview,
                  {color: count == 0 ? '#dc3545' : '#444444'},
                ]}>
                Resend
              </Text>
            </TouchableOpacity>
            {count !== 0 ? (
              <Text style={{color: '#0a0a0a', marginLeft: 10, fontSize: 16}}>
                in {count} seconds
              </Text>
            ) : (
              ''
            )}
          </View>
          <TouchableOpacity
            style={[
              styles.submitbtn,
              {
                backgroundColor:
                  f1 !== '' && f2 !== '' && f3 !== '' && f4 !== ''
                    ? '#dc3545'
                    : '#666666',
              },
            ]}
            disabled={
              f1 !== '' && f2 !== '' && f3 !== '' && f4 !== '' ? false : true
            }
            onPress={() => ValidateOTP()}>
            <Text
              style={{
                color: '#eee',
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: 18,
                fontWeight: 500,
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wraper: {
    flex: 1,
  },
  image: {
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#dc3545',
    marginTop: 40,
    textAlign: 'center',
  },
  otpview: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '80',
    marginVertical: 50,
  },
  inputview: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#0a0a0a',
  },
  submitbtn: {
    backgroundColor: '#dc3545',
    marginVertical: 30,
    height: 50,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 30,
  },
  resendview: {
    textAlign: 'center',
    color: '#444444',
    fontSize: 16,
  },
});
