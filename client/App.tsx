import { Route, Switch, Redirect } from 'react-router-dom';
import './styles/App.scss';
import Search from './features/components/search/Search';
import Details from './features/components/Details';
import TrendingSearch from './features/components/search/TrendingSearch';
import { TvSearch } from './features/components/search/tvSearch';
import Navbar from './features/components/navbar/Navbar';
import Registration from './features/components/login/Registration';
import { useSelector } from 'react-redux';
import { RootState } from './reducer';
import Signin from './features/components/login/Siginin';
import { MobileNavbar } from './features/components/navbar/MobileNavbar';
import { ScrollToTop } from './hooks/ScrollToTop';
import { useWindowDimension } from './hooks/useWindowDimension';
import { useDoRefreshUser } from './hooks/useDoRefreshUser';
// import { useLocationHistory } from './hooks/useLocationHistory';
// import { useUnload } from './hooks/useUnload';

export default function App(): JSX.Element {
  const theme = useSelector((state: RootState) => state.theme.value);
  const userResponse = useDoRefreshUser();
  const [isMobile, setIsMobile] = useWindowDimension();
  // const persistentState = useLocationHistory();

  return (
    <div className={theme}>
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
    </div>
  );
}
