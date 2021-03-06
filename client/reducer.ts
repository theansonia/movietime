import { combineReducers } from 'redux';
import categoryReducer from '../client/features/components/search/searchSlices/categorySlice';
import searchStatusReducer from './appSlices/searchStatusSlice';
import queryReducer from '../client/features/components/search/searchSlices/querySlice';
import hasMoreReducer from './features/containers/containerSlices/hasMoreSlice';
import pagesReducer from './appSlices/pagesSlice';
import loadingReducer from './features/containers/containerSlices/isLoadingSlice';
import lightThemeReducer from './features/components/toggleTheme/toggleThemeSlice';
import movieDataReducer from './features/components/search/searchSlices/searchMoviesSlice';
import valueReducer from './features/components/search/searchSlices/valueSlice';

export const rootReducer = combineReducers({
  category: categoryReducer,
  searchStatus: searchStatusReducer,
  query: queryReducer,
  hasMore: hasMoreReducer,
  pages: pagesReducer,
  isLoading: loadingReducer,
  theme: lightThemeReducer,
  movieData: movieDataReducer,
  value: valueReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
