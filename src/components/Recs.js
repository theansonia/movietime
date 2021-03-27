import React from 'react';
import { Link } from 'react-router-dom';

const Recs = ( {title, pic} ) => {

  return ( 
    <div id='recs'  >
      <Link style={{ textDecoration: 'none', fontSize: "1em",
           marginBottom: '.5em', fontWeight: 'bold', marginTop: '.5em', color: 'inherit' }} to={`/moviedetails/${title}`} >
          {title ? <div id='rectitle'  >{title}</div>: null}
      </Link>
      <Link style={{ textDecoration: 'none' }} to={`/moviedetails/${title}`} >
        <div id='recposter' >
          {pic !== 'https://image.tmdb.org/t/p/w500/null' ? <img id='recposter' src={pic} alt={`Movie poster for ${title}`} /> : <img id='recposter' src='https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg' alt='back up movie poster cinema pardiso' /> }
        </div>
    </Link>

  </div>
   );
}
 
export default Recs;