import { setQuery } from '../appSlices/querySlice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PersistentState } from '../types/index';
import { updateHasMore } from '../../client/features/containers/containerSlices/hasMoreSlice';
import { updatePages } from '../appSlices/pagesSlice';

export const useLocationHistory = () => {
  const [locationKeys, setLocationKeys] = useState([]);
  const [persistentState, setPersistentState] = useState<PersistentState>();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen(async (location) => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key]);
      }

      if (history.action === 'POP') {
        const state = await JSON.parse(sessionStorage.getItem('state'));
        resetState(state);
        setPersistentState(state);
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys);

          // Handle forward event
        } else {
          setLocationKeys((keys) => [location.key, ...keys]);
          // Handle back event
        }
      }
    });
  }, [locationKeys]);

  const resetState = (state: {
    query: string;
    hasMore: { value: boolean };
    pages: { value: number };
    category: { value: number };
    isLoading: { value: number };
    theme: { value: number };
    movieData: number;
    value: { value: number };
  }) => {
    if (state) {
      if (state.query) dispatch(setQuery(state.query));
      if (state.hasMore) dispatch(updateHasMore(persistentState.hasMore));
      if (state.pages) dispatch(updatePages(persistentState.pages.value));
      if (state.category) dispatch(updatePages(persistentState.category.value));
      if (state.isLoading)
        dispatch(updatePages(persistentState.isLoading.value));
      if (state.theme) dispatch(updatePages(persistentState.theme.value));
      if (state.movieData) dispatch(updatePages(persistentState.movieData));
      if (state.value) dispatch(updatePages(persistentState.value.value));
    }
    return persistentState;
  };
};
