import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomText = ({title}) => {
  return (
    <View>
      <Text style={STYLES.CustomText}>{title}</Text>
    </View>
  );
};

export default CustomText;

const STYLES = StyleSheet.create({
  CustomText: {
    fontSize: 12,
    color: 'black',
    position: 'relative',
  },
});
