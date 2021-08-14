import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import './styles/App.scss';
import Search from './features/components/search/Search';
import Details from './features/components/Details';
import SearchButton from './features/components/searchbutton/SearchButton';
import TrendingSearch from './features/components/search/TrendingSearch';
import { TvSearch } from './features/components/search/tvSearch';
import Navbar from './features/components/navbar/Navbar';
import Registration from './features/components/signup/Registration';

export default function App(): JSX.Element {
  console.log(`We are in ${process.env.NODE_ENV}`);
  const { pathname } = useLocation();

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
        <Route path={'/details/:title'} component={Details} />
      </Switch>
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>
      {pathname !== '/registration' && <SearchButton />}
    </>
  );
}
