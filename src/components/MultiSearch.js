/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import MovieContainer from '../containers/MovieContainer';
// import api_key from '../apiKey';

const TrendingSearch = ( {category, searchStatus} ) => {
  const [title, updateTitle] = useState("");
  const [movieResults, updateMovieResults] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [tvResults, updateTvResults] = useState([])

  // const api_key = process.env.apiKey;

  if (category === null) category = 'a Movie or TV'

  useEffect(() => {

    if (title.length === 0) return;
    
      const URL = `https://api.themoviedb.org/3/search/multi?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&page=1&include_adult=false`;
      
      fetch(URL)
      .then((res) => res.json())
      .then((data) => updateMovieResults(data.results))
      .catch((error) => console.log(error)) 

  },[title]);


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