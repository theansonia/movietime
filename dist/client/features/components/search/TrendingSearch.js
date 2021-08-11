"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaType = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const sortResults_1 = require("../../../utils/sortResults");
const categorySlice_1 = require("../../../appSlices/categorySlice");
// import { MovieResults } from '../../../types';
const querySlice_1 = require("../../../appSlices/querySlice");
const hasMoreSlice_1 = require("../../containers/containerSlices/hasMoreSlice");
const isLoadingSlice_1 = require("../../containers/containerSlices/isLoadingSlice");
const searchMoviesSlice_1 = require("./searchMoviesSlice");
const MovieContainer_1 = __importDefault(require("../../containers/MovieContainer"));
// import { updateMovieData } from './searchMoviesSlice';
const REACT_APP_MOVIE_API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;
var MediaType;
(function (MediaType) {
    MediaType["Movie"] = "movie";
    MediaType["Tv"] = "tv";
})(MediaType = exports.MediaType || (exports.MediaType = {}));
const TrendingSearch = () => {
    const category = react_redux_1.useSelector((state) => state.category.value);
    const pages = react_redux_1.useSelector((state) => state.pages.value);
    const theme = react_redux_1.useSelector((state) => state.theme.value);
    const query = react_redux_1.useSelector((state) => state.query.value);
    const [movieResults, updateMovieResults] = react_1.useState([]);
    // const movieData = useSelector((state: RootState) => state.movieData.data);
    const dispatch = react_redux_1.useDispatch();
    react_1.useEffect(() => {
        if (category === null)
            dispatch(categorySlice_1.changeCategory('Movies and TV Show'));
    }, [category, dispatch]);
    react_1.useEffect(() => {
        dispatch(searchMoviesSlice_1.updateMovieData(movieResults));
    }, [dispatch, movieResults, query]);
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
            query === '?' ||
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
        // const query = title.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')
        const URL = `https://api.themoviedb.org/3/search/multi?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=${pages}&include_adult=false&`;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
            updateMovieResults((prevResults) => {
                const newResults = data.results.filter((result) => {
                    if (result.media_type === 'movie' && result.title.includes('%')) {
                        result.title = result.title.replaceAll('%', ' ');
                    }
                    else if (result.media_type === 'tv' &&
                        result.name.includes('%')) {
                        result.name = result.name.replaceAll('%', ' ');
                    }
                    return result;
                });
                const resultResults = sortResults_1.sortResults(newResults);
                return [
                    ...prevResults,
                    ...resultResults.filter((res) => {
                        // filters out actors etc
                        if (res.media_type === 'tv' || res.media_type === 'movie')
                            return res;
                    }),
                ];
            });
            dispatch(hasMoreSlice_1.updateHasMore(data.results.length > 0));
            dispatch(isLoadingSlice_1.updateLoading(false));
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
        const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&page=${pages}`;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
            updateMovieResults((prevResults) => {
                const newResults = data.results.filter((result) => {
                    if (result.media_type === 'movie' && result.title.includes('%')) {
                        result.title = result.title.replaceAll('%', ' ');
                    }
                    else if (result.media_type === 'tv' &&
                        result.name.includes('%')) {
                        result.name = result.name.replaceAll('%', ' ');
                    }
                    return result;
                });
                const resultResults = sortResults_1.sortResults(newResults);
                return [...prevResults, ...resultResults];
            });
            dispatch(hasMoreSlice_1.updateHasMore(data.results.length > 0));
            dispatch(isLoadingSlice_1.updateLoading(false));
        })
            .catch((error) => console.log(error));
    }, [query, pages, dispatch]);
    // console.log(movieResults);
    return (jsx_runtime_1.jsx("div", Object.assign({ className: theme }, { children: jsx_runtime_1.jsx(MovieContainer_1.default, { movieResults: movieResults, featuring: 'Movies and TV Show' }, void 0) }), void 0));
};
exports.default = TrendingSearch;
//# sourceMappingURL=TrendingSearch.js.map