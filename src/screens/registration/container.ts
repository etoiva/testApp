import {useForm, useWatch} from 'react-hook-form';
import {RegistrationFormData} from './Registration.types';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {LOGIN_SCREEN} from '../../navigation/ScreenNames';
import {Alert} from 'react-native';

export const useRegistration = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<RegistrationFormData>();
  const {navigate} = useNavigation<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const email = useWatch({control, name: 'email'});
  const password = useWatch({control, name: 'password'});

  const onCheckbox = () => {
    setTermsAccepted(!termsAccepted);
  };

  const onSignUp = () => {
    if (!termsAccepted) return;
    setIsLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigate(LOGIN_SCREEN);
      })
      .catch(err => {
        console.warn(err);
        Alert.alert('An error occured during registration');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return {
    control,
    errors,
    isLoading,
    handleSubmit,
    onSignUp,
    termsAccepted,
    onCheckbox,
  };
};
