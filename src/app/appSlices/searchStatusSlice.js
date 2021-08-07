import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const searchStatusSlice = createSlice({
  name: 'searchStatus',
  initialState,
  reducers: {
    setSearchStatus: (state, action) => {
      return {
        ...state,
        value: action.payload,
      }
    },
  },
})

export const { setSearchStatus } = searchStatusSlice.actions
export default searchStatusSlice.reducer
