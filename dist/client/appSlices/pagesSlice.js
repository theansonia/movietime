"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePages = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    value: 1,
};
const pagesSlice = toolkit_1.createSlice({
    name: 'pages',
    initialState,
    reducers: {
        updatePages: (state, action) => {
            return {
                ...state,
                value: action.payload,
            };
        },
    },
});
exports.updatePages = pagesSlice.actions.updatePages;
exports.default = pagesSlice.reducer;
// const hasMoreSlice = createSlice({
//   name: 'hasMore',
//   initialState,
//   reducers: {
//     updateHasMore: (state, action: PayloadAction<HasMore>) => {
//       return {
//         ...state,
//         value: action.payload,
//       };
//     },
//   },
// });
// export const { updateHasMore } = hasMoreSlice.actions;
// export default hasMoreSlice.reducer;
//# sourceMappingURL=pagesSlice.js.map