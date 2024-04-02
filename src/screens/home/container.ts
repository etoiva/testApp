import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setAuthState} from '../../slice/auth/AuthSlice';
import {LOGIN_SCREEN} from '../../navigation/ScreenNames';
import {useState} from 'react';

export const useHome = () => {
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);
  const dispatch = useDispatch();
  const {navigate} = useNavigation<any>();
  const logout = () => {
    setIsLoggingOut(true);
    auth()
      .signOut()
      .then(() => {
        dispatch(setAuthState(false));
        navigate(LOGIN_SCREEN);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoggingOut(false);
      });
  };

  return {
    logout,
    isLoggingOut,
  };
};
