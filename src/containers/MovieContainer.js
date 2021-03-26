import React from 'react';
import Movie from '../components/Movie'
import '../App.scss';
import Show from '../components/Show';
import { Route } from "react-router-dom";

const MovieContainer = ( {movieResults, tvResults, category } ) => {

  return ( 
    <div className='moviecontainer'>
      
      { tvResults.length === 0 && movieResults.length === 0 ? null : ( 
          movieResults.map((movie) => {
            return (
              <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              overview={movie.overview}
              release={movie.release_date === undefined ? null : movie.release_date.split('-')[0]}
              rating={Math.round(movie.vote_average/2)}
              reviews={movie.vote_count}
            />
            )
          }
      ))}
      
      { tvResults.length === 0 && movieResults.length === 0 && category === 'TV' ? null : ( 
          tvResults.map((show) => {
            return (
              <Route path={`/details/:${show.id}`} >
              </Route>,
              <Show
              key={`key-${show.id}`}
              id={`id-${show.id}`}
              name={show.name}
              poster={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
              overview={show.overview}
              release={show.release_date === undefined ? null : show.release_date.split('-')[0]}
              rating={Math.round(show.vote_average/2)}
              reviews={show.vote_count}
            />    
            
            )
          }
      ))}


    </div>
   );
}
 
export default MovieContainer;
