import React from 'react';
import Stars from './Stars';


const Details = (props) => {
  const {id, name, poster, overview, release, rating, reviews} = props;

 console.log(id)

  return ( 
      <div >
        <div id='modal' >
            <div id='poster' >
              {poster !== 'https://image.tmdb.org/t/p/w500/null' ? <img id='poster' src={poster} alt={`Movie poster for ${name}`} /> : <img id='poster' src='https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg' alt='back up movie poster cinema pardiso' /> }
            </div>
            <div id='details'>
            {name ? <div id='title'  >{name}</div>: null}
            {release ? <div id='release'>{release}</div>: null}
            {overview ? overview : null}  
            {rating ? <div id='rating'>{rating ? <Stars rating={rating} reviews={reviews} /> : 'No Rating'}</div>: null}
          </div>
          <button >Close</button>
          </div>
      </div>
   );

}
 
export default Details;