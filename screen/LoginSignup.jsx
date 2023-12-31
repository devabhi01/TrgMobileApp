import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const {width} = Dimensions.get('screen');

const LoginSignup = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View>
          <View style={{alignItems: 'center',marginTop:20}}>
            <LottieView
              source={require('../assets/loginsignup.json')}
              autoPlay
              loop
              style={{height: width, width: width * 0.9}}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              margin: 50,
            }}>
            <Text style={{fontSize: 25, fontWeight: 800, color: '#dc3545'}}>
              Your Betterment
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 800,
                color: '#dc3545',
              }}>
              Our Commitment
            </Text>
            <Text style={{fontSize: 20, paddingVertical: 20, color: '#dc3500'}}>
              Join us to pace your Career
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 50,
              
            }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Login');
              }}
              style={{
                backgroundColor: '#dc3545',
                paddingHorizontal: 50,
                paddingVertical: 10,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 24, color: '#eee', fontWeight: 600}}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}
              style={{
                backgroundColor: '#dc3545',
                paddingHorizontal: 50,
                paddingVertical: 10,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 24, color: '#eee', fontWeight: 600}}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginRight: 30,
            }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginSignup;
