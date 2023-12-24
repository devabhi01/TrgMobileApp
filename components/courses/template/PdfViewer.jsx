import { StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';

const PdfViewer = props => {
    const source = {
        uri: props.uri, // Fix: use props.uri instead of {props.uri}
        cache: true,
      };
  return (
    
      <View style={styles.container}>
        <Pdf
          trustAllCerts={false}
          source={source}
          style={styles.pdf}
        />
      </View>
    
  );
};

export default PdfViewer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
