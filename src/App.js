import { useState } from 'react';
import './App.scss';
import Search from './components/Search';
import { Route, Switch, Link, Redirect} from "react-router-dom";
import TvSearch from './components/tvSearch';
import TrendingSearch from './components/TrendingSearch';
import Details from './components/Details';
import MovieDetails from './components/MovieDetails';

// export const LocationDisplay = () => {
//   const location = useLocation()

//   return <div data-testid="location-display">{location.pathname}</div>
// }

// function NoMatch() {
//   let location = useLocation();

//   return (
//     <div>
//       <h3>
//         No match
//       </h3>
//     </div>
//   );
// }

function App() {

  const [searchStatus, updateSearchStatus] = useState(true);
  const [category, updateCategory] = useState(null);

  
  return (

      <div id='app'>
        <div id='navbar'>
        <Link to='/home' ><div id='homebtn' onClick={() => {updateSearchStatus(true); updateCategory(null)}}><img id='homebtn' src='../home.png' alt='home button' /></div></Link>

            <Link to={`/movies`} id='option' onClick={() => {updateCategory('Movie'); updateSearchStatus(true)}} ><div>Film</div></Link>
            <Link to={`/shows`} id='option' onClick={() => {updateCategory('TV'); updateSearchStatus(true)}} ><div>TV</div></Link>
            

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

        <Switch >
          <Route path={`/details/:name`} component={Details} />
        </Switch>
        

        <Switch >
          <Route path={`/moviedetails/:title`} component={MovieDetails} />

        </Switch>

        <Switch >
          <Route path="*">
            <Redirect to='/home'/>

            {/* Uncomment below for testing  */}
            {/* <NoMatch /> */}
          </Route>
        </Switch>
        
        <Route exact path="/">
          <Redirect to='/home' />
        </Route>    

        {/* <LocationDisplay /> */}

      </div>
 
    );
}

export default App;

