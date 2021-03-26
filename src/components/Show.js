import React, { useState } from 'react';
import Truncate from 'react-truncate';
import Stars from './Stars';
import { Link,  } from "react-router-dom";
// import Details from './Details';

const Show = ( props ) => {
  const [expanded, toggleExpand] = useState(false);
  
  const { name, poster, overview, release, rating, reviews} = props;

return ( 
    <>

      <div id='movies' >
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

         {overview ? <Truncate style={{overflow: `${expanded? 'scroll' : 'hidden'}`, color: `${expanded ? '#ADB5BD' : 'inherit'}`}} lines={expanded ? 30 : 4} ellipsis={<span >...<div id='more' onClick={(e) => {toggleExpand(!expanded)} } >click to scroll for more</div></span>}>{overview}</Truncate> : null}  
          {rating ? <div id='rating'>{rating ? <Stars rating={rating} reviews={reviews} /> : 'No Rating'}</div>: null}
        </div>
        
      </div>

      </>
   );
}
 
export default Show;
