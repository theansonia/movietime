import React, { useState } from 'react';
import Truncate from 'react-truncate';
import Stars from './Stars';
// import { Route, Switch, Link, Redirect } from "react-router-dom";
// import Details from './Details';

const Show = ( props ) => {
  const [expanded, toggleExpand] = useState(false);
  // Either link to details for one target movie or pop up modal
  const { name, poster, overview, release, rating, reviews} = props;

return ( 
    <>

      <div id='movies'  >
        <div id='poster' >
          {poster !== 'https://image.tmdb.org/t/p/w500/null' ? <img id='poster' src={poster} alt={`Movie poster for ${name}`} /> : <img id='poster' src='https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg' alt='back up movie poster cinema pardiso' /> }
        </div>
        <div  id='details'>
          {name ? <div id='title'  >{name}</div>: null}
          {release ? <div id='release'>{release}</div>: null}
  
         {overview ? <Truncate style={{overflow: `${expanded? 'scroll' : 'hidden'}`, color: `${expanded ? '#ADB5BD' : 'inherit'}`}} lines={expanded ? 20 : 9} ellipsis={<span >...<div to={{
            pathname: `/details/`,
            state: props
         }
           } id='more' onClick={(e) => {toggleExpand(!expanded)} } >click to scroll for more</div></span>}>{overview}</Truncate> : null}  
          {rating ? <div id='rating'>{rating ? <Stars rating={rating} reviews={reviews} /> : 'No Rating'}</div>: null}
        </div>

      </div>

      </>
   );
}
 
export default Show;
