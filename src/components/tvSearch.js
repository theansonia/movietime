/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import TVContainer from "../containers/TVContainer";
// import API_KEY from "../apiKey";
import { ThemeContext } from "../contexts/ThemeContext";


// import { PageContext } from "../contexts/PageContext";

const TvSearch = ({
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
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-unused-vars
  const [tvResults, updateTvResults] = useState([]);
  const [hasMore, updateHasMore] = useState(false)
  const[isLoading, updateLoading] = useState(true)
  // const [hasMore, updateMore] = useState(true)
  const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? "darkmode" : "";
  // const API_KEY = process.env.API_KEY;

  if (category === null) category = "a Movie or TV";

  useEffect(() => {
    updateTvResults([])
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


    if (title.length === 0) {
      updateTvResults([]);
      return;
    }
    updateLoading(true)
    // eslint-disable-next-line no-useless-escape
    // const query = title.replace(regex, ' ');

   
    console.log(title)
    const URL = `https://api.themoviedb.org/3/search/tv?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&query=${title}&page=${pages}&include_adult=false`;
    
    fetch(URL)
      .then((res) => res.json())
      .then(data => {
        updateTvResults(prevResults => {
          return [...prevResults, ...data.results];

        })
        updateHasMore(data.results.length > 0)
        updateLoading(false);
      })
      .catch((error) => console.log(error));

  }, [title, category, pages]);

  useEffect(() => {
    if (title === " ") {
      updateTitle("");
      return;
    }

    updateLoading(true)

    if (title.length > 0) return;
   

    const URL = `https://api.themoviedb.org/3/tv/popular?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&page=${pages}`;
    fetch(URL)
    .then((res) => res.json())
    .then(data => {
      updateTvResults(prevResults => {
        console.log('trending', prevResults)
        return [...prevResults, ...data.results]
      })
      updateHasMore(data.results.length > 0)
      updateLoading(false);
    })
    .catch((error) => console.log(error));

}, [title, pages]);

  

  return (
    <div id='scrollablediv' className={"" + theme}>
     
      <TVContainer
        tvResults={tvResults}
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

export default TvSearch;
