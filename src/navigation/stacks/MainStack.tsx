import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CATEGORY_DETAILS_SCREEN, HOME_SCREEN} from '../ScreenNames';
import {HomeScreen} from '../../screens/home/HomeScreen';
import CategoryDetailScreen from '../../screens/CategoryDetailsScreen/CategoryDetailsScreen';

const Stack = createNativeStackNavigator();

export const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
    <Stack.Screen
      name={CATEGORY_DETAILS_SCREEN}
      component={CategoryDetailScreen}
    />
  </Stack.Navigator>
);
