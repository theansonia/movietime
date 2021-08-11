import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const valueSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export const { setValue } = valueSlice.actions;
export default valueSlice.reducer;
