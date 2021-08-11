"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHasMore = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    value: true,
};
const hasMoreSlice = toolkit_1.createSlice({
    name: 'hasMore',
    initialState,
    reducers: {
        updateHasMore: (state, action) => {
            return {
                ...state,
                value: action.payload,
            };
        },
    },
});
exports.updateHasMore = hasMoreSlice.actions.updateHasMore;
exports.default = hasMoreSlice.reducer;
//# sourceMappingURL=hasMoreSlice.js.map