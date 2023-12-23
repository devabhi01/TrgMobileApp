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
  const videoWidth = deviceWidth - 40; // Adjust as per your layout
  const videoHeight = (9 / 16) * videoWidth; // Assuming 16:9 aspect ratio

  return (
    <YoutubePlayer
      height={videoHeight}
      width={videoWidth}
      play={playing}
      videoId={videoId}
      webViewStyle={{ opacity: 0.99 }} // Adjust the opacity of the webview
    />
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    // Define any other styles for the container view if needed
  },
});
