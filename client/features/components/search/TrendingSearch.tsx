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
import { fetchContent, fetchTrending } from '../../../utils/fetchData';
import { useHistory } from 'react-router';
// import { updateMovieData } from './searchMoviesSlice';

const REACT_APP_MOVIE_API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;
interface DataResults {
  page: number;
  total_pages: number;
  total_results: number;
  media_type?: string;
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
    vote_count?: number;
    media_type?: MediaType;
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
  const isLoading = useSelector((state: RootState) => state.isLoading.value);
  const searchStatus = useSelector(
    (state: RootState) => state.searchStatus.value
  );
  const [movieResults, updateMovieResults] = useState([]);
  const history = useHistory();
  // const movieData = useSelector((state: RootState) => state.movieData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchStatus) {
      const input = document.getElementsByName('search');
      input[0].focus();
    }
  }, []);

  useEffect(() => {
    if (category === null && history.action !== 'POP')
      dispatch(changeCategory('Movies and TV Show'));
  }, [category, dispatch]);

  useEffect(() => {
    dispatch(updateMovieData(movieResults));
  }, [dispatch, movieResults, query]);

  useEffect(() => {
    updateMovieResults([]);
  }, [query]);

  useEffect(() => {
    if (query.length === 0 || category === 'TV') {
      updateMovieResults([]);
      return;
    }

    if (!isLoading) {
      dispatch(updateLoading(true));

      fetchContent(query, 'multi', pages).then((data) => {
        updateMovieResults((prevResults) => {
          return [
            ...prevResults,
            ...data.filter((res) => {
              // filters out actors etc
              if (res.media_type === 'tv' || res.media_type === 'movie')
                return res;
            }),
          ];
        });
        dispatch(updateHasMore(data.length > 0));
        dispatch(updateLoading(false));
      });
    }
  }, [category, query, pages, dispatch]);

  useEffect(() => {
    if (query === ' ') {
      dispatch(setQuery(''));
      return;
    }

    if (!isLoading) {
      dispatch(updateLoading(true));

      if (query.length > 0) return;

      fetchTrending('multi', pages).then((resultResults) => {
        updateMovieResults((prevResults: MoviePrevResults) => {
          return [...prevResults, ...resultResults];
        });
        dispatch(updateHasMore(resultResults.length > 0));
        dispatch(updateLoading(false));
      });
    }
  }, [query, pages, dispatch]);

  return (
    <div className='divdivider'>
      <div className={theme}>
        <MovieContainer
          movieResults={movieResults}
          featuring={'Movies and TV Show'}
        />
      </div>
    </div>
  );
};

export default TrendingSearch;
