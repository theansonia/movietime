import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Pages } from '../../types';

type Pages = number;

const initialState = {
  value: 1,
};

const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    updatePages: (state, action: PayloadAction<Pages>) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export const { updatePages } = pagesSlice.actions;
export default pagesSlice.reducer;

// const hasMoreSlice = createSlice({
//   name: 'hasMore',
//   initialState,
//   reducers: {
//     updateHasMore: (state, action: PayloadAction<HasMore>) => {
//       return {
//         ...state,
//         value: action.payload,
//       };
//     },
//   },
// });

// export const { updateHasMore } = hasMoreSlice.actions;
// export default hasMoreSlice.reducer;
