"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const categorySlice_1 = require("../../appSlices/categorySlice");
const searchStatusSlice_1 = require("../../appSlices/searchStatusSlice");
const Stars_1 = __importDefault(require("./Stars"));
const Movie = ({ title, poster, overview, release, rating, reviews, type, aired, id, }) => {
    const dispatch = react_redux_1.useDispatch();
    return (jsx_runtime_1.jsxs("div", Object.assign({ id: 'movies' }, { children: [jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ onClick: () => {
                    dispatch(searchStatusSlice_1.setSearchStatus(false));
                    dispatch(categorySlice_1.changeCategory(null));
                }, style: { textDecoration: 'none' }, 
                // eslint-disable-next-line no-useless-escape
                to: {
                    pathname: `/moviedetails/${title.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')}`,
                    state: { id: id, type: type },
                } }, { children: jsx_runtime_1.jsx("div", Object.assign({ id: 'poster' }, { children: poster !== 'https://image.tmdb.org/t/p/w500/null' &&
                        poster !== 'https://image.tmdb.org/t/p/w500/undefined' ? (jsx_runtime_1.jsx("img", { id: 'poster', src: poster, alt: `Movie poster for ${title}` }, void 0)) : (jsx_runtime_1.jsx("img", { id: 'poster', src: 'https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg', alt: 'back up movie poster cinema pardiso' }, void 0)) }), void 0) }), void 0), jsx_runtime_1.jsxs("div", Object.assign({ id: 'details' }, { children: [jsx_runtime_1.jsxs(react_router_dom_1.Link, Object.assign({ onClick: () => {
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
                            pathname: `/moviedetails/${title.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')}`,
                            state: { id: id, type: type },
                        } }, { children: [title ? jsx_runtime_1.jsx("div", Object.assign({ id: 'title' }, { children: title }), void 0) : null, jsx_runtime_1.jsx("div", Object.assign({ id: 'type' }, { children: type && type.length === 2 ? type.toUpperCase() : null }), void 0), jsx_runtime_1.jsx("div", Object.assign({ id: 'type' }, { children: type && type.length > 2
                                    ? type[0].toUpperCase() + type.substring(1)
                                    : null }), void 0)] }), void 0), release ? jsx_runtime_1.jsxs("div", Object.assign({ id: 'release' }, { children: ["Premiered ", release] }), void 0) : null, aired ? jsx_runtime_1.jsxs("div", Object.assign({ id: 'release' }, { children: ["First Aired ", aired] }), void 0) : null, jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ onClick: () => {
                            dispatch(searchStatusSlice_1.setSearchStatus(false));
                            dispatch(categorySlice_1.changeCategory(null));
                        }, style: {
                            textDecoration: 'none',
                            fontSize: '1.4em',
                            marginBottom: '.5em',
                            fontWeight: 'normal',
                            color: 'inherit',
                        }, to: {
                            pathname: `/moviedetails/${title.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')}`,
                            state: { id: id, type: type },
                        } }, { children: jsx_runtime_1.jsx("div", Object.assign({ id: 'overview' }, { children: overview }), void 0) }), void 0), rating ? (jsx_runtime_1.jsx("div", Object.assign({ id: 'rating' }, { children: rating ? jsx_runtime_1.jsx(Stars_1.default, { rating: rating, reviews: reviews }, void 0) : 'No Rating' }), void 0)) : null] }), void 0)] }), void 0));
};
exports.default = Movie;
//# sourceMappingURL=Movie.js.map