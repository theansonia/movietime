import React, { useEffect, useState } from 'react';
import Stars from './Stars';


const MovieDetails = ({match}) => {

  const { params: {title}} = match;

  
  const [details, updateDetails] = useState([])

  useEffect(() => {

    const URL = `https://api.themoviedb.org/3/search/multi?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&query=${title}&page=1&include_adult=false`;
      
      fetch(URL)
      .then((res) => res.json())
      .then((data) => updateDetails(data.results[0]))
      .catch((error) => console.log(error)) 
  }, [title]);
  
  return ( 
      <div >
        {!details ? null :
        (<div id='detail' >

          <div id='detailposter' >
            {`https://image.tmdb.org/t/p/w500/${details.poster_path}` !== 'https://image.tmdb.org/t/p/w500/null' ? <img id='detailposter' src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={`Movie poster for ${title}`} /> : <img id='poster' src='https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg' alt='back up movie poster cinema pardiso' /> }
          </div>
          <div id='detaildetails'>
            {details.title ? <div id='detailtitle'  >{details.title}</div>: null}
            {details.release_date ? <div id='detailrelease'>{`${details.release_date.split('-')[0]}`}</div>: null}
            {details.overview ? <div id='detailoverview'>{details.overview}</div> : null}  
            {Math.round(details.vote_average/2) ? <div id='detailrating'>{Math.round(details.vote_average/2) ? <Stars rating={Math.round(details.vote_average/2)} reviews={details.vote_count} /> : 'No Rating'}</div>: null}
          </div>
      </div>)
      }
        
      </div>
   );

}
 
export default MovieDetails;