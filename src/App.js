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

  const [searchStatus, updateSearchStatus] = useState(false);
  const [category, updateCategory] = useState(null);

  return (

      <div id='app'>
        <header></header>
        <div id='navbar'>
        <Link to='/home' id="homebutton"><div  onClick={() => {updateSearchStatus(true); updateCategory(null)}}><svg id='homebtn'  width="48" height="48" viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                            <g  clipPath="url(#clip0)">
                            <rect width="24" height="24" fill="#212529"/>
                            <path id='homepath' fillRule="evenodd" clipRule="evenodd" d="M22 11.414V24H2V11.414L0.707 12.707L0 12L12 0L24 12L23.293 12.707L22 11.414ZM16 23H21V10.414L12 1.414L3 10.414V23H8V14H16V23ZM15 15.111H9V22.889H15V15.111Z" fill="#F8F9FA"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>

        </div></Link>
        

            <Link id="filmbutton" to={`/movies`} className='option'  onClick={() => {updateCategory('Movie'); updateSearchStatus(true)}} ><div>Movies</div></Link>
            <Link id="tvbutton"  to={`/shows`} className='option' onClick={() => {updateCategory('TV'); updateSearchStatus(true)}} ><div>TV Shows</div></Link>

            
        </div>
        <Link to={'/home'}> 
        <div onClick={() => {updateCategory(null); updateSearchStatus(true)}} >
        <svg id="searchbtn" width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
            <path id='searchpath' d="M100 48C100 74.5097 78.5097 96 52 96C25.4903 96 4 74.5097 4 48C4 21.4903 25.4903 0 52 0C78.5097 0 100 21.4903 100 48Z" fill="#343A40"/>
            <path id='searchpath' d="M100 48C100 74.5097 78.5097 96 52 96C25.4903 96 4 74.5097 4 48C4 21.4903 25.4903 0 52 0C78.5097 0 100 21.4903 100 48Z" fill="url(#paint0_linear)"/>
            </g>
            <path d="M61.7632 42.7662C61.7632 49.4941 55.7091 55.0325 48.1316 55.0325C40.5541 55.0325 34.5 49.4941 34.5 42.7662C34.5 36.0384 40.5541 30.5 48.1316 30.5C55.7091 30.5 61.7632 36.0384 61.7632 42.7662Z" stroke="#F8F9FA"/>
            <line y1="-0.5" x2="19.0436" y2="-0.5" transform="matrix(0.671291 0.741194 -0.804176 0.594391 57.2162 51.885)" stroke="#F8F9FA"/>
            <defs>
            <filter id="filter0_d" x="0" y="0" width="104" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear" x1="52" y1="0" x2="52" y2="96" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6C757D"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            </defs>
        </svg>



            </div></Link> 
    
            

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

