"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
require("./styles/App.scss");
const Search_1 = __importDefault(require("./features/components/search/Search"));
const MovieDetails_1 = __importDefault(require("./features/components/MovieDetails"));
const SearchButton_1 = __importDefault(require("./features/components/searchbutton/SearchButton"));
const TrendingSearch_1 = __importDefault(require("./features/components/search/TrendingSearch"));
const tvSearch_1 = require("./features/components/search/tvSearch");
const Details_1 = __importDefault(require("./features/components/Details"));
const Navbar_1 = __importDefault(require("./features/components/Navbar"));
function App() {
    console.log(`We are in ${process.env.NODE_ENV}`);
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(Navbar_1.default, {}, void 0), jsx_runtime_1.jsxs(react_router_dom_1.Switch, { children: [jsx_runtime_1.jsx(react_router_dom_1.Route, Object.assign({ path: '/movies' }, { children: jsx_runtime_1.jsx(Search_1.default, {}, void 0) }), void 0), jsx_runtime_1.jsx(react_router_dom_1.Route, Object.assign({ path: '/shows' }, { children: jsx_runtime_1.jsx(tvSearch_1.TvSearch, {}, void 0) }), void 0), jsx_runtime_1.jsx(react_router_dom_1.Route, Object.assign({ path: '/home' }, { children: jsx_runtime_1.jsx(TrendingSearch_1.default, {}, void 0) }), void 0), jsx_runtime_1.jsx(react_router_dom_1.Route, { path: '/tvdetails/:name', component: Details_1.default }, void 0), jsx_runtime_1.jsx(react_router_dom_1.Route, { path: '/moviedetails/:title', component: MovieDetails_1.default }, void 0)] }, void 0), jsx_runtime_1.jsx(react_router_dom_1.Route, Object.assign({ exact: true, path: '/' }, { children: jsx_runtime_1.jsx(react_router_dom_1.Redirect, { to: '/home' }, void 0) }), void 0), jsx_runtime_1.jsx(SearchButton_1.default, {}, void 0)] }, void 0));
}
exports.default = App;
//# sourceMappingURL=App.js.map