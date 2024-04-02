import {createSlice} from '@reduxjs/toolkit';
import {AuthStateType} from './types';

const initialState: AuthStateType = {
  isAuthenticated: false,
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setAuthState: (state, {payload}) => {
      state.isAuthenticated = payload;
    },
  },
});

export const {setAuthState} = AuthSlice.actions;
export const authReducer = AuthSlice.reducer;
