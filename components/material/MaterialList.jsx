import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {colors} from '../../constants';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';

const MaterialList = ({route}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const materials = route.params?.data || [];
  // console.log(materials)

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const renderMaterialItem = ({item}) => (
    <View style={{marginHorizontal: 20, marginTop: 20}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="calendar" size={30} color="#fff" />
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
                {' '}
                {item?.difficultyLevel}
              </Text>
            </View>
          </View>
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
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* materials list  */}
      <FlatList
        data={materials}
        keyExtractor={item => item?._id}
        renderItem={renderMaterialItem}
      />

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              width: '90%',
              height: '50%',
              borderRadius: 8,
              position: 'relative',
            }}>
            <Text
              style={{
                color: colors.textColor,
                fontSize: 20,
                textAlign: 'center',
                marginTop: 20,
              }}>
              Materials Detals
            </Text>

            <View
              style={{
                position: 'absolute',
                right: 15,
                top: 10,
                backgroundColor: '#dc3545',
                padding: 2,
                borderRadius: 50,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Icon name="close" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.openBtn}>Open</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
