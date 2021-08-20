import { setQuery } from '../appSlices/querySlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Datum, MovieData, PersistentState } from '../types/index';
import { updateHasMore } from '../../client/features/containers/containerSlices/hasMoreSlice';
import { updatePages } from '../appSlices/pagesSlice';
import { updateLoading } from '../../client/features/containers/containerSlices/isLoadingSlice';
import { setLightTheme } from '../../client/features/components/toggleTheme/toggleThemeSlice';
import { updateMovieData } from '../features/components/search/searchSlices/searchMoviesSlice';
import { setValue } from '../../client/features/components/search/searchSlices/valueSlice';
import { changeCategory } from '../../client/features/components/search/searchSlices/categorySlice';
import { RootState } from 'client/reducer';

export const useLocationHistory = () => {
  const [locationKeys, setLocationKeys] = useState([]);
  const [persistentState, setPersistentState] = useState<PersistentState>();
  const previousState = useSelector((state: RootState) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen(async (location) => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key]);

        sessionStorage.setItem(
          `state@${location.key}`,
          JSON.stringify(previousState)
        );
      }

      if (history.action === 'POP') {
        const state = await JSON.parse(
          sessionStorage.getItem(`state@${location.key}`)
        );
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

  const resetState = (state: PersistentState) => {
    console.log(state.movieData);
    if (state) {
      if (state.query) dispatch(setQuery(state.query));
      if (state.hasMore) dispatch(updateHasMore(state.hasMore.value));
      if (state.pages) dispatch(updatePages(state.pages.value));
      if (state.category) dispatch(changeCategory(state.category.value));
      if (state.isLoading) dispatch(updateLoading(state.isLoading.value));
      if (state.theme) dispatch(setLightTheme(state.theme.value));
      // if (state.movieData) dispatch(updateMovieData(state.movieData.data));
      if (state.value) dispatch(setValue(state.value.value));
    }
  };
  return persistentState;
};
