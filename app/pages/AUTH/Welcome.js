import {
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ROUTES} from '../../utils/Routes';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Pressable
        onPress={() => navigation.navigate(ROUTES.LOGIN)}
        style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Welcome to The BRAND 786
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
