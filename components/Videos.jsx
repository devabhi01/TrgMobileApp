import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import VideoPlayer from './courses/template/VideoPlayer';
import { fetchVideos } from '../utils/APIs';
import { ActivityIndicator } from 'react-native-paper';

const Videos = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [videos, setVideos] = useState([])

  // getting all videos
  useEffect(() => {
    const fetchAllVideos = async () => {
      try {
        setIsLoading(true)
        const res = await fetchVideos()
        const videos = await res.json()
        // console.log(videos[0].videoId)
        setVideos(videos)
        setIsLoading(false)
      } catch (error) {
        Alert.alert("Something went wrong!", "You might be offline...")
      }
    }
    fetchAllVideos()
  }, [])


  return (
    <SafeAreaView style={{ flex: 1, margin: 20 }}>
      <ScrollView>
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#0a0a0a' }}>
            Featured Video
          </Text>
        </View>
        {isLoading ? <ActivityIndicator style={{ marginTop: 100 }} /> :
          videos.length === 0 ? <>{/* In case of no videos */}
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginVertical: 100 }}>
              <Text style={{ color: '#0a0a0a' }}>No Videos Available</Text>
            </View></> :
            videos.map((video, index) => {
              return <View
                key={index}
                style={{
                  flex: 1,
                  gap: 20,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginVertical:20
                }}>
                <VideoPlayer videoId={video?.videoId} />
              </View>
            })
        }


      </ScrollView>
    </SafeAreaView>
  );
};

export default Videos;

const styles = StyleSheet.create({});
