import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      return {
        ...state,
        value: action.payload,
      }
    },
  },
})

export const { setQuery } = querySlice.actions
export default querySlice.reducer
