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
import { isTokenExpired, MyToken } from './utils/jwtHelper';
import {
  deleteCookie,
  getCookie,
  refresh,
  refreshUser,
} from './utils/AuthService';
import { useUserContext } from './contexts/UserContext';
import { handleShowClick } from './utils/handleShowClick';
import { MobileNavbar } from './features/components/navbar/MobileNavbar';
import { ScrollToTop } from './hooks/ScrollToTop';
import { useLocationHistory } from './hooks/useLocationHistory';
import { useUnload } from './hooks/useUnload';

export default function App(): JSX.Element {
  const { setUserDetails } = useUserContext();
  const [badPathsForSearch] = useState(['registration', 'signin']);
  const [windowDimension, setWindowDimension] = useState(null);
  const [isMobile, setIsMobile] = useState(windowDimension <= 640);
  const searchButton = useRef();
  const history = useHistory();
  const { pathname } = useLocation();
  const searchStatus = useSelector(
    (state: RootState) => state.searchStatus.value
  );
  const dispatch = useDispatch();
  // const persistentState = useLocationHistory();

  // useEffect(() => {
  //   window.addEventListener('beforeunload', function (e) {
  //     // Cancel the event
  //     e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
  //     // Chrome requires returnValue to be set

  //     const state = sessionStorage.getItem('state');
  //     if (state) localStorage.setItem('state', state);
  //     e.returnValue = '';
  //   });
  // }, []);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
    if (windowDimension <= 640) setIsMobile(true);
    else setIsMobile(false);
    const handleResize = () => {
      setWindowDimension(window.innerWidth);
    };
    const doRefresh = async () => {
      const response = await refreshUser();
      if (response) setUserDetails(response.user);
      else return;
    };

    doRefresh();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowDimension <= 640) setIsMobile(true);
    else setIsMobile(false);
  }, [windowDimension]);

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
              const i = (input[0] as unknown) as HTMLInputElement;
              i.value = '';
            }
          }
        }, 0);
        const input = (document.getElementsByName(
          'search'
        ) as unknown) as HTMLInputElement;
        if (pathname !== '/registration') {
          if (input.length > 0) {
            const i = (input[0] as unknown) as HTMLInputElement;
            i.value = '';
          }
        }
      } else {
        dispatch(setSearchStatus(true));
        const searchicon = document.getElementById('searchicon');
      }
    });
  }, [history, searchStatus]);

  return (
    <>
      <ScrollToTop />
      {!isMobile ? <Navbar /> : <MobileNavbar />}

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
        <Route path='/signin' component={Signin} />
        <Route path={'/details/:title'} component={Details} />
      </Switch>
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>
      {!badPathsForSearch.some((v) => pathname.includes(v)) && !isMobile && (
        <SearchButton ref={searchButton} />
      )}
    </>
  );
}
