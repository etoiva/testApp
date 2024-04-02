import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Controller} from 'react-hook-form';
import {useStyles} from './Registration.styles';
import {useRegistration} from './container';

export const RegistrationScreen = () => {
  const styles = useStyles();
  const {
    control,
    errors,
    isLoading,
    handleSubmit,
    onSignUp,
    termsAccepted,
    onCheckbox,
  } = useRegistration();

  return (
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
            placeholder="Phone"
            keyboardType="phone-pad"
          />
        )}
        name="phone"
      />
      {errors.phone && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="name"
          />
        )}
        name="name"
      />
      {errors.name && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="surname"
          />
        )}
        name="surname"
      />
      {errors.surname && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="email"
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}

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
      {errors.password && <Text>This is required.</Text>}
      <View style={styles.checkboxContainer}>
        <Pressable style={styles.checkbox} onPress={onCheckbox}>
          <Text>{termsAccepted ? '✓' : ''}</Text>
        </Pressable>
        <Text style={styles.label}>I agree to the Terms and Conditions</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <Button title="Sign Up" onPress={handleSubmit(onSignUp)} />
      )}
    </View>
  );
};
