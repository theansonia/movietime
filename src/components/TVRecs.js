import React from 'react';
import { Link } from 'react-router-dom';

const TVRecs = ( {name, pic} ) => {

  console.log(pic)
  return ( 
    <div id='recs'  >
      <Link style={{ textDecoration: 'none', fontSize: "1em",
           marginBottom: '.5em', fontWeight: 'bold', marginTop: '.5em', color: 'inherit' }} to={`/moviedetails/${name}`} >
          {name ? <div id='rectitle'  >{name}</div>: null}
      </Link>
      <Link style={{ textDecoration: 'none' }} to={`/moviedetails/${name}`} >
        <div id='tvrecposter' >
          {pic !== 'https://image.tmdb.org/t/p/w500/null' ? <img id='tvrecposter' src={pic} alt={`Movie poster for ${name}`} /> : <img id='recposter' src='https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg' alt='back up movie poster cinema pardiso' /> }
        </div>
    </Link>

  </div>
   );
}
 
export default TVRecs;