import React from 'react'
import LottieView from 'lottie-react-native';

const Splash = () => {
  return (
    <>
      <LottieView style={{ flex: 1 }} source={require('../assets/splash.json')} autoPlay loop />
    </>
  )
}

export default Splash