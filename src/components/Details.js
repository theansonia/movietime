/* eslint-disable no-useless-escape */
/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from "react";
import Stars from "./Stars";
import { ThemeContext } from "../contexts/ThemeContext";
import TVRecs from "./TVRecs";
// import { useLocation } from "react-router-dom";

const REACT_APP_MOVIE_API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;

const Details = ({ match }) => {
  // const location = useLocation()
  // comment out for testing

  const {
    params: { name },
  } = match;

  const [details, updateDetails] = useState([]);
  const [recommendations, updateRecommendations] = useState([]);
  const [watch, updateWatch] = useState(null);
  const [providers, updateProviders] = useState([]);
  const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? "darkmode" : "";

  useEffect(() => {
    if (
      name === " " ||
      name === "." ||
      name === "/" ||
      name === "$" ||
      name === "%" ||
      name === "#" ||
      name === "&" ||
      name === "+" ||
      name === "#" ||
      name === "?" ||
      name === "+" ||
      name === "#"
    ) {
      return;
    }
    // console.log(name, 'before')
    // let query = name.replaceAll(/[.,/#!$%\^&\*;:{}=\-_`~()]/g," ");

    let query = name.replaceAll("%20", " ");
    query = name.replaceAll("%%20", " ");

    const URL = `https://api.themoviedb.org/3/search/multi?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => updateDetails(data.results[0]))
      .catch((error) => console.log(error));
    return () => updateDetails([]);
  }, [name]);

  useEffect(() => {
    if (details === undefined) return;
    if (details.length === 0) return;

    const URL = `https://api.themoviedb.org/3/tv/${details.id}/recommendations?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => updateRecommendations(data.results))
      .catch((error) => console.log(error));

    const providerURL = `https://api.themoviedb.org/3/tv/${details.id}/watch/providers?api_key=${REACT_APP_MOVIE_API_KEY}`;
    fetch(providerURL)
      .then((res) => res.json())
      .then((data) => {
        updateWatch(data.results.US);
      })
      .catch((error) => console.log(error));
  }, [details]);

  useEffect(() => {
    if (!watch) return;
    const options = Object.keys(watch).filter((key) => {
      if (key !== "link") return key;
    });

    const something = [
      ...new Set(
        options
          .map((medium, i) => {
            if (watch[medium] && medium !== "link") {
              return watch[medium].map((provider, i) => {
                if (provider.provider_name.includes("Google"))
                  provider.provider_name = "googleplay";
                return [
                  provider.logo_path,
                  `http://www.${provider.provider_name.replace(" ", "")}.com`,
                ];
              });
            }
          })
          .flat()
      ),
    ];

    const cache = {};
    something.filter((provider, i, self) => {
      if (!cache[provider]) cache[provider] = i;
    });

    updateProviders(
      Object.keys(cache).map((pair) => {
        const temp = pair.split(",");
        return [temp[0], temp[1]];
      })
    );
  }, [watch]);

  return (
    <div className={"" + theme}>
      <div id="morelikethis">
        {!details ? null : (
          <div id="detail">
            <div id="detailposter">
              {`https://image.tmdb.org/t/p/w500/${details.poster_path}` !==
                "https://image.tmdb.org/t/p/w500/null" ||
              `https://image.tmdb.org/t/p/w500/${details.poster_path}` !==
                "https://image.tmdb.org/t/p/w500/undefined" ? (
                <img
                  id="detailposter"
                  src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                  alt={`Movie poster for ${name}`}
                />
              ) : (
                <img
                  id="poster"
                  src="https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg"
                  alt="back up movie poster cinema pardiso"
                />
              )}
            </div>
            <div id="detaildetails">
              {details.name ? <div id="detailtitle">{details.name}</div> : null}
              {details.first_air_date ? (
                <div id="detailrelease">{`${
                  details.first_air_date.split("-")[0]
                }`}</div>
              ) : null}
              {details.overview ? (
                <div id="detailoverview">{details.overview}</div>
              ) : null}
              {Math.round(details.vote_average / 2) ? (
                <div id="detailrating">
                  {Math.round(details.vote_average / 2) ? (
                    <Stars
                      rating={Math.round(details.vote_average / 2)}
                      reviews={details.vote_count}
                    />
                  ) : (
                    "No Rating"
                  )}
                </div>
              ) : null}

              {!watch ? null : (
                <a
                  id="providers"
                  alt="link to the internet movie database to get links of where to stream in us"
                  rel="noreferrer"
                  href={`${watch.link}`}
                  target="_blank"
                >
                  Where to Watch
                </a>
              )}

              {providers ? (
                <div id="logos">
                  {providers.map((logo, i) => {
                    return (
                      <a
                        href={logo[1]}
                        key={`${logo} + ${i}`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <div id="shinediv">
                          <img
                            key={`logoid - ${logo} + ${i} `}
                            id="logo"
                            src={`https://image.tmdb.org/t/p/w500/${logo[0]}`}
                            alt="thumbnail for current provider"
                          />
                        </div>
                      </a>
                    );
                  })}
                </div>
              ) : null}
            </div>

            {recommendations ? (
              <div>
                {recommendations.map((rec, i) => {
                  <div id="likethis">More Like This</div>;
                  if (i < 5)
                    return (
                      <TVRecs
                        key={rec.id}
                        id={rec.id}
                        name={rec.title || rec.name}
                        pic={`https://image.tmdb.org/t/p/w500/${rec.backdrop_path}`}
                      />
                    );
                })}
              </div>
            ) : (
              <div id="likethis">No recommendations available</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
