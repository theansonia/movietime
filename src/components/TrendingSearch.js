/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import MovieContainer from "../containers/MovieContainer";
// import API_KEY from "../apiKey";
import { ThemeContext } from "../contexts/ThemeContext";
// import { PageContext } from "../contexts/PageContext";

const TrendingSearch = ({
  category,
  searchStatus,
  updateSearchStatus,
  updateCategory,
  title,
  updateTitle,
  pages,
  updatePages
}) => {
  // const [title, updateTitle] = useState("");
  const [movieResults, updateMovieResults] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [tvResults, updateTvResults] = useState([]);
  // const [page, updatePage] = useState(1);
  const [hasMore, updateHasMore] = useState(false)
  const[isLoading, updateLoading] = useState(true)
  // const {pages} = useContext(PageContext)

  const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? "darkmode" : "";

  if (category === null) category = "a Movie or TV";

  // const API_KEY = process.env.API_KEY;

  useEffect(() => {
    updateMovieResults([])
  }, [title])

  useEffect(() => {
    if (title === " " || title === "." || title === "/" || title === "$"  || title === "%" || title === '#' || title === "&"  || title === "+" || title === '#' || title === "?"  || title === "+" || title === '#' ) {
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
    updateLoading(true)
    
    // eslint-disable-next-line no-useless-escape
    const query = title.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g,"");

    const URL = `https://api.themoviedb.org/3/search/multi?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&query=${query}&page=${pages}`;
    fetch(URL)
      .then((res) => res.json())
      .then(data => {
        updateMovieResults(prevResults => {
          
          // eslint-disable-next-line array-callback-return
          return [...prevResults, ...data.results.filter((res) => {
            if (res.media_type === 'tv' || res.media_type === 'movie') return res;
          }) ]

        })
        updateHasMore(data.results.length > 0)
        updateLoading(false);
      })
      .catch((error) => console.log(error));

  }, [category, title, pages]);

  useEffect(() => {
    if (title === " ") {
      updateTitle("");
      return;
    }
    updateLoading(true)

    if (title.length > 0) return;

    const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&page=${pages}`;

    fetch(URL)
      .then((res) => res.json())
      .then(data => {
        updateMovieResults(prevResults => {
          return [...prevResults, ...data.results]
        })
        updateHasMore(data.results.length > 0)
        updateLoading(false);
      })
      .catch((error) => console.log(error));

  }, [title, pages]);

 

  return (
    <div className={"" + theme}>
      <MovieContainer
        movieResults={movieResults}
        tvResults={tvResults}
        category={category}
        updateCategory={updateCategory}
        updateSearchStatus={updateSearchStatus}
        updateTitle={updateTitle}
        title={title}
        searchStatus={searchStatus}
        updatePages={updatePages}
        pages={pages}
        updateLoading={updateLoading}
        updateHasMore={updateHasMore}
        hasMore={hasMore}
        isLoading={isLoading}
      />
    </div>
  );
};

export default TrendingSearch;
