import React from 'react';
import {MainStack} from './stacks/MainStack';
import {AuthStack} from './stacks/AuthStack';
import {useAppSelector} from '../store/useAppSelector';

const RootNavigator = () => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  return isAuthenticated ? <MainStack /> : <AuthStack />;
};

export default RootNavigator;
