/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from "react";
import Recs from "./Recs";
import Stars from "./Stars";
import { ThemeContext } from "../contexts/ThemeContext";
// import API_KEY from "../apiKey";

const MovieDetails = ({ match }) => {
  // comment out for testing
  const {
    params: { title },
  } = match;

  const [details, updateDetails] = useState([]);
  const [recommendations, updateRecommendations] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [watch, updateWatch] = useState(null);
  const [providers, updateProviders] = useState([])

  const { lightTheme } = useContext(ThemeContext);
  const theme = !lightTheme ? "darkmode" : "";

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
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // let query = name.replace(/[.,/#!$%\^&\*;:{}=\-_`~()]/g,"");

    let query = title.replace("%20", " ");
    query = title.replace("%%20", " ");

    const URL = `https://api.themoviedb.org/3/search/multi?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&query=${query}&page=1&include_adult=false`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => updateDetails(data.results[0]))
      .catch((error) => console.log(error));
    return () => updateDetails([]);
  }, [title]);

  useEffect(() => {
    if (details === undefined) return;

    if (details.length === 0) return;

    const URL = `https://api.themoviedb.org/3/movie/${details.id}/recommendations?api_key=20dd97d63497c0f0a8adb9bd9c547033&language=en-US&page=1`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => updateRecommendations(data.results))
      .catch((error) => console.log(error));

    const providerURL = `https://api.themoviedb.org/3/movie/${details.id}/watch/providers?api_key=20dd97d63497c0f0a8adb9bd9c547033`;

    fetch(providerURL)
      .then((res) => res.json())
      .then((data) => updateWatch(data.results.US))
      .catch((error) => console.log(error));
  }, [details]);

  useEffect(() => {
    if (!watch) return;
    const options = Object.keys(watch).filter((key) => {
      if (key !== 'link') return key;
    })
    updateProviders( [...new Set(options.map((medium) => {
      if (watch[medium] && medium !== 'link') {
        return [watch[medium][0].logo_path, `http://www.${watch[medium][0].provider_name.replace(' ', '')}.com`]
      }
    }))]  )

  }, [watch])


  return (
    <div className={"" + theme}>
      <div>
        {!details ? null : (
          <div id="detail">
            <div id="detailposter">
              {`https://image.tmdb.org/t/p/w500/${details.poster_path}` !==
                "https://image.tmdb.org/t/p/w500/null" &&
              `https://image.tmdb.org/t/p/w500/${details.poster_path}` !==
                "https://image.tmdb.org/t/p/w500/undefined" ? (
                <img
                  id="detailposter"
                  src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                  alt={`Movie poster for ${title}`}
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
              {details.title ? (
                <div id="detailtitle">{details.title}</div>
              ) : null}
              {details.release_date ? (
                <div id="detailrelease">{`${
                  details.release_date.split("-")[0]
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
              <a
                id="providers"
                alt="link to the internet movie database to get links of where to stream in us"
                rel="noreferrer"
                href={`${watch}`}
                target="_blank"
              >
                Where to Watch
              </a>
                  {providers ? (
                   <div id='logos'>
                    {providers.map((logo, i) => {
                      
                    return (

                      
                      <a href={logo[1]} key={`logoid - ${logo} + ${i+1} `}rel='noreferrer' target='_blank'>
                      <img
                        key={`logoid - ${logo} + ${i} `}
                        id="logo"
                        src={`https://image.tmdb.org/t/p/w500/${logo[0]}`}
                        alt="thumbnail for current provider"
                      />
                      </a>
                    );
                })}
                   </div>
                   )
                
                : null}
            </div>

           

            {recommendations ? (
              <div>
                {" "}
                <div id="likethis">More Like This</div>
                {recommendations.map((rec, i) => {
                  if (i < 5)
                    return (
                      <Recs
                        key={`recskey-${i}`}
                        id={rec.id}
                        title={rec.title || rec.name}
                        pic={`https://image.tmdb.org/t/p/w500/${rec.backdrop_path}`}
                      />
                    );
                })}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
