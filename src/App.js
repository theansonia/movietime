import { useState } from 'react';
import './App.scss';
import Search from './components/Search';
import { Route, Switch, Link, Redirect } from "react-router-dom";

import TvSearch from './components/tvSearch';
import TrendingSearch from './components/TrendingSearch';

function App() {

  const [searchStatus, updateSearchStatus] = useState(false);
  const [category, updateCategory] = useState(null);

  return (
    
      <div id='app'>
        <div id='navbar'>
        <a href='/home' ><div id='homebtn' onClick={() => {updateSearchStatus(false); updateCategory(null)}}><img id='homebtn' src='../home.png' alt='home button' /></div></a>
          
          <div id='categories'>
            <Link to={`/movies`} id='option' onClick={() => {updateCategory('Movie'); updateSearchStatus(true)}} >Film</Link>
            <Link to={`/shows`} id='option' onClick={() => {updateCategory('TV'); updateSearchStatus(true)}} >TV</Link>
          </div>
        </div>

           {!category && !searchStatus ? <div id='trending'>Trending Movies and TV Shows</div> : null}
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

        <Route exact path="/">
          <Redirect to='/home' />
        </Route>    

        <div className="footer" >
           <img alt='search button' id='searchbtn' onClick={() => {updateSearchStatus(true); updateCategory(null); }} src='../Search.png' />
        </div>
      </div>
      
    );
}

export default App;
