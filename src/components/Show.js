import React from 'react';
import Stars from './Stars';
import { BrowserRouter, Link  } from "react-router-dom";
// import Details from './Details';

const Show = ( props ) => {
  
  const { name, poster, overview, release, rating, reviews} = props;

return ( 
    <div>
        
      <div id='movies' >
        <BrowserRouter>
          <Link style={{ textDecoration: 'none' }} to={`/Details/${name}`} >
          <div id='poster' >
            {poster !== 'https://image.tmdb.org/t/p/w500/null' ? <img id='poster' src={poster} alt={`Movie poster for ${name}`} /> : <img id='poster' src='https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg' alt='back up movie poster cinema pardiso' /> }
          </div>
          </Link>
          
          <div  id='details'>
          <Link style={{ textDecoration: 'none', fontSize: "1em",
             marginBottom: '.5em', fontWeight: 'bold', marginTop: '.5em', color: 'inherit' }} to={`/Details/${name}`} >
            {name ? <div id='title'  >{name}</div>: null}
            </Link>
            {release ? <div id='release'>{release}</div>: null}
            <Link style={{ textDecoration: 'none', fontSize: "1.4em",
              marginBottom: '.5em', fontWeight: 'normal', color: '#212529' }} to={`/Details/${name}`} >
            <div id='overview'>{overview}</div>
            </Link>
            {rating ? <div id='rating'>{rating ? <Stars rating={rating} reviews={reviews} /> : 'No Rating'}</div>: null}
          </div>
          </BrowserRouter>
      </div>
      
      </div>
   );
}
 
export default Show;
