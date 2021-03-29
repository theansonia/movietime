/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import MovieContainer from '../containers/MovieContainer';
// import API_KEY from '../apiKey';

const TrendingSearch = ( {category, searchStatus, updateCategory} ) => {
  const [title, updateTitle] = useState("");
  const [movieResults, updateMovieResults] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [tvResults, updateTvResults] = useState([])

  if (category === null) category = 'a Movie or TV'

  // const API_KEY = process.env.API_KEY;

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
      {searchStatus ? <div id='searchbar'>
      <div id='x' onClick={() => updateTitle('')}>
      <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  fillRule="evenodd" clipRule="evenodd" d="M12 0C18.623 0 24 5.377 24 12C24 18.623 18.623 24 12 24C5.377 24 0 18.623 0 12C0 5.377 5.377 0 12 0ZM12 1C18.071 1 23 5.929 23 12C23 18.071 18.071 23 12 23C5.929 23 1 18.071 1 12C1 5.929 5.929 1 12 1ZM12 11.293L17.293 6L18 6.707L12.707 12L18 17.293L17.293 18L12 12.707L6.707 18L6 17.293L11.293 12L6 6.707L6.707 6L12 11.293Z" fill="#F8F9FA"/>
</svg></div>
        <form onSubmit={(e) => {
          e.preventDefault();
          }}>
        <input
          id='search'
          list="movie"
          placeholder={`Search for Movies and TV Shows`}
          autoFocus
          onChange={e => updateTitle(e.target.value)}
          value={title}
        /> 
        </form> 
        
        
      </div> : null}
      
      {!title ? <div id='trending'>Featured Movies and TV Shows</div> : <div id='trending'>Results</div> }
      
        <MovieContainer movieResults={movieResults} tvResults={tvResults} category={category} updateCategory={updateCategory} />    

    </div>
   );
}

export default TrendingSearch;
