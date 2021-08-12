import { Route, Switch, Redirect } from 'react-router-dom';
import './styles/App.scss';
import Search from './features/components/search/Search';
import MovieDetails from './features/components/MovieDetails';
import SearchButton from './features/components/searchbutton/SearchButton';
import TrendingSearch from './features/components/search/TrendingSearch';
import { TvSearch } from './features/components/search/tvSearch';
import TVDetails from './features/components/Details';
import Navbar from './features/components/navbar/Navbar';
import Registration from './features/components/signup/Registration';

export default function App(): JSX.Element {
  console.log(`We are in ${process.env.NODE_ENV}`);
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/movies'>
          <Search />
          <SearchButton />
        </Route>
        <Route path='/shows'>
          <TvSearch />
          <SearchButton />
        </Route>
        <Route path='/home'>
          <TrendingSearch />
          <SearchButton />
        </Route>
        <Route path='/registration'>
          <Registration />
        </Route>
        <Route path={'/tvdetails/:name'} component={TVDetails} />
        <Route path={'/moviedetails/:title'} component={MovieDetails} />
        <SearchButton />
      </Switch>
      <Route exact path='/'>
        <Redirect to='/home' />
        <SearchButton />
      </Route>
    </>
  );
}
