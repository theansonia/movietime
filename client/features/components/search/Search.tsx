/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useState, useEffect } from 'react';
import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MoviePrevResults } from '../../../utils/sortResults';
import { changeCategory } from '../../../appSlices/categorySlice';
import { setQuery } from '../../../appSlices/querySlice';
import { RootState } from '../../../reducer';
import { updateHasMore } from '../../containers/containerSlices/hasMoreSlice';
import { updateLoading } from '../../containers/containerSlices/isLoadingSlice';
import MovieContainer from '../../containers/MovieContainer';
// import { updateMovieData } from './searchMoviesSlice';

const REACT_APP_MOVIE_API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;
export interface DataResults {
  poster_path: string;
  page: number;
  total_pages: number;
  total_results: number;
  original_language: string;
  US: string;
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    US: 'US';
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
  }[];
}

const Search: FunctionComponent = () => {
  const [movieResults, updateMovieResults] = useState([]);
  const theme = useSelector((state: RootState) => state.theme.value);
  const pages = useSelector((state: RootState) => state.pages.value);
  const category = useSelector((state: RootState) => state.category.value);
  const query = useSelector((state: RootState) => state.query.value);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  // const movieData = useSelector((state: RootState) => state.movieData);

  const dispatch = useDispatch();

  if (category === null) dispatch(changeCategory('movie'));

  useEffect(() => {
    updateMovieResults([]);
  }, [query]);

  useEffect(() => {
    if (
      query === ' ' ||
      query === '.' ||
      query === '/' ||
      query === '$' ||
      query === '%' ||
      query === '#' ||
      query === '&' ||
      query === '+' ||
      query === '#' ||
      query === '+' ||
      query === '#'
    ) {
      dispatch(setQuery(''));
      return;
    }

    if (query === '`') {
      dispatch(setQuery("'"));
      return;
    }

    if (query.length === 0 || category === 'TV') {
      updateMovieResults([]);
      return;
    }
    dispatch(updateLoading(true));

    // eslint-disable-next-line no-useless-escape
    // query = query.replaceAll(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')
    // const query = testTitle

    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=${pages}&include_adult=false`;
    fetch(URL)
      .then((res) => res.json())
      .then((data: DataResults) => {
        updateMovieResults((prevResults: MoviePrevResults) => {
          const newResults = data.results.filter((result) => {
            if (result.title.includes('%')) {
              result.title = result.title.replaceAll('%', ' ');
            }
            return result;
          });
          const finalResults = newResults.sort((a, b) =>
            a.popularity < b.popularity ? 1 : -1
          );
          return [...prevResults, ...finalResults];
        });
        dispatch(updateHasMore(data.results.length > 0));
        dispatch(updateLoading(false));
        // storeMovieData(data)
      })
      .catch((error) => console.log(error));
  }, [category, query, pages, dispatch]);

  useEffect(() => {
    if (query === ' ') {
      dispatch(setQuery(''));
      return;
    }
    dispatch(updateLoading(true));

    if (query.length > 0) return;
    // if (title === undefined || title.length === 0) updateMovieResults([]);

    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&page=${pages}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data: DataResults) => {
        updateMovieResults((prevResults: MoviePrevResults) => {
          const newResults = data.results.filter(
            (result: { title: string }) => {
              if (result.title.includes('%')) {
                result.title = result.title.replaceAll('%', ' ');
              }
              return result;
            }
          );
          const finalResults = newResults.sort((a, b) =>
            a.popularity < b.popularity ? 1 : -1
          );
          return [...prevResults, ...finalResults];
        });
        dispatch(updateHasMore(data.results.length > 0));
        dispatch(updateLoading(false));
      })
      .catch((error) => console.log(error));
  }, [query, pages, dispatch]);

  return (
    <div className={`'' + ${theme}`}>
      <MovieContainer movieResults={movieResults} featuring={'Movie'} />
    </div>
  );
};

export default Search;
