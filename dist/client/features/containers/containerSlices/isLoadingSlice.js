"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLoading = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    value: true,
};
const isLoadingSlice = toolkit_1.createSlice({
    name: 'isLoading',
    initialState,
    reducers: {
        updateLoading: (state, action) => {
            return {
                ...state,
                value: action.payload,
            };
        },
    },
});
exports.updateLoading = isLoadingSlice.actions.updateLoading;
exports.default = isLoadingSlice.reducer;
//# sourceMappingURL=isLoadingSlice.js.map