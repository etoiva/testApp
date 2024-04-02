import React from 'react';
import {View, TextInput, Button, Text, ActivityIndicator} from 'react-native';
import {Controller} from 'react-hook-form';
import {useStyles} from './LoginScreen.styles';
import {useLogin} from './container';

export const LoginScreen = () => {
  const styles = useStyles();
  const {control, errors, isLoading, handleSubmit, signin, onRegister} =
    useLogin();

  return (
    <>
      <View style={styles.container}>
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
            />
          )}
          name="email"
        />
        {errors.email && <Text style={styles.err}>This is required.</Text>}

        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              secureTextEntry={true}
            />
          )}
          name="password"
        />
        {errors.password && <Text style={styles.err}>This is required.</Text>}
      </View>
      <View style={styles.btnView}>
        <View>
          {isLoading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <Button
              title="Sign In"
              onPress={handleSubmit(signin)}
              color={'grey'}
            />
          )}
        </View>

        <Button title="registration" onPress={onRegister} />
      </View>
    </>
  );
};
