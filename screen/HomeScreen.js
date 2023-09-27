import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import {Searchbar} from 'react-native-paper';
// import Carousel from 'react-native-snap-carousel';
import {windowWidth} from '../utils/Dimensions';
import {Avatar} from 'react-native-paper';
import {colors} from '../constants';

// Images here
import ManSVG from '../assets/img/Man.svg';
import CbseSVG from '../assets/img/cbse.svg';

// import {sliderData} from '../model/Data';
import BannerSlider from '../components/BannerSlider';
import { useUserContext } from '../utils/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = props => {

  // //testing api
  // useEffect(() => {
  //   fetctData = async () => {
  //     const res = await fetch('http://172.20.10.2:1222/',{
  //       method:'GET'
  //     })
  //     console.log(await res.json())
  //   }
  //   fetctData()
  // }, [])
  

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.graylight}}>
      <ScrollView style={{paddingVertical: 10}}>
        <View style={styles.container}>
          <View style={styles.topbar}>
            <View style={{marginLeft: 20}}>
              <Text style={{color: '#eee', fontSize: 20, color: '#dc3545'}}>
                Hello,
              </Text>
              <Text
                style={{
                  color: '#eee',
                  fontSize: 20,
                  fontWeight: 600,
                  color: '#dc3545',
                }}>
                Abhishek
              </Text>
            </View>
            {/* <Text style={{color: '#eee', fontSize: 28, fontWeight: 600}}>
              TRG
            </Text> */}

            <TouchableOpacity
              onPress={() => props.navigation.toggleDrawer()}
              style={{marginRight: 20}}>
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
          <View style={{marginHorizontal: 20}}>
            {/* <Carousel
              style={{marginHorizontal: 20}}
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
            <TouchableOpacity
              onPress={() => props.navigation.navigate('cbse')}
              style={styles.ex_categories}>
              <Image source={require('../assets/img/cbse.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('icse')}
              style={styles.ex_categories}>
              <Image
                resizeMethod="auto"
                source={require('../assets/img/icse.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ssc')}
              style={styles.ex_categories}>
              <Image source={require('../assets/img/ssc.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('cuet')}
              style={styles.ex_categories}>
              <Image source={require('../assets/img/cuet.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('clat')}
              style={styles.ex_categories}>
              <Image source={require('../assets/img/clat.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('dsssb')}
              style={styles.ex_categories}>
              <Image source={require('../assets/img/dsssb.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('dsssb')}
              style={styles.ex_categories}>
              <Image source={require('../assets/img/police.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('dsssb')}
              style={styles.ex_categories}>
              <Image source={require('../assets/img/other.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('quiz')}
              style={styles.ex_categories}>
              <Image source={require('../assets/img/Quiz.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('test')}
              style={styles.ex_categories}>
              <Image source={require('../assets/img/test.png')} />
            </TouchableOpacity>
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
