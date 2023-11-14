import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomDropdown = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selected, setSelected] = useState('Select');
  const [data, setData] = useState(props.initialValue);

  const handleSelect = (item) => {
    setSelected(item[props.innerList]);
    setIsClicked(!isClicked);
    // Pass the selected item to the callback function
    if (props.onSelect) {
      props.onSelect(item);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.dropdownSelector}
        onPress={() => {
          setIsClicked(!isClicked);
        }}
      >
        <Text style={{ color: '#000' }}>{selected}</Text>
        {isClicked ? (
          <Icon name="chevron-up" size={24} color="#000" />
        ) : (
          <Icon name="chevron-down" size={24} color="#000" />
        )}
      </TouchableOpacity>
      {isClicked ? (
        <View
          style={{
            elevation: 5,
            marginTop: 20,
            height: props.menuHeight || 'auto',
            alignSelf: 'center',
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: 10,
          }}
        >
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{
                  width: '85%',
                  alignSelf: 'center',
                  height: 50,
                  justifyContent: 'center',
                  borderBottomWidth: 0.5,
                  borderColor: '#8e8e8e',
                }}
                onPress={() => handleSelect(item)}
              >
                <Text style={{ fontWeight: '600', color: '#0a0a0a' }}>
                  {item[props.innerList]}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : null}
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  dropdownSelector: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
});
