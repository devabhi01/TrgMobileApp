import {StyleSheet, SafeAreaView, Text, View, ScrollView} from 'react-native';
import {colors} from '../constants';
import React from 'react';
import MoreOptBtn from '../components/courses/template/MoreOptBtn';
import VideoPlayer from '../components/courses/template/VideoPlayer';

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
            name={'My Matrials(Paid)'}
            IocnName={'cloud-download'}
            onPress={() => props.navigation.navigate('my_material')}
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
        {/* <View style={styles.btnCont}>
          <MoreOptBtn
            name={'stopwatch'}
            IocnName={'bookmarks'}
            onPress={() => props.navigation.navigate('timer')}
            backgroundColor={'#17AADD'}
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
