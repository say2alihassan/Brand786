import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../themes/Colors';
import {Indicator} from '../themes/Units';

const CustomButton = ({
  title,
  onPress,
  backgroundColor,
  textColor,
  style,
  loading,
  disable,
}) => {
  return (
    <View style={[STYLES.conatiner]}>
      <TouchableOpacity
        disabled={disable}
        style={[STYLES.buttonContainer, style, {opacity: disable ? 0.5 : 1}]}
        onPress={onPress}>
        {loading ? (
          <Indicator color="#fff" name="bar" size={20} />
        ) : (
          <Text style={STYLES.buttonTitle}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const STYLES = StyleSheet.create({
  conatiner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height: 50,
    width: 200,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  buttonTitle: {
    color: '#FFF',
    textAlign: 'center',

    fontSize: 20,
    fontWeight: 'bold',
  },
});
