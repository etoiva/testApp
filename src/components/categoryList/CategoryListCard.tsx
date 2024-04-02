import React from 'react';
import {Pressable, Text} from 'react-native';
import {CategoryListType} from './CategoryListCard.types';
import {useStyles} from './CategoryList.styles';
import {useNavigation} from '@react-navigation/native';
import {CATEGORY_DETAILS_SCREEN} from '../../navigation/ScreenNames';
import {CategoryDetailsNavigationProp} from '../../navigation/types';

export const CategoryListCard = ({title, price, id}: CategoryListType) => {
  const styles = useStyles();
  const navigation = useNavigation<CategoryDetailsNavigationProp>();

  const onSinglePress = () => {
    navigation.navigate(CATEGORY_DETAILS_SCREEN, {price, title, id});
  };

  return (
    <Pressable onPress={onSinglePress} style={styles.main}>
      <Text>{title}</Text>
      <Text>{price}</Text>
    </Pressable>
  );
};
