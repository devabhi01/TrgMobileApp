import {View, Text, Image} from 'react-native';
import React from 'react';

export default function BannerSlider  ({data})  {
  return (
    <View>
      <Image source={data.image} />
    </View>
  );
};


