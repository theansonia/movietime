"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
// import { RouteComponentProps } from 'react-router';
const handleKeyPress_1 = require("../../utils/handleKeyPress");
const pagesSlice_1 = require("../../appSlices/pagesSlice");
const querySlice_1 = require("../../appSlices/querySlice");
const valueSlice_1 = require("./search/searchSlices/valueSlice");
const useDebounce_1 = require("../../hooks/useDebounce");
// eslint-disable-next-line react/display-name
const SearchBar = (props) => {
    const searchStatus = react_redux_1.useSelector((state) => state.searchStatus.value);
    const dispatch = react_redux_1.useDispatch();
    const [localCategory, setLocalCategory] = react_1.useState(props.state);
    const debouncedQuery = useDebounce_1.useDebounce();
    react_1.useEffect(() => {
        if (localCategory === 'TV')
            setLocalCategory('TV Show');
    }, [localCategory]);
    react_1.useEffect(() => {
        dispatch(valueSlice_1.setValue(debouncedQuery));
    }, [debouncedQuery, dispatch]);
    return (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: searchStatus && (jsx_runtime_1.jsxs("div", Object.assign({ id: 'searchbar' }, { children: [jsx_runtime_1.jsx("div", Object.assign({ id: 'x', onClick: () => {
                        dispatch(querySlice_1.setQuery(''));
                        dispatch(pagesSlice_1.updatePages(1));
                        dispatch(valueSlice_1.setValue(''));
                    }, onKeyDown: (e) => handleKeyPress_1.handleKeyPress(e), role: 'button', tabIndex: 0 }, { children: jsx_runtime_1.jsx("svg", Object.assign({ width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, { children: jsx_runtime_1.jsx("path", { id: 'xpath', fillRule: 'evenodd', clipRule: 'evenodd', d: 'M12 0C18.623 0 24 5.377 24 12C24 18.623 18.623 24 12 24C5.377 24 0 18.623 0 12C0 5.377 5.377 0 12 0ZM12 1C18.071 1 23 5.929 23 12C23 18.071 18.071 23 12 23C5.929 23 1 18.071 1 12C1 5.929 5.929 1 12 1ZM12 11.293L17.293 6L18 6.707L12.707 12L18 17.293L17.293 18L12 12.707L6.707 18L6 17.293L11.293 12L6 6.707L6.707 6L12 11.293Z', fill: '#F8F9FA' }, void 0) }), void 0) }), void 0), jsx_runtime_1.jsx("form", Object.assign({ onSubmit: (e) => {
                        e.preventDefault();
                        const { value } = e.target[0];
                        dispatch(querySlice_1.setQuery(value));
                    } }, { children: jsx_runtime_1.jsx("input", { id: 'search', list: 'movie', placeholder: `Search for ${localCategory}s`, onChange: (e) => dispatch(valueSlice_1.setValue(e.target.value)), type: 'search', value: debouncedQuery }, void 0) }), void 0)] }), void 0)) }, void 0));
};
exports.default = SearchBar;
//# sourceMappingURL=SearchBar.js.map