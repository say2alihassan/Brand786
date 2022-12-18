//import liraries
import React from 'react';
import {StatusBar} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {colors} from '../themes/Colors';
import MainTodo from '../pages/HOME/MainTodo';
import EditTodo from '../pages/HOME/EditTodo';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={colors.primary}
      />
      <Stack.Navigator initialRouteName="MainTodo">
        <Stack.Screen
          name="MainTodo"
          component={MainTodo}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditTodo"
          component={EditTodo}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeStack;
