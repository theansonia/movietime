import { combineReducers } from 'redux'
import categoryReducer from './appSlices/categorySlice'
import searchStatusReducer from './appSlices/searchStatusSlice'
import queryReducer from './appSlices/querySlice'
const rootReducer = combineReducers({
  category: categoryReducer,
  searchStatus: searchStatusReducer,
  query: queryReducer,
})

export default rootReducer
