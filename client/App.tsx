import { Route, Switch, Redirect } from 'react-router-dom';
import './styles/App.scss';
import Search from './features/components/search/Search';
import MovieDetails from './features/components/MovieDetails';
import SearchButton from './features/components/searchbutton/SearchButton';
import TrendingSearch from './features/components/search/TrendingSearch';
import { TvSearch } from './features/components/search/tvSearch';
import TVDetails from './features/components/Details';
import Navbar from './features/components/Navbar';

export default function App(): JSX.Element {
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
        <Route path={'/tvdetails/:name'} component={TVDetails} />
        <Route path={'/moviedetails/:title'} component={MovieDetails} />
      </Switch>
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>

      <SearchButton />
    </>
  );
}
