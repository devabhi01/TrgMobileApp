import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const LoginSignup = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{
              height: 400,
              width: 400,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
            source={require('../assets/img/OnboardLogin.jpg')}
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
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Home_tab')}
            style={{
              width: 100,
              backgroundColor: '#dc3545',
              borderRadius: 10,
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <Text
              style={{
                color: '#eee',
                fontWeight: 500,
              }}>
              Later
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginSignup;
