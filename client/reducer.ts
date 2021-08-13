import { combineReducers } from 'redux';
import categoryReducer from './appSlices/categorySlice';
import searchStatusReducer from './appSlices/searchStatusSlice';
import queryReducer from './appSlices/querySlice';
import hasMoreReducer from './features/containers/containerSlices/hasMoreSlice';
import pagesReducer from './appSlices/pagesSlice';
import loadingReducer from './features/containers/containerSlices/isLoadingSlice';
import lightThemeReducer from './features/components/toggleTheme/toggleThemeSlice';
import movieDataReducer from './features/components/search/searchMoviesSlice';
import valueReducer from './features/components/search/searchSlices/valueSlice';
import userInfoReducer from './features/components/signup/signupslices/userInfoSlice';
import loginReducer from './features/components/signup/signupslices/loginSlice';

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
  userinfo: userInfoReducer,
  isLoggedIn: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
