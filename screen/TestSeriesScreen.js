import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import CbseSVG from '../assets/img/cbse.svg';
import {colors} from '../constants';


import ModalDropdown from 'react-native-modal-dropdown';

const TestSeriesScreen = props => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [course, setCourse] = useState('');

  const courseList = [
    {
      label: 'CBSE',
      value: 'cbse',
    },
    {
      label: 'Icse',
      value: 'icse',
    },
    {
      label: 'Ssc',
      value: 'ssc',
    },
    {
      label: 'Cuet',
      value: 'cuet',
    },
    {
      label: 'Clat',
      value: 'clat',
    },
    {
      label: 'Dsssb',
      value: 'dsssb',
    },
    {
      label: 'PoliceService',
      value: 'policeService',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.graylight}}>
      <ScrollView>
        {/* <Image
          style={styles.img}
          source={require('../assets/img/materials_pos.png')}
        /> */}

        <View style={styles.container}>
          <View style={{paddingHorizontal: 30}}>
            <View style={{marginVertical: 10}}>
              <View style={{marginTop: 20}}>
                
                <ModalDropdown
                  options={[
                    'Cbse',
                    'Icse',
                    'Ssc',
                    'Cuet',
                    'Clat',
                    'Dsssb',
                    'PoliceService',
                  ]}
                  defaultIndex={1}
                  defaultValue={'Select Course'}
                  isFullWidth
                  style={styles.btnStyle}
                  textStyle={styles.textStyle}
                  dropdownStyle={styles.dropDownStyle}
                  dropdownTextStyle={styles.dropdownTextStyle}
                />
                <View style={{marginVertical: 20}}>
                  <ModalDropdown
                    options={['N/A', '6', '7', '8', '9', '10', '11', '12']}
                    defaultIndex={1}
                    defaultValue={'Select Class'}
                    isFullWidth
                    style={styles.btnStyle}
                    textStyle={styles.textStyle}
                    dropdownStyle={styles.dropDownStyle}
                    dropdownTextStyle={styles.dropdownTextStyle}
                  />
                </View>

                <ModalDropdown
                  options={[
                    'N/A',
                    'English',
                    'Mathematics',
                    'Sst',
                    'Hindi',
                    'Sanskrit',
                    'Science',
                  ]}
                  defaultIndex={1}
                  defaultValue={'Select Subject'}
                  isFullWidth
                  style={styles.btnStyle}
                  textStyle={styles.textStyle}
                  dropdownStyle={styles.dropDownStyle}
                  dropdownTextStyle={styles.dropdownTextStyle}
                />
              </View>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => props.navigation.navigate('test_detail')}>
                {/* <MaterialIcon name="bookshelf" size={30} color={colors.white} /> */}
                <Text style={styles.textBtn}>Lets Go</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TestSeriesScreen;

const styles = StyleSheet.create({
  img: {
    width: 400,
    height: 200,
    resizeMode: 'cover',
    zIndex: -10,
  },
  container: {
    backgroundColor: colors.graylight,
    borderColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  btn: {
    backgroundColor: '#dc3545',
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: 'row',
    marginTop: 20,
    paddingLeft: 20,
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 20,
    paddingVertical: 15,
    color: colors.white,
    
  },
  btnStyle: {
    backgroundColor: '#ffffff',
    height: 60,
    justifyContent: 'center',

    color: colors.textColor,
    borderRadius: 8,
    elevation: 3,
    width: '100%',
  },
  textStyle: {
    color: colors.textColor,
    fontSize: 16,
    marginLeft: 15,
  },
  dropDownStyle: {
    backgroundColor: '#fafafa',
    marginTop: 10,
  },
  dropdownTextStyle: {
    color: colors.textColor,
    fontSize: 16,
    paddingLeft: 15,
  },
});
