import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../constants';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

const MaterialList = () => {
  const navigation = useNavigation();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{margin: 20}}>
        <TouchableOpacity style={styles.button}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="calendar" size={30} color="#fff" />
            <Text style={styles.dateText}> 30.11.2023</Text>
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
    </SafeAreaView>
  );
};

export default MaterialList;

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
  dateText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 5,
  },
});
