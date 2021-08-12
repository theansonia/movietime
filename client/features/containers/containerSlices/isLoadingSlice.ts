import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState,
  reducers: {
    updateLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export const { updateLoading } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
