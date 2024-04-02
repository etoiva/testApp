import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {useForm, useWatch} from 'react-hook-form';
import {FormDataLogin} from './LoginScreen.types';
import {setAuthState} from '../../slice/auth/AuthSlice';
import {HOME_SCREEN, REGISTRATION_SCREEN} from '../../navigation/ScreenNames';
import {Alert} from 'react-native';

export const useLogin = () => {
  const {navigate} = useNavigation<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataLogin>();

  const email = useWatch({control, name: 'email'});
  const password = useWatch({control, name: 'password'});

  const signin = () => {
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate(HOME_SCREEN);
        dispatch(setAuthState(true));
      })
      .catch(err => {
        console.warn(err);
        Alert.alert('User not faund');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onRegister = () => {
    navigate(REGISTRATION_SCREEN);
  };

  return {
    control,
    errors,
    isLoading,
    handleSubmit,
    signin,
    onRegister,
  };
};
