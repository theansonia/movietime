/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import Stars from './Stars';
import TVRecs from './TVRecs';


const Details = ({match}) => {

  const { params: {name}} = match;

  const [details, updateDetails] = useState([])
  const [recommendations, updateRecommendations] = useState([])

  useEffect(() => {

    const URL = `https://api.themoviedb.org/3/search/multi?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&query=${name}&page=1&include_adult=false`;
      
      fetch(URL)
      .then((res) => res.json())
      .then((data) => updateDetails(data.results[0]))
      .catch((error) => console.log(error)) 

  }, [name]);

  useEffect(() => {

    if (details.length === 0) return;

    const URL = `https://api.themoviedb.org/3/tv/${details.id}/recommendations?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&page=1`;
      
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
            {`https://image.tmdb.org/t/p/w500/${details.poster_path}` !== 'https://image.tmdb.org/t/p/w500/null' ? <img id='detailposter' src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt={`Movie poster for ${name}`} /> : <img id='poster' src='https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg' alt='back up movie poster cinema pardiso' /> }
          </div>
          <div id='detaildetails'>
            {details.name ? <div id='detailtitle'  >{details.name}</div>: null}
            {details.first_air_date ? <div id='detailrelease'>{`${details.first_air_date.split('-')[0]}`}</div>: null}
            {details.overview ? <div id='detailoverview'>{details.overview}</div> : null}  
            {Math.round(details.vote_average/2) ? <div id='detailrating'>{Math.round(details.vote_average/2) ? <Stars rating={Math.round(details.vote_average/2)} reviews={details.vote_count} /> : 'No Rating'}</div>: null}
          </div>
      </div>)
      }

          <div id='likethis'> More Like This</div>
            {recommendations ? 
            <div>
              {
                recommendations.map((rec, i) => {
                  if (i < 5)
                  return (
                    <TVRecs
                      key={rec.id}
                      id={rec.id}
                      name={rec.name || rec.name}
                      pic={`https://image.tmdb.org/t/p/w500/${rec.backdrop_path}`}
              />
                  )
                })
              }

          </div> : null }
        
      </div>
   );

}
 
export default Details;