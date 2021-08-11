import { useState, useEffect, FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SingleTVResult } from '../../../types';
import { changeCategory } from '../../../appSlices/categorySlice';
import { setQuery } from '../../../appSlices/querySlice';
import { RootState } from '../../../reducer';
import { updateHasMore } from '../../containers/containerSlices/hasMoreSlice';
import { updateLoading } from '../../containers/containerSlices/isLoadingSlice';
import TVContainer from '../../containers/TVContainer';

const REACT_APP_MOVIE_API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;

export type TVPrevResults = {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  name?: string;
  video?: boolean;
  vote_average?: number;
  media_type?: string;
}[];
export interface TvData {
  page: number;
  results: SingleTVResult[];
  total_pages: number;
  total_results: number;
}

export const TvSearch: FunctionComponent = () => {
  const [tvResults, updateTvResults] = useState([]);
  const theme = useSelector((state: RootState) => state.theme.value);
  const category = useSelector((state: RootState) => state.category.value);
  const query = useSelector((state: RootState) => state.query.value);
  const pages = useSelector((state: RootState) => state.pages.value);

  const dispatch = useDispatch();
  if (category === null) dispatch(changeCategory('TV'));

  useEffect(() => {
    updateTvResults([]);
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

    if (query.length === 0) {
      updateTvResults([]);
      return;
    }
    dispatch(updateLoading(true));

    // eslint-disable-next-line no-useless-escape
    // const query = title.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, '')

    const URL = `https://api.themoviedb.org/3/search/tv?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=${pages}&include_adult=false`;

    fetch(URL)
      .then((res) => res.json())
      .then((data: TvData) => {
        updateTvResults((prevResults: TVPrevResults) => {
          const newResults = data.results.filter((result) => {
            if (result.name.includes('%')) {
              result.name = result.name.replaceAll('%', ' ');
            }
            return result;
          });
          // const resultResults = sortResults(newResults);
          const finalResults = newResults.sort((a, b) =>
            a.popularity < b.popularity ? 1 : -1
          );
          return [...prevResults, ...finalResults];
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

    const URL = `https://api.themoviedb.org/3/tv/popular?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&page=${pages}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data: TvData) => {
        updateTvResults((prevResults: TVPrevResults) => {
          const newResults = data.results.filter((result) => {
            if (result.name.includes('%')) {
              result.name = result.name.replaceAll('%', ' ');
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
      })
      .catch((error) => console.log(error));
  }, [query, pages, dispatch]);

  return (
    <div id='scrollablediv' className={theme}>
      <TVContainer tvResults={tvResults} />
    </div>
  );
};
