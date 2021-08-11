"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppDispatch = void 0;
/* eslint-disable */
const toolkit_1 = require("@reduxjs/toolkit");
const react_redux_1 = require("react-redux");
// import { applyMiddleware, createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'
const reducer_1 = require("./reducer");
const store = toolkit_1.configureStore({
    reducer: reducer_1.rootReducer,
});
const useAppDispatch = () => react_redux_1.useDispatch();
exports.useAppDispatch = useAppDispatch;
exports.default = store;
//# sourceMappingURL=store.js.map