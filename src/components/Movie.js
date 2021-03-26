import React, {useState} from 'react';
import Stars from './Stars';
import Truncate from 'react-truncate';

const Movie = ( {id, title, poster, overview, release, rating, reviews} ) => {

  const [expanded, toggleExpand] = useState(false);
  return ( 
    <div id='movies'  >
    <div id='poster' >
      {poster !== 'https://image.tmdb.org/t/p/w500/null' ? <img id='poster' src={poster} alt={`Movie poster for ${title}`} /> : <img id='poster' src='https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg' alt='back up movie poster cinema pardiso' /> }
    </div>
    <div  id='details'>
      {title ? <div id='title'  >{title}</div>: null}
      {release ? <div id='release'>{release}</div>: null}

     {overview ? <Truncate style={{overflow: `${expanded? 'scroll' : 'hidden'}`, color: `${expanded ? '#6C757D' : 'inherit'}`}} lines={expanded ? 30 : 6} ellipsis={<span >...<div id='more'  onClick={(e) => {toggleExpand(!expanded)} } >click to scroll for more</div></span>}>{overview}</Truncate> : null}  
      {rating ? <div id='rating'>{rating ? <Stars rating={rating} reviews={reviews} /> : 'No Rating'}</div>: null}
    </div>

  </div>
   );
}
 
export default Movie;

