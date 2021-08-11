"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-unsafe-return */
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const categorySlice_1 = require("../../../appSlices/categorySlice");
const querySlice_1 = require("../../../appSlices/querySlice");
const hasMoreSlice_1 = require("../../containers/containerSlices/hasMoreSlice");
const isLoadingSlice_1 = require("../../containers/containerSlices/isLoadingSlice");
const MovieContainer_1 = __importDefault(require("../../containers/MovieContainer"));
// import { updateMovieData } from './searchMoviesSlice';
const REACT_APP_MOVIE_API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;
const Search = () => {
    const [movieResults, updateMovieResults] = react_1.useState([]);
    const theme = react_redux_1.useSelector((state) => state.theme.value);
    const pages = react_redux_1.useSelector((state) => state.pages.value);
    const category = react_redux_1.useSelector((state) => state.category.value);
    const query = react_redux_1.useSelector((state) => state.query.value);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // const movieData = useSelector((state: RootState) => state.movieData);
    const dispatch = react_redux_1.useDispatch();
    if (category === null)
        dispatch(categorySlice_1.changeCategory('movie'));
    react_1.useEffect(() => {
        updateMovieResults([]);
    }, [query]);
    react_1.useEffect(() => {
        if (query === ' ' ||
            query === '.' ||
            query === '/' ||
            query === '$' ||
            query === '%' ||
            query === '#' ||
            query === '&' ||
            query === '+' ||
            query === '#' ||
            query === '+' ||
            query === '#') {
            dispatch(querySlice_1.setQuery(''));
            return;
        }
        if (query === '`') {
            dispatch(querySlice_1.setQuery("'"));
            return;
        }
        if (query.length === 0 || category === 'TV') {
            updateMovieResults([]);
            return;
        }
        dispatch(isLoadingSlice_1.updateLoading(true));
        // eslint-disable-next-line no-useless-escape
        // query = query.replaceAll(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')
        // const query = testTitle
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=${pages}&include_adult=false`;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
            updateMovieResults((prevResults) => {
                const newResults = data.results.filter((result) => {
                    if (result.title.includes('%')) {
                        result.title = result.title.replaceAll('%', ' ');
                    }
                    return result;
                });
                const finalResults = newResults.sort((a, b) => a.popularity < b.popularity ? 1 : -1);
                return [...prevResults, ...finalResults];
            });
            dispatch(hasMoreSlice_1.updateHasMore(data.results.length > 0));
            dispatch(isLoadingSlice_1.updateLoading(false));
            // storeMovieData(data)
        })
            .catch((error) => console.log(error));
    }, [category, query, pages, dispatch]);
    react_1.useEffect(() => {
        if (query === ' ') {
            dispatch(querySlice_1.setQuery(''));
            return;
        }
        dispatch(isLoadingSlice_1.updateLoading(true));
        if (query.length > 0)
            return;
        // if (title === undefined || title.length === 0) updateMovieResults([]);
        const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&page=${pages}`;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
            updateMovieResults((prevResults) => {
                const newResults = data.results.filter((result) => {
                    if (result.title.includes('%')) {
                        result.title = result.title.replaceAll('%', ' ');
                    }
                    return result;
                });
                const finalResults = newResults.sort((a, b) => a.popularity < b.popularity ? 1 : -1);
                return [...prevResults, ...finalResults];
            });
            dispatch(hasMoreSlice_1.updateHasMore(data.results.length > 0));
            dispatch(isLoadingSlice_1.updateLoading(false));
        })
            .catch((error) => console.log(error));
    }, [query, pages, dispatch]);
    return (jsx_runtime_1.jsx("div", Object.assign({ className: `'' + ${theme}` }, { children: jsx_runtime_1.jsx(MovieContainer_1.default, { movieResults: movieResults, featuring: 'Movie' }, void 0) }), void 0));
};
exports.default = Search;
//# sourceMappingURL=Search.js.map