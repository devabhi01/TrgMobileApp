import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  ActivityIndicator,
} from 'react-native';

import {windowWidth} from '../utils/Dimensions';
import {colors} from '../constants';
import Carousel from 'react-native-reanimated-carousel';
import Qotd from '../components/courses/template/Qotd';
import {fetchCarousel, fetchQod} from '../utils/APIs';

// Course details
const courses = [
  {name: 'cbse', screen: 'cbse', img: require('../assets/img/cbse.png')},
  {name: 'icse', screen: 'icse', img: require('../assets/img/icse.png')},
  {name: 'ssc', screen: 'ssc', img: require('../assets/img/ssc.png')},
  {name: 'cuet', screen: 'cuet', img: require('../assets/img/cuet.png')},
  {name: 'clat', screen: 'clat', img: require('../assets/img/clat.png')},
  {name: 'dsssb', screen: 'dsssb', img: require('../assets/img/dsssb.png')},
  {name: 'police', screen: 'police', img: require('../assets/img/police.png')},
  {
    name: 'others',
    screen: 'other_comp',
    img: require('../assets/img/other.png'),
  },
];

const HomeScreen = props => {

  // loading status
  const [isCarouselLoading, setIsCarouselLoading] = useState(false);

  // getting slider/carousel
  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    const getSliderData = async () => {
      try {
        setIsCarouselLoading(true);
        setIsQodLoading(true);
        const res = await fetchCarousel();
        const carousel = await res.json();
        setSliderData(carousel);
        setIsCarouselLoading(false);

        const res2 = await fetchQod();
        const qodData = await res2.json();
        console.log(qodData);
        setIsQodLoading(qodData);
        setIsQodLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getSliderData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.graylight}}>
      <ScrollView style={{paddingVertical: 10}}>
        <View style={styles.container}>
          <View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              {isCarouselLoading ? (
                <ActivityIndicator
                  color={'#dc3545'}
                  style={{
                    paddingVertical: 90,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              ) : (
                <Carousel
                  loop
                  width={windowWidth - 40}
                  height={windowWidth / 2}
                  autoPlay={true}
                  autoPlayInterval={5000}
                  data={sliderData}
                  renderItem={({item, index}) => (
                    <View
                      key={index}
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={{uri: item.imgUrl}}
                        style={{
                          width: '100%',
                          height: '100%',
                          resizeMode: 'contain',
                        }}
                      />
                    </View>
                  )}
                />
              )}
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
            <View style={{marginHorizontal: 20, marginTop: 10}}>
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
            onPress={() => Linking.openURL('https://www.therightguru.com/')}>
            <Text style={{color: '#fff', fontSize: 18, textAlign: 'center'}}>
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
            {courses.map((course, index) => {
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
