/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import MovieContainer from "../containers/MovieContainer";
import { ThemeContext } from "../contexts/ThemeContext";

const REACT_APP_MOVIE_API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;

const Search = ({
  category,
  searchStatus,
  updateSearchStatus,
  updateCategory,
  title,
  updateTitle,
  pages,
  updatePages,
}) => {
  // const [title, updateTitle] = useState("");
  const [movieResults, updateMovieResults] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [hasMore, updateHasMore] = useState(false);
  const [isLoading, updateLoading] = useState(true);
  const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? "darkmode" : "";

  if (category === null) category = "movie";

  useEffect(() => {
    updateMovieResults([]);
  }, [title]);

  useEffect(() => {
    if (
      title === " " ||
      title === "." ||
      title === "/" ||
      title === "$" ||
      title === "%" ||
      title === "#" ||
      title === "&" ||
      title === "+" ||
      title === "#" ||
      title === "?" ||
      title === "+" ||
      title === "#"
    ) {
      updateTitle("");
      return;
    }

    if (title === "`") {
      updateTitle("'");
      return;
    }

    if (title.length === 0 || category === "TV") {
      updateMovieResults([]);
      return;
    }
    updateLoading(true);

    // eslint-disable-next-line no-useless-escape
    const query = title.replaceAll(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, "");

    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=${pages}&include_adult=false`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        updateMovieResults((prevResults) => {
          const newResults = data.results.filter((result) => {
            if (result.title.includes("%")) {
              result.title = result.title.replaceAll("%", " ");
            }
            return result;
          });
          return [...prevResults, ...newResults];
        });
        updateHasMore(data.results.length > 0);
        updateLoading(false);
      })
      .catch((error) => console.log(error));
  }, [category, title, pages]);

  useEffect(() => {
    if (title === " ") {
      updateTitle("");
      return;
    }
    updateLoading(true);

    if (title.length > 0) return;
    // if (title === undefined || title.length === 0) updateMovieResults([]);

    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&page=${pages}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        updateMovieResults((prevResults) => {
          const newResults = data.results.filter((result) => {
            if (result.title.includes("%")) {
              result.title = result.title.replaceAll("%", " ");
            }
            return result;
          });
          return [...prevResults, ...newResults];
        });
        updateHasMore(data.results.length > 0);
        updateLoading(false);
      })
      .catch((error) => console.log(error));
  }, [title, pages]);

  return (
    <div className={"" + theme}>
      <MovieContainer
        movieResults={movieResults}
        updateCategory={updateCategory}
        category={category}
        updateSearchStatus={updateSearchStatus}
        updateTitle={updateTitle}
        title={title}
        searchStatus={searchStatus}
        updatePages={updatePages}
        pages={pages}
        hasMore={hasMore}
        isLoading={isLoading}
        updateLoading={updateLoading}
        updateHasMore={updateHasMore}
      />
    </div>
  );
};

export default Search;
