/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FunctionComponent } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MoviePrevResults, sortResults } from '../../../utils/sortResults';
import { changeCategory } from '../../../appSlices/categorySlice';
// import { MovieResults } from '../../../types';
import { setQuery } from '../../../appSlices/querySlice';
import { RootState } from '../../../reducer';
import { updateHasMore } from '../../containers/containerSlices/hasMoreSlice';
import { updateLoading } from '../../containers/containerSlices/isLoadingSlice';
import { updateMovieData } from './searchMoviesSlice';
import MovieContainer from '../../containers/MovieContainer';
// import { updateMovieData } from './searchMoviesSlice';

const REACT_APP_MOVIE_API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;
interface DataResults {
  page: number;
  total_pages: number;
  total_results: number;
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    name: string;
    video: boolean;
    vote_average: number;
    media_type: MediaType;
  }[];
}

export enum MediaType {
  Movie = 'movie',
  Tv = 'tv',
}

const TrendingSearch: FunctionComponent = () => {
  const category = useSelector((state: RootState) => state.category.value);
  const pages = useSelector((state: RootState) => state.pages.value);
  const theme = useSelector((state: RootState) => state.theme.value);
  const query = useSelector((state: RootState) => state.query.value);
  const [movieResults, updateMovieResults] = useState([]);
  // const movieData = useSelector((state: RootState) => state.movieData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (category === null) dispatch(changeCategory('Movies and TV Show'));
  }, [category, dispatch]);

  useEffect(() => {
    dispatch(updateMovieData(movieResults));
  }, [dispatch, movieResults, query]);

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
      query === '?' ||
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
    // const query = title.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')

    const URL = `https://api.themoviedb.org/3/search/multi?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=${pages}&include_adult=false&`;
    fetch(URL)
      .then((res) => res.json())
      .then((data: DataResults) => {
        updateMovieResults((prevResults: MoviePrevResults) => {
          const newResults = data.results.filter((result) => {
            if (result.media_type === 'movie' && result.title.includes('%')) {
              result.title = result.title.replaceAll('%', ' ');
            } else if (
              result.media_type === 'tv' &&
              result.name.includes('%')
            ) {
              result.name = result.name.replaceAll('%', ' ');
            }
            return result;
          });
          const resultResults = sortResults(newResults);
          return [
            ...prevResults,
            ...resultResults.filter((res) => {
              // filters out actors etc
              if (res.media_type === 'tv' || res.media_type === 'movie')
                return res;
            }),
          ];
        });
        dispatch(updateHasMore(data.results.length > 0));
        dispatch(updateLoading(false));
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

    const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&page=${pages}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data: DataResults) => {
        updateMovieResults((prevResults: MoviePrevResults) => {
          const newResults = data.results.filter((result) => {
            if (result.media_type === 'movie' && result.title.includes('%')) {
              result.title = result.title.replaceAll('%', ' ');
            } else if (
              result.media_type === 'tv' &&
              result.name.includes('%')
            ) {
              result.name = result.name.replaceAll('%', ' ');
            }
            return result;
          });
          const resultResults = sortResults(newResults);
          return [...prevResults, ...resultResults];
        });
        dispatch(updateHasMore(data.results.length > 0));
        dispatch(updateLoading(false));
      })
      .catch((error) => console.log(error));
  }, [query, pages, dispatch]);

  // console.log(movieResults);
  return (
    <div className={theme}>
      <MovieContainer
        movieResults={movieResults}
        featuring={'Movies and TV Show'}
      />
    </div>
  );
};

export default TrendingSearch;
