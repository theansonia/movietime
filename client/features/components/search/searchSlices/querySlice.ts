import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Query } from '../../../../types';

const initialState = {
  value: '',
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<Query>) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export const { setQuery } = querySlice.actions;
export default querySlice.reducer;
