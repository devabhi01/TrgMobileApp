import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const { width, height } = Dimensions.get('screen');
const VideoPlayer = ({ videoId }) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  const deviceWidth = width;
  const videoWidth = deviceWidth - 40; 
  const videoHeight = (9 / 16) * videoWidth; 

  return (
    <YoutubePlayer
      height={videoHeight}
      width={videoWidth}
      play={false}
      videoId={videoId}
      webViewStyle={{ opacity: 0.99 }} 
    />
  );
};

export default VideoPlayer;

