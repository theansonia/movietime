/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import MovieContainer from "../containers/MovieContainer";
// import API_KEY from "../apiKey";
import { ThemeContext } from '../contexts/ThemeContext';

const TrendingSearch = ({
  category,
  searchStatus,
  updateSearchStatus,
  updateCategory,
  title,
  updateTitle,
}) => {
  // const [title, updateTitle] = useState("");
  const [movieResults, updateMovieResults] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [tvResults, updateTvResults] = useState([]);
  const { lightTheme } = useContext(ThemeContext);
	const theme = !lightTheme ? 'darkmode' : '';

  if (category === null) category = "a Movie or TV";

  // const API_KEY = process.env.API_KEY;
  useEffect(() => {
    if (title === undefined) return;
    if (title === " ") updateTitle("");

    if (title.length === 0) {
      const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=20dd97d63497c0f0a8adb9bd9c547033`;
      fetch(URL)
        .then((res) => res.json())
        .then((data) => updateMovieResults(data.results))
        .catch((error) => console.log(error));
    }
  }, [title]);

  useEffect(() => {
    if (title === undefined) return;
    if (title === " ") {
      updateTitle("");
      return;
    }

    if (title.length === 0) {
      updateMovieResults([]);
      return;
    }

    const URL = `https://api.themoviedb.org/3/search/multi?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&query=${title}&page=1&include_adult=false`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        updateMovieResults(
          // eslint-disable-next-line array-callback-return
          data.results.filter((movie) => {
            if (movie.media_type === "tv" || movie.media_type === "movie")
              return movie;
          })
        );
      })
      .catch((error) => console.log(error));
  }, [title, category]);

  return (
    <div className={'' + theme}>

      <MovieContainer
        movieResults={movieResults}
        tvResults={tvResults}
        category={category}
        updateCategory={updateCategory}
        updateSearchStatus={updateSearchStatus}
        updateTitle={updateTitle}
        title={title}
        searchStatus={searchStatus}
      />
    </div>
  );
};

export default TrendingSearch;
