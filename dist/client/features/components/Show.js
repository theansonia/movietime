"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Stars_1 = __importDefault(require("./Stars"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const searchStatusSlice_1 = require("../../appSlices/searchStatusSlice");
const categorySlice_1 = require("../../appSlices/categorySlice");
const Show = ({ name, poster, overview, release, rating, reviews, id, }) => {
    const dispatch = react_redux_1.useDispatch();
    return (jsx_runtime_1.jsxs("div", Object.assign({ id: 'movies' }, { children: [jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ onClick: () => {
                    dispatch(searchStatusSlice_1.setSearchStatus(false));
                    dispatch(categorySlice_1.changeCategory(null));
                }, style: { textDecoration: 'none' }, 
                // eslint-disable-next-line no-useless-escape
                to: {
                    pathname: `/tvdetails/${name.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')}`,
                    state: { id: id, name: name },
                } }, { children: jsx_runtime_1.jsx("div", Object.assign({ id: 'poster' }, { children: poster !== 'https://image.tmdb.org/t/p/w500/null' &&
                        poster !== 'https://image.tmdb.org/t/p/w500/undefined' ? (jsx_runtime_1.jsx("img", { id: 'poster', src: poster, alt: `TV poster for ${name}` }, void 0)) : (jsx_runtime_1.jsx("img", { id: 'poster', src: 'https://image.tmdb.org/t/p/w500//aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg', alt: 'back up tv poster of seinfeld' }, void 0)) }), void 0) }), void 0), jsx_runtime_1.jsxs("div", Object.assign({ id: 'details' }, { children: [jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ onClick: () => {
                            dispatch(searchStatusSlice_1.setSearchStatus(false));
                            dispatch(categorySlice_1.changeCategory(null));
                        }, style: {
                            textDecoration: 'none',
                            fontSize: '1em',
                            marginBottom: '.5em',
                            fontWeight: 'bold',
                            marginTop: '.5em',
                            color: 'inherit',
                        }, to: {
                            pathname: `/tvdetails/${name.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')}`,
                            state: { id: id, name: name },
                        } }, { children: name ? jsx_runtime_1.jsx("div", Object.assign({ id: 'title' }, { children: name }), void 0) : null }), void 0), release ? jsx_runtime_1.jsxs("div", Object.assign({ id: 'release' }, { children: ["First Aired ", release] }), void 0) : null, jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ onClick: () => {
                            dispatch(searchStatusSlice_1.setSearchStatus(false));
                            dispatch(categorySlice_1.changeCategory(null));
                        }, style: {
                            textDecoration: 'none',
                            fontSize: '1.4em',
                            marginBottom: '.5em',
                            fontWeight: 'normal',
                            color: 'inherit',
                        }, to: {
                            pathname: `/tvdetails/${name.replace(
                            // eslint-disable-next-line no-useless-escape
                            /[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')}`,
                            state: { id: id, name: name },
                        } }, { children: jsx_runtime_1.jsx("div", Object.assign({ id: 'overview' }, { children: overview }), void 0) }), void 0), rating ? (jsx_runtime_1.jsx("div", Object.assign({ id: 'rating' }, { children: rating ? jsx_runtime_1.jsx(Stars_1.default, { rating: rating, reviews: reviews }, void 0) : 'No Rating' }), void 0)) : null] }), void 0)] }), void 0));
};
exports.default = Show;
//# sourceMappingURL=Show.js.map