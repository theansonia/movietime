import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Recs = ( {title, pic} ) => {

  return ( 
    <div id='recs'  >
      
      <BrowserRouter >
        <Link style={{ textDecoration: 'none', fontSize: "1em",
            marginBottom: '.5em', fontWeight: 'bold', marginTop: '.5em', color: 'inherit', zIndex: '100000000000'}} to={`/moviedetails/${title}`} >
            {title ? <div id='rectitle'  >{title}</div>: null}
        </Link>
        <Link style={{ textDecoration: 'none' }} to={`/moviedetails/${title}`} >
            {pic !== 'https://image.tmdb.org/t/p/w500/null' ? <img id='recposter' style={{borderRadius: '30px'}}src={pic} alt={`Movie poster for ${title}`} /> : <img id='recposter' src='https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg' alt='back up movie poster cinema pardiso' /> }
       </Link>
    </BrowserRouter>
  </div>
   );
}
 
export default Recs;
