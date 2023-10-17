import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  // PermissionsAndroid
} from 'react-native';
import { Searchbar, Avatar } from 'react-native-paper';
// import Carousel from 'react-native-snap-carousel';
import { windowWidth } from '../utils/Dimensions';
import { colors } from '../constants';

// Images here
import ManSVG from '../assets/img/Man.svg';
import CbseSVG from '../assets/img/cbse.svg';

import { sliderData } from '../model/Data';
import BannerSlider from '../components/BannerSlider';
import { useUserContext } from '../utils/userContext';
import Geolocation from '@react-native-community/geolocation';

// Course details
const courses = [
  { name: "cbse", screen: "cbse", img: require("../assets/img/cbse.png") },
  { name: "icse", screen: "icse", img: require("../assets/img/icse.png") },
  { name: "ssc", screen: "ssc", img: require("../assets/img/ssc.png") },
  { name: "cuet", screen: "cuet", img: require("../assets/img/cuet.png") },
  { name: "clat", screen: "clat", img: require("../assets/img/clat.png") },
  { name: "dsssb", screen: "dsssb", img: require("../assets/img/dsssb.png") },
  { name: "police", screen: "dsssb", img: require("../assets/img/police.png") },
  { name: "others", screen: "dsssb", img: require("../assets/img/other.png") },
  { name: "quiz", screen: "quiz", img: require("../assets/img/Quiz.png") },
  { name: "test", screen: "test", img: require("../assets/img/test.png") },
]

const HomeScreen = props => {
  // asking notifications permission
  // PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  // getting current geolocation
  Geolocation.getCurrentPosition(info => console.log(info));

  // user context for fetching details
  const { user } = useUserContext()

  const [searchQuery, setSearchQuery] = useState('');

  // filtered course state
  const [filteredCourses, setFilteredCourses] = useState(courses)

  const onChangeSearch = query => {
    setSearchQuery(query)
    // Convert the query to lowercase for case-insensitive search
    const lowercaseQuery = query.toLowerCase();

    // Use Array.prototype.filter() to filter objects based on the query
    const filteredCourses = courses.filter(item => {
      // Check if any property of the item contains the query string (case-insensitive)
      return Object.values(item).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(lowercaseQuery)
      );
    });

    setFilteredCourses(filteredCourses);

  };

  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.graylight }}>
      <ScrollView style={{ paddingVertical: 10 }}>
        <View style={styles.container}>
          <View style={styles.topbar}>
            <View style={{ marginLeft: 20 }}>
              <Text style={{ color: '#eee', fontSize: 20, color: '#dc3545' }}>
                Hello,
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
            {/* <Text style={{color: '#eee', fontSize: 28, fontWeight: 600}}>
              TRG
            </Text> */}

            <TouchableOpacity
              onPress={() => props.navigation.toggleDrawer()}
              style={{ marginRight: 20 }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: colors.primary,
                  borderRadius: 50,
                }}>
                <Avatar.Image
                  size={60}
                  source={require('../assets/img/user.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View>
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
              onTouchCancel={()=>{setSearchQuery('')}}
            />
          </View>

          <Text
            style={{
              color: '#dc3545',
              fontSize: 16,
              fontWeight: 700,
              marginHorizontal: 20,
              marginVertical: 20,
            }}>
            Carousal Here
          </Text>
          <View style={{ marginHorizontal: 20 }}>
            {/* <Carousel
              style={{ marginHorizontal: 20 }}
              ref={c => {
                this._carousel = c;
              }}
              data={sliderData}
              renderItem={renderBanner}
              sliderWidth={windowWidth - 40}
              itemWidth={300}
              loop={true}
            /> */}
          </View>
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
                </TouchableOpacity>)
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
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
