import {StyleSheet, SafeAreaView, Text, View, ScrollView} from 'react-native';
import {colors} from '../constants';
import React from 'react';
import MoreOptBtn from '../components/courses/template/MoreOptBtn';

const MoreScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.btnCont}>
          <MoreOptBtn
            name={'Materials'}
            IocnName={'book'}
            onPress={() => props.navigation.navigate('material')}
            backgroundColor={'#17AADD'}
          />
        </View>
        <View style={styles.btnCont}>
          <MoreOptBtn
            name={'Doubt Clearence'}
            IocnName={'clipboard'}
            onPress={() => props.navigation.navigate('doubt_clearence')}
            backgroundColor={'#17AADD'}
          />
        </View>

        <View style={styles.btnCont}>
          <MoreOptBtn
            name={'Videos'}
            IocnName={'play'}
            onPress={() => props.navigation.navigate('videos')}
            backgroundColor={'#17AADD'}
          />
        </View>

        <View style={styles.btnCont}>
          <MoreOptBtn
            name={'My Courses'}
            IocnName={'cloud-download'}
            onPress={() => props.navigation.navigate('my_course')}
            backgroundColor={'#17AADD'}
          />
        </View>
        <View style={styles.btnCont}>
          <MoreOptBtn
            name={'Downloads'}
            IocnName={'download'}
            onPress={() => props.navigation.navigate('downloads')}
            backgroundColor={'#17AADD'}
          />
        </View>
        <View style={styles.btnCont}>
          <MoreOptBtn
            name={'Bookmarks'}
            IocnName={'bookmarks'}
            onPress={() => props.navigation.navigate('bookmarks')}
            backgroundColor={'#17AADD'}
          />
        </View>

        <View style={styles.btnCont}>
          <MoreOptBtn
            name={'Setting'}
            IocnName={'settings'}
            onPress={() => props.navigation.navigate('setting_screen')}
            backgroundColor={'#dc3545'}
          />
        </View>
        <View style={styles.btnCont}>
          <MoreOptBtn
            name={'OnBoarding'}
            IocnName={'settings'}
            onPress={() => props.navigation.navigate('onBoarding')}
            backgroundColor={'#dc3545'}
          />
        </View>
        {/* <View style={styles.btnCont}>
        <MoreOptBtn
          name={'Material'}
          onPress={() => props.navigation.navigate('material')}
          backgroundColor={'#F24E29'}
        />
      </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.graylight,
    paddingHorizontal: 20,
  },
  btnCont: {
    marginTop: 20,
  },
});
