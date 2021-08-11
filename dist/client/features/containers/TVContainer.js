"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const Show_1 = __importDefault(require("../components/Show"));
const SearchBar_1 = __importDefault(require("../components/SearchBar"));
const core_1 = require("@emotion/core");
const querySlice_1 = require("../../appSlices/querySlice");
const useScroll_1 = require("../../hooks/useScroll");
const override = core_1.css `
  display: flex;
  margin: 0 auto;
  position: fixed;
  z-index: 100000;
`;
const TVContainer = ({ tvResults }) => {
    const dispatch = react_redux_1.useDispatch();
    const [color, updateColor] = react_1.useState('#6c757d');
    // const category = useSelector((state) => state.category.value);
    const query = react_redux_1.useSelector((state) => state.query.value);
    const hasMore = react_redux_1.useSelector((state) => state.hasMore.value);
    const pages = react_redux_1.useSelector((state) => state.pages.value);
    const isLoading = react_redux_1.useSelector((state) => state.isLoading.value);
    const lastShow = useScroll_1.useScroll();
    return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx(SearchBar_1.default, { state: 'TV' }, void 0), !query ? (jsx_runtime_1.jsx("div", Object.assign({ id: 'trending' }, { children: "Featured TV Shows" }), void 0)) : (jsx_runtime_1.jsx("div", Object.assign({ id: 'trending' }, { children: "Results" }), void 0)), jsx_runtime_1.jsx("div", Object.assign({ className: 'moviecontainer' }, { children: tvResults.length === 0
                    ? null
                    : tvResults.map((movie, index) => {
                        if (tvResults.length === index + 1) {
                            return (jsx_runtime_1.jsx("div", Object.assign({ id: 'movies', ref: lastShow, onClick: () => dispatch(querySlice_1.setQuery(movie.name)) }, { children: jsx_runtime_1.jsx(Show_1.default, { id: movie.id, name: movie.name, poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`, overview: movie.overview, release: movie.release_date === undefined
                                        ? null
                                        : movie.first_air_date.split('-')[0], aired: movie.first_air_date === undefined
                                        ? null
                                        : movie.first_air_date.split('-')[0], rating: Math.round(movie.vote_average / 2), reviews: movie.vote_count, type: movie.media_type }, `showkeyinner-${movie.id}`) }), `showkey-${index}`));
                        }
                        else {
                            return (jsx_runtime_1.jsx("div", Object.assign({ id: 'movies', onClick: () => dispatch(querySlice_1.setQuery(movie.name)) }, { children: jsx_runtime_1.jsx(Show_1.default, { id: movie.id, name: movie.name, poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`, overview: movie.overview, release: movie.first_air_date === undefined
                                        ? null
                                        : movie.first_air_date.split('-')[0], aired: movie.first_air_date === undefined
                                        ? null
                                        : movie.first_air_date.split('-')[0], rating: Math.round(movie.vote_average / 2), reviews: movie.vote_count, type: movie.media_type }, movie.id + 'moviekeyinnerbutouter') }), `keyout--${index}`));
                        }
                    }) }), void 0)] }, void 0));
};
exports.default = TVContainer;
//# sourceMappingURL=TVContainer.js.map