"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeCategory = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    value: 'Movie and TV Show',
};
const categorySlice = toolkit_1.createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory: (state, action) => {
            return {
                ...state,
                value: action.payload,
            };
        },
    },
});
exports.changeCategory = categorySlice.actions.changeCategory;
exports.default = categorySlice.reducer;
//# sourceMappingURL=categorySlice.js.map