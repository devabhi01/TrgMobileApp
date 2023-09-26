import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Alert
} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {RadioButton} from 'react-native-paper';

import GoogleSVG from '../assets/img/google.svg';
import AppleSVG from '../assets/img/apple.svg';

const SignUpScreen = props => {

  const [userInfo, setUserInfo] = useState({
    name:"",
    email:"",
    phoneNo:"",
    gender:"male",
    password:"",
    cpassword:"",
    dob:new Date(),
    language:"English"
  })

  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');

  const handleChange = (fieldName, value) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };
  

  const handleSubmit = async () =>{
    try {
      if (!userInfo.name || !userInfo.email || !userInfo.phoneNo || !userInfo.password || !userInfo.gender || !userInfo.dob) {
        throw new Error('One or more fields required')
      }

        const res = await fetch('http://172.20.10.2:1222/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(userInfo),
      });


      if (res.ok) {
        console.log('Form data submitted successfully');
        props.navigation.navigate('Login')
      } else {
        throw new Error(res?.msg || 'something went wrong')
      }
    } catch (error) {
      Alert.alert("Error :", error.message)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
              onChangeText={(text)=>{handleChange('name', text)}}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={'#241D20'}
              cursorColor={'#dc3545'}
              keyboardType="email-address"
              value={userInfo.email}
              onChangeText={(text)=>{handleChange('email', text)}}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor={'#241D20'}
              cursorColor={'#dc3545'}
              keyboardType="number-pad"
              value={String(userInfo.phoneNo)}
              onChangeText={(text)=>{handleChange('phoneNo', text)}}
            />

            <View
              style={{
                marginHorizontal: 30,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#dc3445'
              }}>
              <Text
                style={{
                  color: '#dc3545',
                  fontSize: 15,
                  fontWeight: 500,
                  textAlign: 'center',
                  paddingTop: 10,
                }}>
                Select Gender
              </Text>
              <RadioButton.Group
                value={userInfo.gender}>
                <RadioButton.Item
                  label="Male"
                  value="male"
                  color={'#dc3545'}
                  labelStyle={{color: '#241D20'}}
                  // onPress={setUserInfo({...userInfo, gender:"male"})}
                />
                <RadioButton.Item
                  label="Female"
                  value="female"
                  color="#FA78C2"
                  labelStyle={{color: '#241D20'}}
                  // onPress={setUserInfo({...userInfo, gender:"female"})}
                />
                <RadioButton.Item
                  label="Other"
                  value="other"
                  labelStyle={{color: '#241D20'}}
                  // onPress={setUserInfo({...userInfo, gender:"femail"})}
                />
              </RadioButton.Group>
            </View>
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Password"
              placeholderTextColor={'#241D20'}
              cursorColor={'#dc3545'}
              maxLength={16}
              value={userInfo.password}
              onChangeText={(text)=>{handleChange('password', text)}}
            />

            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Confirm Password"
              placeholderTextColor={'#241D20'}
              cursorColor={'#dc3545'}
              maxLength={16}
              value={userInfo.cpassword}
              onChangeText={(text)=>{handleChange('cpassword', text)}}
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
              onPress={handleSubmit}
            >
            <Text
              style={{
                color: '#eee',
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: 18,
                fontWeight: 500,
              }}>
              Signup
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
    // <View style={{marginTop:200, marginHorizontal:20}}>
    //   <Text style={{fontSize:25, fontWeight:500, marginBottom:5}} >Create Your Account</Text>
    //   <TextInput
    //   label="Name"
    //   value={name}
    //   onChangeText={name => setName(name)}
    //   />
    //   <View style={{marginBottom:20}} />

    //   <TextInput
    //   label="Number"
    //   value={phoneNo}
    //   onChangeText={phoneNo => setPhoneNo(phoneNo)}
    //   />
    //   <View style={{marginBottom:20}} />

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

    //   <Button style={{backgroundColor:'white'}} >Submit</Button>

    // </View>
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
