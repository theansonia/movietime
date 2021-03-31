/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import MovieContainer from "../containers/MovieContainer";
// import API_KEY from "../apiKey";
import { ThemeContext } from "../contexts/ThemeContext";

const TvSearch = ({
  category,
  searchStatus,
  updateSearchStatus,
  updateCategory,
  title,
  updateTitle,
}) => {
  // const [title, updateTitle] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [movieResults, updateMovieResults] = useState([]);
  const [tvResults, updateTvResults] = useState([]);

  const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? "darkmode" : "";
  // const API_KEY = process.env.API_KEY;

  if (category === null) category = "a Movie or TV";

  useEffect(() => {
    if (title.length === 0 || category === "Movie") {
      updateTvResults([]);
      return;
    }

    if (title === " ") {
      updateTitle("");
      return;
    }

    const URL = `https://api.themoviedb.org/3/search/tv?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&query=${title}&page=1&include_adult=false`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => updateTvResults(data.results))
      .catch((error) => console.log(error));
  }, [title, category]);

  useEffect(() => {
    if (title.length > 0) return;
    if (title.length === 0) updateTvResults([]);

    if (title === " ") {
      updateTitle("");
      return;
    }

    const URL = `https://api.themoviedb.org/3/tv/popular?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&page=1`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => updateTvResults(data.results))
      .catch((error) => console.log(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  return (
    <div className={"" + theme}>
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

export default TvSearch;
