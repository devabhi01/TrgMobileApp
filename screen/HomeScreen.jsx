import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  ActivityIndicator
} from 'react-native';
import { Searchbar, Avatar } from 'react-native-paper';

import { windowWidth } from '../utils/Dimensions';
import { colors } from '../constants';
import Carousel from 'react-native-reanimated-carousel';

// Images here
import ManSVG from '../assets/img/Man.svg';
import CbseSVG from '../assets/img/cbse.svg';
import trgIcon from '../assets/img/trgIcon.png';

// import {sliderData} from '../model/Data';
import BannerSlider from '../components/BannerSlider';
import { useUserContext } from '../utils/userContext';
import Geolocation from '@react-native-community/geolocation';
import Qotd from '../components/courses/template/Qotd';
import { fetchCarousel } from '../utils/APIs';

// Course details
const courses = [
  { name: 'cbse', screen: 'cbse', img: require('../assets/img/cbse.png') },
  { name: 'icse', screen: 'icse', img: require('../assets/img/icse.png') },
  { name: 'ssc', screen: 'ssc', img: require('../assets/img/ssc.png') },
  { name: 'cuet', screen: 'cuet', img: require('../assets/img/cuet.png') },
  { name: 'clat', screen: 'clat', img: require('../assets/img/clat.png') },
  { name: 'dsssb', screen: 'dsssb', img: require('../assets/img/dsssb.png') },
  { name: 'police', screen: 'police', img: require('../assets/img/police.png') },
  {
    name: 'others',
    screen: 'other_comp',
    img: require('../assets/img/other.png'),
  },
];

const HomeScreen = props => {

  // user context for fetching details
  const { setLocation } = useUserContext();
  //setting location
  Geolocation.getCurrentPosition(info => setLocation([info.coords.latitude, info.coords.longitude]));

  // loading status
  const [isCarouselLoading, setIsCarouselLoading] = useState(false);
  // search query
  const [searchQuery, setSearchQuery] = useState('');

  // filtered course state
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const onChangeSearch = query => {
    setSearchQuery(query);
    // Convert the query to lowercase for case-insensitive search
    const lowercaseQuery = query.toLowerCase();

    // Use Array.prototype.filter() to filter objects based on the query
    const filteredCourses = courses.filter(item => {
      // Check if any property of the item contains the query string (case-insensitive)
      return Object.values(item).some(
        value =>
          typeof value === 'string' &&
          value.toLowerCase().includes(lowercaseQuery),
      );
    });

    setFilteredCourses(filteredCourses);
  };

  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  // getting slider/carousel data
  const [sliderData, setSliderData] = useState([])
  useEffect(() => {
    const getSliderData = async () => {
      try {
        setIsCarouselLoading(true)
        const res = await fetchCarousel();
        const carousel = await res.json();
        setSliderData(carousel)
        setIsCarouselLoading(false)
      } catch (error) {
        console.log(error);
      }
    }

    getSliderData();

  }, [])


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.graylight }}>
      <ScrollView style={{ paddingVertical: 10 }}>
        <View style={styles.container}>
          {/* <View style={styles.topbar}>
            <View >
              <Image source={trgIcon} style={{width:60,height:50,}} resizeMode='contain' />
            </View>
            <View >
              <Text style={{color: '#eee', fontSize: 20, color: '#dc3545',}}>
                Hello
              </Text>
              <Text
                style={{
                  color: '#eee',
                  fontSize: 20,
                  fontWeight: 600,
                  color: '#dc3545',
                }}>
                {user.name}
              </Text>
            </View>
            <Text style={{color: '#eee', fontSize: 28, fontWeight: 600}}>
              TRG
            </Text>
          </View> */}
          <View style={{ marginTop: 10 }}>
            <Searchbar
              placeholder="Search"
              placeholderTextColor={'#241D20'}
              cursorColor={'#dc3545'}
              onChangeText={onChangeSearch}
              value={searchQuery}
              iconColor="#dc3545"
              style={{
                marginHorizontal: 20,
                borderRadius: 10,
                backgroundColor: '#f5f5f5',
              }}
              onTouchCancel={() => {
                setSearchQuery('');
              }}
            />
          </View>

          {/* <Text
            style={{
              color: '#dc3545',
              fontSize: 16,
              fontWeight: 700,
              marginHorizontal: 20,
              marginTop: 20,
              marginBottom: 10,
            }}>
            Carousal
          </Text> */}
          <View>
            <View
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {isCarouselLoading?<ActivityIndicator style={{paddingVertical: 90,justifyContent: 'center', alignItems:'center'}} />:<Carousel
                loop
                width={windowWidth - 40}
                height={windowWidth / 2}
                autoPlay={true}
                autoPlayInterval={5000}
                data={sliderData}
                renderItem={({ item, index }) => (
                  <View
                    key={index}
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={{uri:item.imgUrl}}
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                )}
              />}
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              display: 'flex',
              flexDirection: 'column',
            }}>
            <Text
              style={{
                color: '#dc3545',
                fontSize: 16,
                fontWeight: 700,
                marginHorizontal: 20,
              }}>
              Question of the Day
            </Text>
            <View style={{ marginHorizontal: 20, marginTop: 10 }}>
              <Qotd />
            </View>
          </View>

          <TouchableOpacity
            style={{
              width: '90%',
              height: 50,
              backgroundColor: '#dc3545',
              alignSelf: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              marginTop: 20,
              elevation: 3,
            }}
            onPress={() =>
              Linking.openURL(
                'https://www.therightguru.com/',
              )
            }>
            <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>
              Book Free Trial Class
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <Text
              style={{
                color: '#dc3545',
                fontSize: 16,
                fontWeight: 700,
                marginHorizontal: 20,
              }}>
              Explore Categories
            </Text>
          </View>

          <View
            style={{
              margin: 30,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              marginBottom: 50,
            }}>
            {filteredCourses.map((course, index) => {
              return (
                <TouchableOpacity
                  onPress={() => props.navigation.navigate(course.screen)}
                  style={styles.ex_categories}
                  key={index}>
                  <Image source={course.img} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbar: {
    flexDirection: 'row',
    borderRadius: 5,
    paddingBottom: 20,
    paddingTop: 10,

    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#dc3545',
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ex_categories: {
    width: 140,
    height: 140,
    borderColor: '#dc3545',
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
});
