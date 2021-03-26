import { useState } from 'react';
import './App.scss';
import Search from './components/Search';
import { Route, Switch, Link, Redirect } from "react-router-dom";
import TvSearch from './components/tvSearch';
import TrendingSearch from './components/TrendingSearch';
import Details from './components/Details';
import MovieDetails from './components/MovieDetails';

function App() {

  const [searchStatus, updateSearchStatus] = useState(true);
  const [category, updateCategory] = useState(null);

  return (
    
      <div id='app'>
        <div id='navbar'>
        <Link to='/home' ><div id='homebtn' onClick={() => {updateSearchStatus(true); updateCategory(null)}}><img id='homebtn' src='../home.png' alt='home button' /></div></Link>
          
          <div id='categories'>
            <Link to={`/movies`} id='option' onClick={() => {updateCategory('Movie'); updateSearchStatus(true)}} >Film</Link>
            <Link to={`/shows`} id='option' onClick={() => {updateCategory('TV'); updateSearchStatus(true)}} >TV</Link>
          </div>
        </div>

        <Switch>
          <Route path='/movies' >
            <Search category={category} searchStatus={searchStatus} /> 
          </Route>
        </Switch>
        <Switch>
          <Route path='/shows' >
            <TvSearch category={category} searchStatus={searchStatus} /> 
          </Route>
        </Switch>
        <Switch>
          <Route path='/home' >
            <TrendingSearch category={category} searchStatus={searchStatus} /> 
          </Route>
        </Switch>        

        <Route path={`/details/:name`} component={Details} />

        <Route path={`/moviedetails/:title`} component={MovieDetails} />
        
        <Route exact path="/">
          <Redirect to='/home' />
        </Route>    
      </div>
      
    );
}

export default App;
