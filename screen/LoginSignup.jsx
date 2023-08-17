import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Rect} from 'react-native-svg';
import LoginSVG from '../components/assets/img/LoginSignup.svg';

const LoginSignup = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <View style={{alignItems: 'center'}}>
          <LoginSVG width={400} height={400} borderRadius={20} />
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
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
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
      </View>
    </SafeAreaView>
  );
};

export default LoginSignup;
