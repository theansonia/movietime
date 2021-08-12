import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserInfo {
  userinfo?: {
    email?: string;
    password?: string;
    username?: string;
    id?: number | null;
  };
}

const initialState: UserInfo = {
  userinfo: {
    email: '',
    password: '',
    username: '',
    id: null,
  },
};

const userInfoSlice = createSlice({
  name: 'userinfo',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userinfo = action.payload;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
