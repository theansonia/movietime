"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLightTheme = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    value: 'lightmode',
};
const toggleThemeSlice = toolkit_1.createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setLightTheme: (state, action) => {
            return {
                ...state,
                value: action.payload,
            };
        },
    },
});
exports.setLightTheme = toggleThemeSlice.actions.setLightTheme;
exports.default = toggleThemeSlice.reducer;
//# sourceMappingURL=toggleThemeSlice.js.map