"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebounce = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const querySlice_1 = require("../features/components/search/searchSlices/querySlice");
const lodash_debounce_1 = __importDefault(require("lodash.debounce"));
const valueSlice_1 = require("../features/components/search/searchSlices/valueSlice");
function useDebounce() {
    const dispatch = react_redux_1.useDispatch();
    const value = react_redux_1.useSelector((state) => state.value.value);
    const debouncedSearch = react_1.useMemo(() => lodash_debounce_1.default((val) => {
        dispatch(querySlice_1.setQuery(val));
    }, 300), [dispatch]);
    const handleChange = react_1.useCallback((initialValue) => {
        dispatch(valueSlice_1.setValue(initialValue));
        debouncedSearch(initialValue);
    }, [debouncedSearch, dispatch]);
    react_1.useEffect(() => {
        handleChange(value);
    }, [handleChange, value]);
    return value;
}
exports.useDebounce = useDebounce;
//# sourceMappingURL=useDebounce.js.map