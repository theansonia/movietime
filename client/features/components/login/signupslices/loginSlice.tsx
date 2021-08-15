import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

const loginSlice = createSlice({
  name: 'isLoggedIn',
  initialState,
  reducers: {
    setLoginStatus: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setLoginStatus } = loginSlice.actions;
export default loginSlice.reducer;
