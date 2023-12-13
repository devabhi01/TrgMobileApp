import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import YoutubePlayer from "react-native-youtube-iframe";


const Videos = () => {
  return (
    <SafeAreaView style={{flex: 1, margin: 20}}>
      <ScrollView>
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0a0a0a'}}>
            Featured Video
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Videos;

const styles = StyleSheet.create({});
