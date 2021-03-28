/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import Recs from './Recs';
import Stars from './Stars';


const MovieDetails = ({match}) => {

  // comment out for testing
  const { params: {title}} = match;

  
  const [details, updateDetails] = useState([])
  const [recommendations, updateRecommendations] = useState([])


  useEffect(() => {

    const URL = `https://api.themoviedb.org/3/search/multi?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&query=${title}&page=1&include_adult=false`;
      
      fetch(URL)
      .then((res) => res.json())
      .then((data) => updateDetails(data.results[0]))
      .catch((error) => console.log(error)) 
  }, [title]);
  
  useEffect(() => {

    if (details.length === 0) return;

    const URL = `https://api.themoviedb.org/3/movie/${details.id}/recommendations?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&page=1`;
      
      fetch(URL)
      .then((res) => res.json())
      .then((data) => updateRecommendations(data.results))
      .catch((error) => console.log(error)) 
  }, [details]);
  
  
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
          
          <div id='likethis'> More Like This</div>
          {recommendations ? 
          <div>
            {
              recommendations.map((rec, i) => {
                if (i < 5)
                return (
                  <Recs
                    key={rec.id}
                    id={rec.id}
                    title={rec.title || rec.name}
                    pic={`https://image.tmdb.org/t/p/w500/${rec.backdrop_path}`}
            />
                )
              })
            }
            
             </div> : null }
      </div>)
      }
      
      </div>
   );

}
 
export default MovieDetails;