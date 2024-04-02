import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  CATEGORY_DETAILS_SCREEN,
  HOME_SCREEN,
  LOGIN_SCREEN,
  REGISTRATION_SCREEN,
} from './ScreenNames';

export type RootStackParamList = {
  [LOGIN_SCREEN]: undefined;
  [REGISTRATION_SCREEN]: undefined;
  [HOME_SCREEN]: undefined;
  [CATEGORY_DETAILS_SCREEN]: {
    price: string;
    title: string;
    id: number;
  };
};

export type CategoryDetailsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  typeof CATEGORY_DETAILS_SCREEN
>;
