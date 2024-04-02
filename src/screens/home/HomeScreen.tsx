import React from 'react';
import {ActivityIndicator, Button} from 'react-native';
import {CategoryList} from '../../components/reusable/CategoryList';
import {useHome} from './container';

export const HomeScreen = () => {
  const {logout, isLoggingOut} = useHome();

  return (
    <>
      <CategoryList />

      {isLoggingOut ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <Button title="Logout" onPress={logout} />
      )}
    </>
  );
};
