//import liraries
import React from 'react';
import {Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './auth';
import HomeStack from './home';

import {useAppSelector} from '../store';

const Routes = () => {
  const {authToken} = useAppSelector(state => state.root.user);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {authToken ? <HomeStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
