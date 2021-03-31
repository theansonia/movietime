/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import MovieContainer from "../containers/MovieContainer";
// import { Route, Switch, Link } from "react-router-dom";
// import API_KEY from "../apiKey";
import { ThemeContext } from '../contexts/ThemeContext';

const Search = ({
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

  // const API_KEY = process.env.API_KEY;

  if (category === null) category = "a Movie or TV";

  useEffect(() => {
    if (title === " ") {
      updateTitle("");
      return;
    }

    if (title.length === 0 || category === "TV") {
      updateMovieResults([]);
      return;
    }

    // eslint-disable-next-line no-useless-escape
    // const query = title.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g,"");

    const URL = `https://api.themoviedb.org/3/search/movie?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&query=${title}&page=1&include_adult=false`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => updateMovieResults(data.results))
      .catch((error) => console.log(error));
  }, [title, category]);

  useEffect(() => {
    if (title === " ") {
      updateTitle("");
      return;
    }

    if (title === undefined || title.length > 0) return;
    if (title === undefined || title.length === 0) updateMovieResults([]);

    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&page=1`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => updateMovieResults(data.results))
      .catch((error) => console.log(error));
  }, [title]);

  return (
    <div className={'' + theme}>

<MovieContainer
        movieResults={movieResults}
        tvResults={tvResults}
        updateCategory={updateCategory}
        category={category}
        updateSearchStatus={updateSearchStatus}
        updateTitle={updateTitle}
        title={title}
        searchStatus={searchStatus}
      />
    </div>
  );
};

export default Search;
