import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../constants';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import {useUserContext} from '../../utils/userContext';
import {checkIfBookmarked} from '../../utils/APIs';

const MaterialList = ({route}) => {
  const navigation = useNavigation();

  // user context
  const {user} = useUserContext();

  const materials = route.params?.data || [];

  const navigateToModal = async material => {
    try {
      // checking if already bookmarked
      const res = await checkIfBookmarked({
        userId: user._id,
        materialId: material?._id,
      });
      const bookmarked = await res.json();
      navigation.navigate('material_modal', {data: material, bookmarked});
    } catch (error) {
      console.log(error);
    }
  };

  const renderMaterialItem = ({item}) => (
    <View style={{marginHorizontal: 20, marginTop: 20}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToModal(item)}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="book" size={30} color="#fff" />
          <View>
            <Text style={styles.titleText}> {item?.title}</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row', marginLeft: 10}}>
                <Text style={[styles.dateText, {opacity: 0.8}]}>
                  {item?.course}
                </Text>
              </View>
              <Text style={[styles.levelText, {opacity: 0.8}]}>
                {item?.type}
              </Text>
              <Text style={[styles.levelText, {opacity: 0.9}]}>
                {item?.difficultyLevel}
              </Text>
            </View>
          </View>
        </View>

        {item?.isPaid ? (
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              textAlign: 'right',
              marginHorizontal: 100,
              justifyContent: 'center',
            }}>
            <Icon name="rupee" size={20} color="#fff" /> {item?.price}
          </Text>
        ) : null}
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* materials list  */}
      <FlatList
        data={materials}
        keyExtractor={item => item?._id}
        renderItem={renderMaterialItem}
      />
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
    fontSize: 12,
    marginLeft: 5,
    opacity: 0.9,
  },
  titleText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 5,
  },
  levelText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  openBtn: {
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginTop: 10,
    width: '90%',
    fontSize: 20,
    alignSelf: 'center',
  },
});
