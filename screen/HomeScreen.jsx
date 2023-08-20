import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  useState,
  TextInput,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

// Images here
import ManSVG from '../assets/img/Man.svg';
import CbseSVG from '../assets/img/cbse.svg';

const HomeScreen = props => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <ScrollView style={{padding: 10}}>
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
              onPress={() => props.navigation.navigate('Login')}
              style={{marginRight: 20}}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderWidth: 2,
                  borderRadius: 50,
                  borderColor: '#dc3545',
                  backgroundColor: '#dc3545',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}>
                <ManSVG height={55} width={55} />
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
            }}>
            Carousal Here
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
            <TouchableOpacity style={styles.ex_categories}>
              <CbseSVG />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ex_categories}>
              <Image
                resizeMethod="auto"
                source={require('../assets/img/icse.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ex_categories}>
              <Image source={require('../assets/img/ssc.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ex_categories}>
              <Image source={require('../assets/img/cuet.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ex_categories}>
              <Image source={require('../assets/img/clat.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ex_categories}>
              <Image source={require('../assets/img/dsssb.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ex_categories}>
              <Image source={require('../assets/img/Quiz.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.ex_categories}>
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
    marginHorizontal: 20,
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
  },
});
