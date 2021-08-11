"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const core_1 = require("@emotion/core");
const Movie_1 = __importDefault(require("../components/Movie"));
const SearchBar_1 = __importDefault(require("../components/SearchBar"));
const useScroll_1 = require("../../hooks/useScroll");
const override = core_1.css `
  display: flex;
  margin: 0 auto;
  position: fixed;
  z-index: 100000;
`;
const MovieContainer = ({ movieResults, featuring, }) => {
    const color = '#6c757d';
    const query = react_redux_1.useSelector((state) => state.query.value);
    const isLoading = react_redux_1.useSelector((state) => state.isLoading.value);
    const searchStatus = react_redux_1.useSelector((state) => state.searchStatus.value);
    // const movieData = useSelector((state) => state.movieData.data);
    const dispatch = react_redux_1.useDispatch();
    const lastMovie = useScroll_1.useScroll();
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(SearchBar_1.default, { state: featuring }, void 0), !query ? (jsx_runtime_1.jsxs("div", Object.assign({ id: 'trending' }, { children: ["Featured ", featuring, "s"] }), void 0)) : (jsx_runtime_1.jsx("div", Object.assign({ id: 'trending' }, { children: "Results" }), void 0)), jsx_runtime_1.jsxs("div", Object.assign({ className: 'moviecontainer' }, { children: [movieResults.length > 0 &&
                        movieResults.map((movie, index) => {
                            if (movieResults.length === index + 1) {
                                return (jsx_runtime_1.jsx("div", Object.assign({ id: 'movies', ref: lastMovie }, { children: jsx_runtime_1.jsx(Movie_1.default, { id: movie.id, title: movie.title || movie.name, poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`, overview: movie.overview, release: movie.release_date === undefined
                                            ? null
                                            : movie.release_date.split('-')[0], aired: movie.first_air_date === undefined
                                            ? null
                                            : movie.first_air_date.split('-')[0], rating: Math.round(movie.vote_average / 2), reviews: movie.vote_count, type: movie.media_type }, `moviekeyinner-${movie.id}`) }), `moviekey-${index}`));
                            }
                            else {
                                return (jsx_runtime_1.jsx("div", Object.assign({ id: 'movies' }, { children: jsx_runtime_1.jsx(Movie_1.default, { id: movie.id, title: movie.title || movie.name, poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`, overview: movie.overview, release: movie.release_date === undefined
                                            ? null
                                            : movie.release_date.split('-')[0], aired: movie.first_air_date === undefined
                                            ? null
                                            : movie.first_air_date.split('-')[0], rating: Math.round(movie.vote_average / 2), reviews: movie.vote_count, type: movie.media_type }, movie.id + 'moviekeyinnerbutouter') }), `moviekeyagain-${index}`));
                            }
                        }), jsx_runtime_1.jsx("div", { id: 'beat' }, void 0)] }), void 0)] }, void 0));
};
exports.default = MovieContainer;
//# sourceMappingURL=MovieContainer.js.map