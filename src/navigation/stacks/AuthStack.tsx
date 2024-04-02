import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LOGIN_SCREEN, REGISTRATION_SCREEN} from '../ScreenNames';
import {LoginScreen} from '../../screens/login/LoginScreen';
import {RegistrationScreen} from '../../screens/registration/RegistrationScreen';

const Stack = createNativeStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
    <Stack.Screen name={REGISTRATION_SCREEN} component={RegistrationScreen} />
  </Stack.Navigator>
);
