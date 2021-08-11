import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Theme } from '../../../../types';
export type Theme = 'lightmode' | 'darkmode';

const initialState = {
  value: 'lightmode',
};

const toggleThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLightTheme: (state, action: PayloadAction<Theme>) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export const { setLightTheme } = toggleThemeSlice.actions;
export default toggleThemeSlice.reducer;
