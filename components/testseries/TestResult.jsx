import {ScrollView, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import Timer from '../courses/template/Timer';

export default function TestDetail() {
  const navigation = useNavigation();
  const currentDate =  new Date().toDateString();
  const [correctAns, setCorrectAns] = useState(false);
  const translateY = useSharedValue(500); // Initial position off the screen

  // Animation to move the component from bottom to top
  translateY.value = withTiming(0, {
    duration: 500,
    easing: Easing.out(Easing.exp),
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <ScrollView>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#595959',
              textAlign: 'center',
            }}>
           {currentDate}
          </Text>
          
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: '700',
              color: '#595959',
              textAlign: 'center',
            }}>
            Class: 12
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: '700',
              color: '#595959',
              textAlign: 'center',
            }}>
            Subject: Maths
          </Text>
          <View
            style={{
              marginTop: 30,
              width: '100%',
              backgroundColor: '#595959',
              height: 1.5,
              opacity: 0.3,
            }}
          />

          <View>
            <Text style={{color: '#000', fontSize: 16, marginTop: 20}}>
              Maximum Marks :{' '}
              <Text
                style={{
                  color: 'green',
                  fontWeight: '700',
                  fontSize: 18,
                }}>
                10
              </Text>
            </Text>
            <Text style={{color: '#000', fontSize: 16}}>
              Obtained Marks :{' '}
              <Text
                style={{
                  color: 'green',
                  fontWeight: '700',
                  fontSize: 18,
                }}>
                8
              </Text>
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginTop: 30,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={[
                  styles.answers,
                  {backgroundColor: 'green', width: 30, height: 30},
                ]}>
                0
              </Text>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#595959'}}>
                {'  '} : Correct Answer
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  styles.answers,
                  {backgroundColor: 'red', width: 30, height: 30},
                ]}>
                0
              </Text>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#595959'}}>
                {'  '} : Wrong Answer
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              width: '100%',
              backgroundColor: '#595959',
              height: 1.5,
              opacity: 0.3,
            }}
          />
        </View>

        <View style={styles.answerContainer}>
          <Text
            style={[
              styles.answers,
              {
                backgroundColor: correctAns ? 'green' : 'red',
              },
            ]}>
            1
          </Text>
          <Text
            style={[
              styles.answers,
              {
                backgroundColor: correctAns ? 'green' : 'red',
              },
            ]}>
            2
          </Text>
          <Text
            style={[
              styles.answers,
              {
                backgroundColor: correctAns ? 'green' : 'red',
              },
            ]}>
            3
          </Text>
          <Text
            style={[
              styles.answers,
              {
                backgroundColor: correctAns ? 'green' : 'red',
              },
            ]}>
            4
          </Text>
          <Text
            style={[
              styles.answers,
              {
                backgroundColor: correctAns ? 'green' : 'red',
              },
            ]}>
            5
          </Text>
          <Text
            style={[
              styles.answers,
              {
                backgroundColor: correctAns ? 'green' : 'red',
              },
            ]}>
            6
          </Text>
          <Text
            style={[
              styles.answers,
              {
                backgroundColor: correctAns ? 'green' : 'red',
              },
            ]}>
            7
          </Text>
          <Text
            style={[
              styles.answers,
              {
                backgroundColor: correctAns ? 'green' : 'red',
              },
            ]}>
            8
          </Text>
          <Text
            style={[
              styles.answers,
              {
                backgroundColor: correctAns ? 'green' : 'red',
              },
            ]}>
            9
          </Text>
          <Text
            style={[
              styles.answers,
              {
                backgroundColor: correctAns ? 'green' : 'red',
              },
            ]}>
            10
          </Text>
        </View>
        <TouchableOpacity
              style={styles.btn}
              onPress={() => {navigation.navigate('TestSeries')}}>
              <Text style={{fontSize:18,color:'#fafafafa'}}>Go to TestSeries</Text>
            </TouchableOpacity>
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  answerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 30,
    gap: 30,
  },
  answers: {
    width: 50,
    height: 50,
    color: '#fff',
    borderRadius: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
  },
  btn: {
    backgroundColor: '#dc3545',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3,
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    marginTop: 80,
  },
});
