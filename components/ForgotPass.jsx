import React, {useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {sentOtp, verifyOTP} from '../utils/APIs';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');
const ForgotPass = () => {
  const navigation = useNavigation();
  const [animationStarted, setAnimationStarted] = useState(false);

  const [showVerifySection, setShowVerifySection] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const handleButtonPress = async () => {
    setAnimationStarted(true); // Update state to start animation
    // checking password match
    if (password !== cpassword) {
      return Alert.alert("passwords doens't match");
    }
    try {
      //sending otp
      const res = await sentOtp({email});
      if (res.ok) {
        Alert.alert(`OTP send to ${email}`);
        setShowVerifySection(true);
        setAnimationStarted(true);
      }
    } catch (error) {
      console.log(error);
      return Alert.alert('Something went wrong...');
    }
  };

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
    let verifyCode = f1 + f2 + f3 + f4;
    try {
      const res = await verifyOTP({email, verifyCode, password});
      const data = await res.json();
      console.log(res);
      if (res.ok) {
        Alert.alert('Password changed Successfully!');
        navigation.navigate('Login');
      } else {
        if (res.status === 401) return Alert.alert(data.msg);
      }
    } catch (error) {
      console.log(error);
      return Alert.alert('Something went wrong...');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <LottieView
            source={require('../assets/forgotPass.json')}
            autoPlay
            loop
            style={styles.lottie}
          />
          <Text
            style={{
              fontSize: 25,
              color: '#dc3545',
              textAlign: 'center',
              fontWeight: 600,
              marginBottom: 15,
            }}>
            Forgot Password
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Registered Email"
            placeholderTextColor={'#241D20'}
            cursorColor={'#dc3545'}
            keyboardType="default"
            onChangeText={text => {
              setEmail(text);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            placeholderTextColor={'#241D20'}
            secureTextEntry={true}
            cursorColor={'#dc3545'}
            keyboardType="default"
            onChangeText={text => {
              setPassword(text);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            placeholderTextColor={'#241D20'}
            secureTextEntry={true}
            cursorColor={'#dc3545'}
            keyboardType="default"
            onChangeText={text => {
              setCpassword(text);
            }}
          />
          <TouchableOpacity
            style={[styles.btn, {flexDirection: 'row'}]}
            onPress={handleButtonPress}>
            <Text style={{color: '#fff'}}>Send OTP</Text>
            {animationStarted && (
              <LottieView
                source={require('../assets/msgSent.json')}
                autoPlay
                loop={false}
                style={{width: 50, height: 50, marginLeft: 10}}
              />
            )}
          </TouchableOpacity>
          {showVerifySection && (
            <>
              <Text
                style={{
                  fontSize: 18,
                  color: '#dc3545',
                  textAlign: 'center',
                  fontWeight: 600,
                  marginVertical: 15,
                }}>
                Verify Otp
              </Text>
              <View>
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
                    <Text
                      style={{color: '#0a0a0a', marginLeft: 10, fontSize: 16}}>
                      in {count} seconds
                    </Text>
                  ) : (
                    ''
                  )}
                </View>
                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor:
                        f1 !== '' && f2 !== '' && f3 !== '' && f4 !== ''
                          ? '#dc3545'
                          : '#666666',
                      marginBottom: 50,
                    },
                  ]}
                  disabled={
                    f1 !== '' && f2 !== '' && f3 !== '' && f4 !== ''
                      ? false
                      : true
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
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dc3545',
    marginVertical: 12,
    height: 50,
    borderRadius: 10,
    padding: 8,
    width: width * 0.9,
    color: '#241D20',
    marginHorizontal: 30,
  },
  btn: {
    backgroundColor: '#dc3545',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    marginVertical: 12,
  },
  otpview: {
    width: width * 0.9,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '80',
    marginVertical: 20,
    gap: 15,
  },
  inputview: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#0a0a0a',
  },

  resendview: {
    textAlign: 'center',
    color: '#444444',
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ForgotPass;
