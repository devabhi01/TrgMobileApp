import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useUserContext } from '../utils/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const slides = [
  {
    key: 1,
    title: 'Quick Self-Assessment',
    text: 'Benefit from a test series for swift self-evaluation and reinforcement of learning.',
    image: require('../assets/onboardScreen/onBoard2.jpg'),
    emoji: require('../assets/onboardScreen/brain.png'),
  },
  {
    key: 2,
    title: 'Updated Study Materials',
    text: 'Access simplified and current notes, solutions, and other essential study resources.',
    image: require('../assets/onboardScreen/onBoard1.jpg'),
    emoji: require('../assets/onboardScreen/emoticon.png'),
  },
  {
    key: 3,
    title: 'Interective Video Classes',
    text: 'Engage with video classes for esy understanding and conceptual clarity.',
    image: require('../assets/onboardScreen/onBoard3.jpg'),
    emoji: require('../assets/onboardScreen/smiling.png'),
  },
];
export default function OnBoardingScreen() {
  const {isOldUser, setIsOldUser} = useUserContext();

  const getStarted = async () =>{
    try {
      setIsOldUser(true)
      await AsyncStorage.setItem('isOldUser',JSON.stringify(true));
    } catch (error) {
      console.log(error)
    }
  }

  const nextBtn = label => {
    return (
      <View>
        <Text
          style={{
            color: '#dc3545',
            paddingHorizontal: 10,
          }}>
          {label}
        </Text>
      </View>
    );
  };
  const skipBtn = label => {
    return (
      <View>
        <Text style={{ color: '#dc3545', paddingHorizontal: 10 }}>{label}</Text>
      </View>
    );
  };
  const getStartedBtn = label => {
    return (
      <View>
        <Text
          onPress={getStarted}
          style={{
            color: '#dc3545',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderColor: '#023e8a',
            borderWidth: 1,
            borderRadius: 10,
          }}>
          {label}
        </Text>
      </View>
    );
  };

  if (!isOldUser) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View style={styles.slide}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={{ height: 250, marginBottom: 50 }}
              />
              <View style={styles.innterCont}>
                <View style={styles.innerStrip}>
                  <Icon
                    name="square"
                    size={16}
                    color="#fff"
                    style={{ marginLeft: 10 }}
                  />
                  <Icon
                    name="circle"
                    size={16}
                    color="#fff"
                    style={{ marginLeft: 5 }}
                  />
                  <Icon
                    name="triangle"
                    size={16}
                    color="#fff"
                    style={{ marginLeft: 5 }}
                  />
                </View>
                <Image style={styles.emoji} source={item.emoji} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.text}</Text>
              </View>
            </View>
          );
        }}
        showSkipButton
        activeDotStyle={{ backgroundColor: '#dc3545', width: 20 }}
        renderNextButton={() => nextBtn('Next')}
        renderSkipButton={() => skipBtn('Skip')}
        renderDoneButton={() => getStartedBtn('Get Started')}
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#023e8a',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  desc: {
    fontSize: 16,
    color: '#0077b6',
    textAlign: 'center',
  },
  innterCont: {
    borderWidth: 2,
    borderColor: '#dc3545',
    position: 'relative',
    justifyContent: 'center',
    borderRadius: 15,
    alignItems: 'center',
    width: 350,
    paddingBottom: 50,
  },
  emoji: {
    position: 'absolute',
    top: -40,
    right: 20,
    width: 60,
    height: 60,
  },
  innerStrip: {
    backgroundColor: '#dc3545',
    position: 'absolute',
    width: 348,
    height: 30,
    top: 0,
    right: 0,
    alignItems: 'center',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    flexDirection: 'row',
  },
});
