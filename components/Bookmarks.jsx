import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../constants';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

const Bookmarks = () => {
  const navigation = useNavigation();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{margin: 20}}>
        <TouchableOpacity style={styles.button}>
        <View style={{flexDirection: 'column',}}>
            
            <Text style={styles.subjectText}> Maths</Text>
            <Text style={styles.descText}> Support Material - Class:10</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
            <TouchableOpacity onPress={toggleBookmark}>
              {isBookmarked ? (
                <Icon name="bookmarks" size={20} color="#fff" />
              ) : (
                <Icon name="bookmarks-outline" size={20} color="#fff" />
              )}
            </TouchableOpacity>
            <TouchableOpacity>
              <FAIcon name="download" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
      {/* <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Text style={{color:'#0a0a0a'}}>No Downloads</Text>
      </View> */}
    </SafeAreaView>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    elevation: 5,
  },
  subjectText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 5,
  },
  descText: {
    color: '#fff',
    opacity: 0.8,
    fontSize: 12,
    marginLeft: 5,
  }
});
