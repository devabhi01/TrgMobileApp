import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getDate } from '../../constants';
import { fetchAnnouncements } from '../../utils/APIs';
import { ActivityIndicator } from 'react-native-paper';

const Announcement = () => {
  const [isLoading, setIsLoading] = useState(false);

  //fetching announcements
  const [announcements, setAnnouncements] = useState([])
  useEffect(() => {
    const getAnnouncements = async () => {
      try {
        setIsLoading(true);
        const res = await fetchAnnouncements()
        const announceData = await res.json();
        setAnnouncements(announceData);
        // console.log(announcements)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getAnnouncements();
  }, [])

  // announcement Item component
  const renderItem = ({ item }) => (
    <View style={{ flex: 1, margin: 20, marginBottom: 0 }}>
      <View
        style={{
          backgroundColor: '#d7d7d7',
          padding: 8,
          borderRadius: 8,
          borderWidth: 0.5,
          borderColor: '#dc3545',
        }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <Text style={styles.date}>{getDate(item.date)}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1,marginBottom:20 }}>
        {isLoading ? <ActivityIndicator style={{ paddingVertical: 100, justifyContent: "center", alignItems: 'center' }} /> :
          <FlatList
            data={announcements}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        }
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
