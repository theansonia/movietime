import React from 'react';
import Stars from './Stars';
import { BrowserRouter, Link } from 'react-router-dom';

const Movie = ( {title, poster, overview, release, rating, reviews} ) => {

  return ( 
    <div id='movies'>
      <BrowserRouter>
          <Link style={{ textDecoration: 'none' }} to={`/moviedetails/${title}`} >
            <div id='poster' >
              {poster !== 'https://image.tmdb.org/t/p/w500/null' ? <img id='poster' src={poster} alt={`Movie poster for ${title}`} /> : <img id='poster' src='https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg' alt='back up movie poster cinema pardiso' /> }
            </div>
          </Link>
          <div  id='details'>
          <Link style={{ textDecoration: 'none', fontSize: "1em",
              marginBottom: '.5em', fontWeight: 'bold', marginTop: '.5em', color: 'inherit' }} to={`/moviedetails/${title}`} >
              {title ? <div id='title'  >{title}</div>: null}
          </Link>
          {release ? <div id='release'>{release}</div>: null}
          <Link style={{ textDecoration: 'none', fontSize: "1.4em",
              marginBottom: '.5em', fontWeight: 'normal', color: '#212529' }} to={`/moviedetails/${title}`} >
              <div id='overview'>{overview}</div>
          </Link>
        
        {rating ? <div id='rating'>{rating ? <Stars rating={rating} reviews={reviews} /> : 'No Rating'}</div>: null}
        </div>
    </BrowserRouter>
  </div>
   );
}
 
export default Movie;

