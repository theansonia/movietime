import { useState, useEffect, FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SingleTVResult } from '../../../types';
import { changeCategory } from '../../../appSlices/categorySlice';
import { setQuery } from '../../../appSlices/querySlice';
import { RootState } from '../../../reducer';
import { updateHasMore } from '../../containers/containerSlices/hasMoreSlice';
import { updateLoading } from '../../containers/containerSlices/isLoadingSlice';
import TVContainer from '../../containers/TVContainer';
import { fetchContent, fetchTrending } from '../../../utils/fetchData';
import { useHistory } from 'react-router';

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
  const isLoading = useSelector((state: RootState) => state.isLoading.value);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (category === null && history.action !== 'POP')
      dispatch(changeCategory('TV'));
  }, []);

  useEffect(() => {
    updateTvResults([]);
  }, [query]);

  useEffect(() => {
    if (query.length === 0) {
      updateTvResults([]);
      return;
    }

    if (!isLoading) {
      dispatch(updateLoading(true));

      fetchContent(query, 'tv', pages).then((data) => {
        updateTvResults((prev) => {
          return [...prev, ...data];
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
      fetchTrending('tv', pages).then((resultResults) => {
        updateTvResults((prevResults: TVPrevResults) => {
          return [...prevResults, ...resultResults];
        });
        dispatch(updateHasMore(resultResults.length > 0));
        dispatch(updateLoading(false));
      });
    }
  }, [query, pages, dispatch]);

  return (
    <div className='divdivider'>
      <div id='scrollablediv' className={theme}>
        <TVContainer tvResults={tvResults} />
      </div>
    </div>
  );
};
