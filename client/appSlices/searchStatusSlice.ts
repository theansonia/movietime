import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchStatus } from '../types';

const initialState = {
  value: false,
};

export const searchStatusSlice = createSlice({
  name: 'searchStatus',
  initialState,
  reducers: {
    setSearchStatus: (state, action: PayloadAction<SearchStatus>) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export const { setSearchStatus } = searchStatusSlice.actions;
export default searchStatusSlice.reducer;
