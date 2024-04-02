import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CategoryListType} from '../categoryList/CategoryListCard.types';
import {CategoryListCard} from '../categoryList/CategoryListCard';
import {useDispatch, useSelector} from 'react-redux';
import {CategoryListData} from '../../utilis';
import {useStyles} from '../categoryList/CategoryList.styles';
import {Controller, useForm} from 'react-hook-form';
import {addCategory, selectCategoryListData} from '../../slice/list/ListSlice';
type PropType = {
  isSingle?: boolean;
};
type Form = {
  companyName: string;
  date: string;
  cost: string;
};
export const CategoryList = ({isSingle}: PropType) => {
  const categoryListData = useSelector(selectCategoryListData);
  const [modalVisible, setModalVisible] = useState(false);
  const [_categoryListData, setCategoryListData] = useState(CategoryListData);
  const styles = useStyles();
  const {control, handleSubmit, reset} = useForm<Form>();
  const dispatch = useDispatch();

  const onSubmit = (data: Form) => {
    setModalVisible(false);
    reset();
    const newCategory: CategoryListType = {
      ...data,
      id: _categoryListData.length + 1,
      title: data.companyName,
      price: data.cost,
    };
    setCategoryListData(currentData => [newCategory, ...currentData]);
    dispatch(addCategory(newCategory));
  };

  const renderHeader = () => {
    if (!isSingle) return null;

    return (
      <Pressable
        style={styles.header}
        onPress={() => setModalVisible(true)} // Open modal on press
      >
        <Text style={styles.headerText}>კატეგორიის დამატება +</Text>
      </Pressable>
    );
  };

  const renderItem = ({item}: {item: CategoryListType}) => (
    <CategoryListCard price={item.price} title={item.title} id={item.id} />
  );

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>ხარჯის ინფორმაცია</Text>
            <Controller
              control={control}
              name="companyName"
              rules={{required: true}}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Company Name"
                  style={styles.input}
                />
              )}
            />
            <Controller
              control={control}
              name="date"
              rules={{required: true}}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Date"
                  style={styles.input}
                />
              )}
            />
            <Controller
              control={control}
              name="cost"
              rules={{required: true}}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Cost"
                  keyboardType="numeric"
                  style={styles.input}
                />
              )}
            />
            <View style={styles.btn}>
              <Button
                title="Submit"
                color={'green'}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </View>
        </View>
      </Modal>
      <FlatList
        data={categoryListData}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{
          paddingHorizontal: 16,
          marginTop: 10,
          paddingBottom: 330,
        }}
        ListHeaderComponent={renderHeader}
      />
    </>
  );
};
