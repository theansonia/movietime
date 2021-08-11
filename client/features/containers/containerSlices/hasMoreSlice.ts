import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HasMore } from '../../../types';

const initialState = {
  value: true,
};

const hasMoreSlice = createSlice({
  name: 'hasMore',
  initialState,
  reducers: {
    updateHasMore: (state, action: PayloadAction<HasMore>) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export const { updateHasMore } = hasMoreSlice.actions;
export default hasMoreSlice.reducer;
