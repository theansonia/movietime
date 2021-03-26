import React, { useState, useEffect } from "react";
import MovieContainer from '../containers/MovieContainer';
// import { Route, Switch, Link } from "react-router-dom";

const Search = ( {category, searchStatus} ) => {
  const [title, updateTitle] = useState("");
  const [movieResults, updateMovieResults] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [tvResults, updateTvResults] = useState([])

  let apiKey;

  if (process.env.NODE_ENV === 'development') {
    const settings = require('../apiKey.js');
    apiKey= settings.apiKey;
  } else {
    apiKey= process.env.apiKey;
  }
  
  if (category === null) category = 'a Movie or TV'
  
  useEffect(() => {
 
    if (title.length === 0 || category === 'TV') {
      updateMovieResults([]);
      return;
    };

    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${title}&page=1&include_adult=false`;
    fetch(URL)
    .then((res) => res.json())
    .then((data) => updateMovieResults(data.results))
    .catch((error) => console.log(error))

  }, [title, category]);


  useEffect(() => {

    if (title.length === 0) updateMovieResults([]);
    
      const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
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

export default Search;
