//import liraries
import React from 'react';
import {StatusBar} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {colors} from '../themes/Colors';
import Login from '../pages/AUTH/login';
import Register from '../pages/AUTH/Register';
import Welcome from '../pages/AUTH/Welcome';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={colors.primary}
      />
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
