import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export default function Result() {
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
          <Text style={{fontSize: 18, fontWeight: '700', color: '#000'}}>
            Subject:{' '}
          </Text>
          <Text style={{fontSize: 18, fontWeight: '700', color: '#000'}}>
            Class:{' '}
          </Text>
        </View>
        <View>
          <Text style={{color: '#000', fontSize: 16}}>
            Maximum Marks :{' '}
            <Text style={{fontSize: 18, fontWeight: '700'}}>10</Text>
          </Text>
          <Text style={{color: '#000', fontSize: 16}}>
            Obtained Marks :{' '}
            <Text style={{color: 'green', fontWeight: '700', fontSize: 18}}>
              8
            </Text>
          </Text>
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
    marginTop: 10,
    gap: 10,
  },
  answers: {
    width: 40,
    height: 40,
    color: '#fff',
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
  },
});
