/* eslint-disable */
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// import { applyMiddleware, createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './reducer';

const store: EnhancedStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
