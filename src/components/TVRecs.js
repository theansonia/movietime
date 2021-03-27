import React from 'react';
import {Link } from 'react-router-dom';

const TVRecs = ( {name, pic} ) => {

  return ( 
    <div id='tvrecs'  >
    
        <Link style={{ textDecoration: 'none',
            fontWeight: 'bold' , zIndex: '100000000000'}} to={`/details/${name}`} >
            {name ? <div id='tvrectitle'  >{name}</div>: null}
        </Link>
        <Link style={{ textDecoration: 'none' }} to={`/details/${name}`} >
            {pic !== 'https://image.tmdb.org/t/p/w500/null' ? <img style={{borderRadius: '30px'}} id='tvrecposter' src={pic} alt={`Movie poster for ${name}`} /> : <img id='tvrecposter' src='https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg' alt='back up movie poster cinema pardiso' /> }
        </Link>



  </div>
   );
}
 
export default TVRecs;
