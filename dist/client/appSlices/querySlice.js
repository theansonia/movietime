"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setQuery = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    value: '',
};
const querySlice = toolkit_1.createSlice({
    name: 'query',
    initialState,
    reducers: {
        setQuery: (state, action) => {
            return {
                ...state,
                value: action.payload,
            };
        },
    },
});
exports.setQuery = querySlice.actions.setQuery;
exports.default = querySlice.reducer;
//# sourceMappingURL=querySlice.js.map