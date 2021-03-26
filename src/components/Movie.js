import React, {useState} from 'react';
import Stars from './Stars';
import Truncate from 'react-truncate';
import { Link } from 'react-router-dom';

const Movie = ( {id, title, poster, overview, release, rating, reviews} ) => {

  const [expanded, toggleExpand] = useState(false);
  return ( 
    <div id='movies'  >
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

     {overview ? <Truncate style={{overflow: `${expanded? 'scroll' : 'hidden'}`, color: `${expanded ? '#6C757D' : 'inherit'}`}} lines={expanded ? 30 : 4} ellipsis={<span >...
      <Link style={{ textDecoration: 'none' }} to={`/moviedetails/${title}`} >
       <div id='more'  onClick={(e) => {toggleExpand(!expanded)} } >more</div>
       </Link>
       
       </span>}>{overview}</Truncate> : null}  
      {rating ? <div id='rating'>{rating ? <Stars rating={rating} reviews={reviews} /> : 'No Rating'}</div>: null}
    </div>

  </div>
   );
}
 
export default Movie;

