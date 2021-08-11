"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSearchStatus = exports.searchStatusSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    value: false,
};
exports.searchStatusSlice = toolkit_1.createSlice({
    name: 'searchStatus',
    initialState,
    reducers: {
        setSearchStatus: (state, action) => {
            return {
                ...state,
                value: action.payload,
            };
        },
    },
});
exports.setSearchStatus = exports.searchStatusSlice.actions.setSearchStatus;
exports.default = exports.searchStatusSlice.reducer;
//# sourceMappingURL=searchStatusSlice.js.map