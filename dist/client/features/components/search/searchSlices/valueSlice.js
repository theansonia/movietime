"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setValue = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    value: '',
};
const valueSlice = toolkit_1.createSlice({
    name: 'value',
    initialState,
    reducers: {
        setValue: (state, action) => {
            return {
                ...state,
                value: action.payload,
            };
        },
    },
});
exports.setValue = valueSlice.actions.setValue;
exports.default = valueSlice.reducer;
//# sourceMappingURL=valueSlice.js.map