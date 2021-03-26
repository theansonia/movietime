/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import MovieContainer from '../containers/MovieContainer';
// import api_key from '../apiKey';

const TrendingSearch = ( {category, searchStatus} ) => {
  const [title, updateTitle] = useState("");
  const [movieResults, updateMovieResults] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [tvResults, updateTvResults] = useState([])

  if (category === null) category = 'a Movie or TV'

  // const api_key = process.env.apiKey;

  useEffect(() => {

    if (title.length === 0) {
      const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=20dd97d63497c0f0a8adb9bd9c547033`;
      fetch(URL)
      .then((res) => res.json())
      .then((data) => updateMovieResults(data.results))
      .catch((error) => console.log(error))
    }

  },[title]);

  useEffect(() => {
 
    if (title.length === 0) {
      updateMovieResults([])
      return;
    };


    const URL = `https://api.themoviedb.org/3/search/multi?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&query=${title}&page=1&include_adult=false`;
      
      fetch(URL)
      .then((res) => res.json())
      .then((data) => updateMovieResults(data.results))
      .catch((error) => console.log(error)) 

  }, [title, category]);



  return ( 
    <div>
      <div id='searchbar'>
        {searchStatus ? <form >
        <input
          id='search'
          list="movie"
          placeholder={`Search for Movies and TV Shows`}
          autoFocus
          onChange={e => updateTitle(e.target.value)}
          value={title}
        /> 
        </form> 
        : null
        }
        
      </div>
      {!title ? <div id='trending'>Featured Movies and TV Shows</div> : <div id='trending'>Results</div> }
      
        <MovieContainer movieResults={movieResults} tvResults={tvResults} category={category} />    

    </div>
   );
}

export default TrendingSearch;
