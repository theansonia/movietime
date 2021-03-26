import React, { useState, useEffect } from "react";
import apiKey from '../apiKey.js';
import MovieContainer from '../containers/MovieContainer';
// import { Route, Switch, Link } from "react-router-dom";

const TvSearch = ( {category, searchStatus} ) => {
  const [title, updateTitle] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [movieResults, updateMovieResults] = useState([])
  const [tvResults, updateTvResults] = useState([])

  if (category === null) category = 'a Movie or TV'

  useEffect(() => {
 
    if (title.length === 0 || category === 'Movie') {
      updateTvResults([]);
      return;
    };

    const URL = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${title}&page=1&include_adult=false`;
    fetch(URL)
    .then((res) => res.json())
    .then((data) => updateTvResults(data.results))
    .catch((error) => console.log(error))

  }, [title, category]);

  useEffect(() => {

    if (title.length === 0) updateTvResults([])

      const URL = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`;
      fetch(URL)
      .then((res) => res.json())
      .then((data) => updateTvResults(data.results))
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

export default TvSearch;