import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from '../slice/auth/AuthSlice';
import {categoryListReducer} from '../slice/list/ListSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categoryList: categoryListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
