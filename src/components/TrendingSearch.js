import React, { useState, useEffect } from "react";
import MovieContainer from '../containers/MovieContainer';

const TrendingSearch = ( {category, searchStatus} ) => {
  const [title, updateTitle] = useState("");
  const [movieResults, updateMovieResults] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [tvResults, updateTvResults] = useState([])

  if (category === null) category = 'a Movie or TV'

  let apiKey;

  if (process.env.NODE_ENV === 'development') {
    const settings = require('../apiKey.js');
    apiKey= settings.apiKey;
  } else {
    apiKey= process.env.apiKey;
  }
  useEffect(() => {

    if (title.length === 0) {
      const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;
      fetch(URL)
      .then((res) => res.json())
      .then((data) => updateMovieResults(data.results))
      .catch((error) => console.log(error))
    }

  },[title, apiKey]);

  useEffect(() => {
 
    if (title.length === 0) {
      updateMovieResults([])
      return;
    };


    const URL = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${title}&page=1&include_adult=false`;
      
      fetch(URL)
      .then((res) => res.json())
      .then((data) => updateMovieResults(data.results))
      .catch((error) => console.log(error)) 

  }, [title, category, apiKey]);



  return ( 
    <div>
      <div id='searchbar'>
        {searchStatus ? <form >
        <input
          id='search'
          list="movie"
          placeholder={`Enter ${category} Title`}
          autoFocus
          onChange={e => updateTitle(e.target.value)}
          value={title}
        /> 
        </form> 
        : null
        }
        
      </div>
        
        <MovieContainer movieResults={movieResults} tvResults={tvResults} category={category} />    

    </div>
   );
}

export default TrendingSearch;
