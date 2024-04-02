import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {CategoryDetailsNavigationProp} from '../../navigation/types';
import {useStyles} from './CategoryDetails.styles';
import {CategoryList} from '../../components/reusable/CategoryList';

type Props = {
  route: CategoryDetailsNavigationProp;
};

const CategoryDetailScreen: React.FC<Props> = ({route}: any) => {
  const styles = useStyles();
  const [isCategory, setIsCategory] = useState(false);
  const {price, title} = route.params;

  const onShowCategory = () => {
    setIsCategory(!isCategory);
  };

  return (
    <View>
      <View style={styles.wrapper}>
        <Text>{title}</Text>
        <Text>{price}</Text>
      </View>
      <View style={styles.categoryView}>
        <Text style={styles.title}>ხარჯის კატეგორიები</Text>
        <Pressable style={styles.seeWrapper} onPress={onShowCategory}>
          {!isCategory ? <Text>ნახვა</Text> : <Text>დამალვა</Text>}
        </Pressable>
      </View>
      {isCategory && <CategoryList isSingle={true} />}
    </View>
  );
};

export default CategoryDetailScreen;
