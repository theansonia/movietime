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
    history.listen((location) => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key]);
      }

      if (history.action === 'POP') {
        const state = JSON.parse(sessionStorage.getItem('state'));
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

  useEffect(() => {
    if (persistentState) {
      if (persistentState.query) dispatch(setQuery(persistentState.query));
      if (persistentState.hasMore)
        dispatch(updateHasMore(persistentState.hasMore));
      if (persistentState.pages)
        dispatch(updatePages(persistentState.pages.value));
      if (persistentState.category)
        dispatch(updatePages(persistentState.category.value));
      if (persistentState.isLoading)
        dispatch(updatePages(persistentState.isLoading.value));
      if (persistentState.theme)
        dispatch(updatePages(persistentState.theme.value));
      if (persistentState.movieData)
        dispatch(updatePages(persistentState.movieData));
      if (persistentState.value)
        dispatch(updatePages(persistentState.value.value));
    }
  }, [persistentState]);

  return [persistentState, setPersistentState];
};