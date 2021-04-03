import React from "react";
import Stars from "./Stars";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const Show = (props) => {
  const {
    updateCategory,
    name,
    poster,
    overview,
    release,
    rating,
    reviews,
    updateSearchStatus,
  } = props;

  return (
    <div id="movies">
      {/* <Router> */}
      <Link
        onClick={() => {
          updateSearchStatus(false);
          updateCategory(null);
        }}
        style={{ textDecoration: "none" }}
        // eslint-disable-next-line no-useless-escape
        to={`/Details/${name.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g, "")}`}
      >
        <div id="poster">
          {poster !== "https://image.tmdb.org/t/p/w500/null" &&
          poster !== "https://image.tmdb.org/t/p/w500/undefined" ? (
            <img id="poster" src={poster} alt={`Movie poster for ${name}`} />
          ) : (
            <img
              id="poster"
              src="https://image.tmdb.org/t/p/w500//aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg"
              alt="back up tv poster of seinfeld"
            />
          )}
        </div>
      </Link>

      <div id="details">
        <Link
          onClick={() => {
            updateSearchStatus(false);
            updateCategory(null);
          }}
          style={{
            textDecoration: "none",
            fontSize: "1em",
            marginBottom: ".5em",
            fontWeight: "bold",
            marginTop: ".5em",
            color: "inherit",
          }}
          to={`/Details/${name}`}
        >
          {name ? <div id="title">{name}</div> : null}
        </Link>
        {release ? <div id="release">First Aired {release}</div> : null}
        <Link
          onClick={() => {
            updateSearchStatus(false);
            updateCategory(null);
          }}
          style={{
            textDecoration: "none",
            fontSize: "1.4em",
            marginBottom: ".5em",
            fontWeight: "normal",
            color: "inherit",
          }}
          to={`/Details/${name}`}
        >
          <div id="overview">{overview}</div>
        </Link>
        {rating ? (
          <div id="rating">
            {rating ? <Stars rating={rating} reviews={reviews} /> : "No Rating"}
          </div>
        ) : null}
      </div>
      {/* </Router> */}
    </div>
  );
};

export default Show;
