"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const handleKeyPress_1 = require("../../utils/handleKeyPress");
const categorySlice_1 = require("../../appSlices/categorySlice");
const pagesSlice_1 = require("../../appSlices/pagesSlice");
const querySlice_1 = require("../../appSlices/querySlice");
const searchStatusSlice_1 = require("../../appSlices/searchStatusSlice");
const valueSlice_1 = require("./search/searchSlices/valueSlice");
const ToggleTheme_1 = __importDefault(require("./toggleTheme/ToggleTheme"));
const Navbar = () => {
    const dispatch = react_redux_1.useDispatch();
    const handleClick = () => {
        dispatch(querySlice_1.setQuery(''));
        dispatch(valueSlice_1.setValue(''));
        dispatch(pagesSlice_1.updatePages(1));
        dispatch(searchStatusSlice_1.setSearchStatus(false));
    };
    return (jsx_runtime_1.jsxs("div", Object.assign({ id: 'navbar' }, { children: [jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ to: '/home', id: 'homebutton' }, { children: jsx_runtime_1.jsx("div", Object.assign({ "data-testid": 'homebtn', onClick: () => {
                        dispatch(categorySlice_1.changeCategory('Movies and TV Show'));
                        handleClick();
                    }, onKeyDown: handleKeyPress_1.handleKeyPress, role: 'button', tabIndex: 0 }, { children: jsx_runtime_1.jsxs("svg", Object.assign({ id: 'homebtn', width: '48', height: '48', viewBox: '0 0 24 24', fill: '', xmlns: 'http://www.w3.org/2000/svg' }, { children: [jsx_runtime_1.jsxs("g", Object.assign({ clipPath: 'url(#clip0)' }, { children: [jsx_runtime_1.jsx("rect", { width: '24', height: '24', fill: '#212529' }, void 0), jsx_runtime_1.jsx("path", { id: 'homepath', fillRule: 'evenodd', clipRule: 'evenodd', d: 'M22 11.414V24H2V11.414L0.707 12.707L0 12L12 0L24 12L23.293 12.707L22 11.414ZM16 23H21V10.414L12 1.414L3 10.414V23H8V14H16V23ZM15 15.111H9V22.889H15V15.111Z', fill: '#F8F9FA' }, void 0)] }), void 0), jsx_runtime_1.jsx("defs", { children: jsx_runtime_1.jsx("clipPath", Object.assign({ id: 'clip0' }, { children: jsx_runtime_1.jsx("rect", { width: '24', height: '24', fill: 'white' }, void 0) }), void 0) }, void 0)] }), void 0) }), void 0) }), void 0), jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ id: 'filmbutton', to: '/movies', className: 'option', onClick: () => {
                    dispatch(categorySlice_1.changeCategory('Movie'));
                    handleClick();
                }, onKeyDown: handleKeyPress_1.handleKeyPress, role: 'button', tabIndex: 0 }, { children: jsx_runtime_1.jsx("div", { children: "Movies" }, void 0) }), void 0), jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ id: 'tvbutton', to: '/shows', className: 'option', onClick: () => {
                    dispatch(categorySlice_1.changeCategory('TV'));
                    handleClick();
                }, onKeyDown: handleKeyPress_1.handleKeyPress, role: 'button', tabIndex: 0 }, { children: jsx_runtime_1.jsx("div", { children: "TV Shows" }, void 0) }), void 0), jsx_runtime_1.jsx(ToggleTheme_1.default, {}, void 0)] }), void 0));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map