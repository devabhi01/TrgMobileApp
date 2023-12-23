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
import VideoPlayer from './courses/template/VideoPlayer';

const {width, height} = Dimensions.get('screen');

const Videos = () => {

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
            flex:1,
            gap:20,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          
          <VideoPlayer videoId={'2Vv-BfVoq4g'} />
          <VideoPlayer videoId={'2Vv-BfVoq4g'} />
          <VideoPlayer videoId={'2Vv-BfVoq4g'} />
          <VideoPlayer videoId={'2Vv-BfVoq4g'} />
          <VideoPlayer videoId={'2Vv-BfVoq4g'} />
          <VideoPlayer videoId={'2Vv-BfVoq4g'} />
          <VideoPlayer videoId={'2Vv-BfVoq4g'} />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Videos;

const styles = StyleSheet.create({});
