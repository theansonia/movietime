import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../types';

const initialState = {
  value: 'Movies and TV Show',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategory: (state, action: PayloadAction<Category | null>) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;
