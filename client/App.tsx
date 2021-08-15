import {
  Route,
  Switch,
  Redirect,
  useLocation,
  useHistory,
} from 'react-router-dom';
import './styles/App.scss';
import Search from './features/components/search/Search';
import Details from './features/components/Details';
import SearchButton from './features/components/searchbutton/SearchButton';
import TrendingSearch from './features/components/search/TrendingSearch';
import { TvSearch } from './features/components/search/tvSearch';
import Navbar from './features/components/navbar/Navbar';
import Registration from './features/components/login/Registration';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducer';
import { setSearchStatus } from './appSlices/searchStatusSlice';
import Signin from './features/components/login/Siginin';

export default function App(): JSX.Element {
  const [badPathsForSearch] = useState(['registration', 'signin']);
  const searchButton = useRef();
  const history = useHistory();
  const { pathname } = useLocation();
  const searchStatus = useSelector(
    (state: RootState) => state.searchStatus.value
  );
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('click', () => {
      if (document.activeElement !== searchButton.current) {
        setTimeout(() => {
          dispatch(setSearchStatus(false));
          const input = (document.getElementsByName(
            'search'
          ) as unknown) as HTMLInputElement;

          if (pathname !== '/registration') {
            if (input.length > 0) {
              input[0].value = '';
            }
          }
        }, 0);
        const input = (document.getElementsByName(
          'search'
        ) as unknown) as HTMLInputElement;
        if (pathname !== '/registration') {
          if (input.length > 0) {
            input[0].value = '';
          }
        }
      } else {
        dispatch(setSearchStatus(true));
        const searchicon = document.getElementById('searchicon');
      }
    });
  }, [history, searchStatus]);

  console.log(`We are in ${process.env.NODE_ENV}`);

  return (
    <>
      <Navbar />

      <Switch>
        <Route path='/movies'>
          <Search />
        </Route>
        <Route path='/shows'>
          <TvSearch />
        </Route>
        <Route path='/home'>
          <TrendingSearch />
        </Route>
        <Route path='/registration'>
          <Registration />
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path={'/details/:title'} component={Details} />
      </Switch>
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>
      {!badPathsForSearch.some((v) => pathname.includes(v)) && (
        <SearchButton ref={searchButton} />
      )}
    </>
  );
}
