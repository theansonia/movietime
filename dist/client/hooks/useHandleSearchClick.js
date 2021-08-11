"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHandleSearchClick = void 0;
const react_redux_1 = require("react-redux");
const pagesSlice_1 = require("../appSlices/pagesSlice");
const searchStatusSlice_1 = require("../appSlices/searchStatusSlice");
const querySlice_1 = require("../features/components/search/searchSlices/querySlice");
const valueSlice_1 = require("../features/components/search/searchSlices/valueSlice");
const useHandleSearchClick = () => {
    const dispatch = react_redux_1.useDispatch();
    const searchStatus = react_redux_1.useSelector((state) => state.searchStatus.value);
    return () => {
        setTimeout(() => {
            const search = document.getElementById('search');
            if (search)
                search.focus();
            return search;
        }, 0);
        if (!searchStatus) {
            dispatch(searchStatusSlice_1.setSearchStatus(true));
            dispatch(querySlice_1.setQuery(''));
            dispatch(pagesSlice_1.updatePages(1));
            dispatch(valueSlice_1.setValue(''));
        }
    };
};
exports.useHandleSearchClick = useHandleSearchClick;
//# sourceMappingURL=useHandleSearchClick.js.map