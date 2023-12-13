import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React, {useState, useCallback, useRef} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

const {width, height} = Dimensions.get('screen');

const Videos = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  const deviceWidth = width;
  const videoWidth = deviceWidth - 40; // Subtracting padding/margin

  // Assuming you want to maintain a 16:9 aspect ratio
  const videoHeight = (9 / 16) * videoWidth;
  return (
    <SafeAreaView style={{flex: 1, margin: 20}}>
      <ScrollView>
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0a0a0a'}}>
            Featured Video
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
          }}>
          <YoutubePlayer
            height={videoHeight}
            width={videoWidth}
            play={playing}
            videoId={'W1CyPL2KJTc'}
            
          />
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Videos;

const styles = StyleSheet.create({});
