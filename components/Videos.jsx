import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Videos = () => {
  return (
    <SafeAreaView style={{flex: 1, margin: 20}}>
      <ScrollView>
        <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0a0a0a'}}>
            Featured Video
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Videos;

const styles = StyleSheet.create({});
