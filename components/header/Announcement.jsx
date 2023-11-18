import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {getDate} from '../../constants';

const Announcement = () => {
  const [currentdate, setDate] = useState(getDate());
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1, margin: 20}}>
          <View
            style={{
              backgroundColor: '#d7d7d7',
              padding: 8,
              borderRadius: 8,
              borderWidth: 0.5,
              borderColor: '#dc3545',
            }}>
            <Text style={styles.title}>Doubt</Text>
            <Text style={styles.desc}>
              Your doubt has been solved and mailed to your registerd mail.
            </Text>
            <Text style={styles.date}>{currentdate}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Announcement;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  desc: {
    fontSize: 16,
    color: '#000',
  },
  date: {
    fontSize: 14,
    color: '#000',
    alignSelf: 'flex-end',
  },
});
