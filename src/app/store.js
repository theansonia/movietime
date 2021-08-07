import { configureStore } from '@reduxjs/toolkit'
// import { applyMiddleware, createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'

const store = configureStore({
  reducer: rootReducer,
})

export default store
