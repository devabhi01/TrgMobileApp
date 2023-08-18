import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import ManSVG from '../components/assets/img/Man.svg';

const HomeScreen = () => {
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

            <TouchableOpacity style={{marginRight: 20}}>
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

          <View style={styles.input}>
            <Feather name="search" size={20} color={'#dc3545'} />
            <TextInput
              placeholder="Search"
              placeholderTextColor={'#241D20'}
              width={200}
              selectionColor={'#dc3545'}
              style={{color: '#241D20'}}
            />
            <TouchableOpacity>
              <Text style={{justifyContent: 'flex-end'}}>
                <Feather name="arrow-right" size={20} color={'#dc3545'} />
              </Text>
            </TouchableOpacity>
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
            <TouchableOpacity>
              <Text
                style={{
                  color: '#dc3545',
                  fontSize: 14,
                  fontWeight: 700,
                  marginHorizontal: 20,
                }}>
                See all
              </Text>
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
});
