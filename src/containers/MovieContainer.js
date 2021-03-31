import React from "react";
import Movie from "../components/Movie";
import "../App.scss";
import Show from "../components/Show";
import SearchBar from "../components/SearchBar";

const MovieContainer = ({
  movieResults,
  tvResults,
  category,
  searchStatus,
  updateCategory,
  updateSearchStatus,
  updateTitle,
  title
}) => {

  let tempCategory;
  if (category === 'a Movie or TV') {
    tempCategory = "Movies and TV Shows";
  } else if (category === "TV") {
    tempCategory = "TV Shows";
  } else if (category === "Movie") {
    tempCategory = "Movies";
  }
  
  return (
   
    <div >
      <SearchBar category={category} searchStatus={searchStatus} updateSearchStatus={updateSearchStatus} updateCategory={updateCategory} updateTitle={updateTitle} title={title} />
      {!title ? (
        <div id="trending">Featured {tempCategory}</div>
      ) : (
        <div id="trending">Results</div>
      )}
      <div className="moviecontainer">
      
      {tvResults.length === 0 && movieResults.length === 0
        ? null
        : movieResults.map((movie) => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title || movie.name}
                poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                overview={movie.overview}
                release={
                  movie.release_date === undefined
                    ? null
                    : movie.release_date.split("-")[0]
                }
                aired={
                  movie.first_air_date === undefined
                    ? null
                    : movie.first_air_date.split("-")[0]
                }
                rating={Math.round(movie.vote_average / 2)}
                reviews={movie.vote_count}
                searchStatus={searchStatus}
                updateSearchStatus={updateSearchStatus}
                type={movie.media_type}
                category={category}
                updateCategory={updateCategory}

              />
            );
          })}

      {tvResults.length === 0 && movieResults.length === 0 && category === "TV"
        ? null
        : tvResults.map((show) => {
            return (
              <Show
                key={`key-${show.id}`}
                id={show.id}
                name={show.name}
                poster={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                overview={show.overview}
                release={
                  show.first_air_date === undefined
                    ? null
                    : show.first_air_date.split("-")[0]
                }
                rating={Math.round(show.vote_average / 2)}
                reviews={show.vote_count}
                searchStatus={searchStatus}
                updateSearchStatus={updateSearchStatus}
                category={category}
                updateCategory={updateCategory}
              />
            );
          })}
          
    </div>
    </div>
  );
};

export default MovieContainer;
