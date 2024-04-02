import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CategoryListState} from './listTypes';
import {CategoryListData} from '../../utilis';
import {CategoryListType} from '../../components/categoryList/CategoryListCard.types';

const initialState: CategoryListState = {
  data: CategoryListData,
};

const categoryListSlice = createSlice({
  name: 'categoryList',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<CategoryListType>) => {
      state.data = [action.payload, ...state.data];
    },
  },
});
export const selectCategoryListData = (state: {
  categoryList: CategoryListState;
}) => state.categoryList.data;

export const {addCategory} = categoryListSlice.actions;
export const categoryListReducer = categoryListSlice.reducer;
