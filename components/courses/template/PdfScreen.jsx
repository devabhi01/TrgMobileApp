import React from 'react';
import {View, StyleSheet} from 'react-native';
import PdfViewer from '../template/PdfViewer';

const PdfScreen = ({route}) => {
  const {uri} = route.params;

  return (
    <View style={styles.container}>
      <PdfViewer uri={uri} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default PdfScreen;
