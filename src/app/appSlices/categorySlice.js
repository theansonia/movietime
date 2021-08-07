import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      return {
        ...state,
        value: action.payload,
      }
    },
  },
})

export const { changeCategory } = categorySlice.actions
export default categorySlice.reducer
