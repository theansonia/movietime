/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useState, useEffect } from 'react';
import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MoviePrevResults } from '../../../utils/sortResults';
import { changeCategory } from '../search/searchSlices/categorySlice';
import { setQuery } from '../search/searchSlices/querySlice';
import { RootState } from '../../../reducer';
import { updateHasMore } from '../../containers/containerSlices/hasMoreSlice';
import { updateLoading } from '../../containers/containerSlices/isLoadingSlice';
import MovieContainer from '../../containers/MovieContainer';
import { fetchContent, fetchTrending } from '../../../utils/fetchData';
import { useHistory } from 'react-router';
// import { updateMovieData } from './searchMoviesSlice';
export interface DataResults {
  poster_path: string;
  page: number;
  total_pages: number;
  total_results: number;
  original_language: string;
  media_type?: string;
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
    media_type?: string;
    vote_count?: number;
  }[];
}

const Search: FunctionComponent = () => {
  const [movieResults, updateMovieResults] = useState([]);

  const pages = useSelector((state: RootState) => state.pages.value);
  const category = useSelector((state: RootState) => state.category.value);
  const query = useSelector((state: RootState) => state.query.value);
  const isLoading = useSelector((state: RootState) => state.isLoading.value);
  const history = useHistory();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  // const movieData = useSelector((state: RootState) => state.movieData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (category === null && history.action !== 'POP')
      dispatch(changeCategory('movie'));
  }, []);

  useEffect(() => {
    updateMovieResults([]);
  }, [query]);

  useEffect(() => {
    if (!isLoading) {
      if (query.length === 0 || category === 'TV') {
        updateMovieResults([]);
        return;
      }

      dispatch(updateLoading(true));

      fetchContent(query, 'movie', pages).then((data) => {
        updateMovieResults((prev) => {
          return [...prev, ...data];
        });
        dispatch(updateHasMore(data.length > 0));
        dispatch(updateLoading(false));
      });
    }
  }, [category, query, pages]);

  useEffect(() => {
    if (query === ' ') {
      dispatch(setQuery(''));
      return;
    }

    if (!isLoading) {
      dispatch(updateLoading(true));

      if (query.length > 0) return;

      fetchTrending('movie', pages).then((resultResults) => {
        updateMovieResults((prevResults: MoviePrevResults) => {
          return [...prevResults, ...resultResults];
        });
        dispatch(updateHasMore(resultResults.length > 0));
        dispatch(updateLoading(false));
      });
    }
  }, [query, pages]);

  return (
    <div className='divdivider'>
      <MovieContainer movieResults={movieResults} featuring={'Movie'} />
    </div>
  );
};

export default Search;
