import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../../constants';

const {height, width} = Dimensions.get('window');

const QuestionItem = memo(({data, selectedOption}) => {
  return (
    <View style={{width: width}}>
      <Text style={styles.ques}>{data.question}</Text>
      <View style={{marginTop: 20}}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={data.options}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 60,
                  elevation: 3,
                  backgroundColor: data.marked == index + 1 ? 'purple' : '#fff',
                  marginTop: 20,
                  marginBottom: 10,
                  alignSelf: 'center',
                  alignItems: 'center',
                  paddingLeft: 15,
                  flexDirection: 'row',
                }}
                onPress={() => {
                  selectedOption(index + 1);
                }}>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor:
                      data.marked == index + 1 ? '#fff' : colors.secondary,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color:
                        data.marked == index + 1 ? colors.textColor : '#fff',
                      fontWeight: '600',
                    }}>
                    {index == 0
                      ? 'A'
                      : index == 1
                      ? 'B'
                      : index == 2
                      ? 'C'
                      : 'D'}
                  </Text>
                </View>
                <Text
                  style={{
                    color: data.marked == index + 1 ? '#fff' : colors.textColor,
                    fontSize: 18,
                    marginLeft: 15,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
});

export default QuestionItem;

const styles = StyleSheet.create({
  ques: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textColor,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
});
