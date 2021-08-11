/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useEffect, useState, FunctionComponent } from 'react';
import { RouteComponentProps, RouteProps, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import Recs from './Recs';
import Stars from './Stars';
import { RootState } from '../../reducer';
import { Details } from '../../types';
import { DataResults } from './search/Search';
import { MoviePrevResults } from '../../utils/sortResults';

const REACT_APP_MOVIE_API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;
interface PropsInterface extends RouteComponentProps<{ title: string }> {
  location: RouteProps['location'];
  children: RouteProps['children'];
  state: LocationState;
}

export interface LocationState {
  type?: string;
  id: number;
  name?: string;
  title?: string;
}

export interface Watch {
  link: string;
  flatrate_and_buy: [Provider];
}

export interface Provider {
  display_priority?: number;
  logo_path?: string;
  provider_name?: string;
  provider_id?: number;
}
export interface SingleResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
  };
}

const MovieDetails: FunctionComponent<RouteComponentProps> = (
  props: PropsInterface
) => {
  const { state } = useLocation<LocationState>();
  const {
    params: { title },
  } = props.match;

  const [type] = useState(state.type ? state.type : 'movie');

  const [details, updateDetails] = useState([] as unknown as Details);
  const [recommendations, updateRecommendations] = useState(
    [] as unknown as MoviePrevResults
  );
  const [watch, updateWatch] = useState<Watch | null>(null);
  const [providers, updateProviders] = useState([] as unknown as string[][]);
  const theme = useSelector((state: RootState) => state.theme.value);

  useEffect(() => {
    if (
      title === ' ' ||
      title === '.' ||
      title === '/' ||
      title === '$' ||
      title === '%' ||
      title === '#' ||
      title === '&' ||
      title === '+' ||
      title === '#' ||
      title === '?' ||
      title === '+' ||
      title === '#'
    ) {
      return;
    }

    let query = title.replaceAll('%20', ' ');
    query = title.replaceAll('%%20', ' ');

    const URL = `https://api.themoviedb.org/3/search/multi?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    fetch(URL)
      .then((res) => res.json())
      .then((data: SingleResult) => updateDetails(data.results[0]))
      .catch((error) => console.log(error));

    return () => updateDetails([] as unknown as Details);
  }, [title]);

  useEffect(() => {
    if (details === undefined) return;

    if (details.length === 0) return;

    const URL = `https://api.themoviedb.org/3/${type}/${details.id}/recommendations?api_key=${REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`;

    fetch(URL)
      .then((res) => res.json())
      .then((data: DataResults) => updateRecommendations(data.results))
      .catch((error) => console.log(error));

    const providerURL = `https://api.themoviedb.org/3/${type}/${details.id}/watch/providers?api_key=${REACT_APP_MOVIE_API_KEY}`;

    fetch(providerURL)
      .then((res) => res.json())
      .then((data: DataResults) => {
        updateWatch(data.results['US']);
      })
      .catch((error) => console.log(error));
    // may need to add id back to details.id
  }, [details, type]);

  useEffect(() => {
    if (!watch) return;
    const options = Object.keys(watch).filter((key) => {
      if (key !== 'link') return key;
    });

    const arrayOfProviderInfo = [
      ...new Set(
        options
          .map((medium: string) => {
            if (watch[medium] && medium !== 'link') {
              return watch[medium].map((provider: Provider) => {
                if (provider.provider_name.includes('Google'))
                  provider.provider_name = 'googleplay';
                return [
                  provider.logo_path,
                  `http://www.${provider.provider_name.replace(' ', '')}.com`,
                ];
              });
            }
          })
          .flat()
      ),
    ];

    const cache: Record<string, unknown> = {};
    arrayOfProviderInfo.filter((provider: string, i): void => {
      if (!cache[provider]) cache[provider] = i;
    });

    updateProviders(
      Object.keys(cache).map((pair) => {
        const temp = pair.split(',');
        return [temp[0], temp[1]];
      })
    );
  }, [watch]);

  return (
    <div className={theme}>
      <div>
        {!details ? null : (
          <div id='detail'>
            <div id='detailposter'>
              {`https://image.tmdb.org/t/p/w500/${details.poster_path}` !==
                'https://image.tmdb.org/t/p/w500/null' &&
              `https://image.tmdb.org/t/p/w500/${details.poster_path}` !==
                'https://image.tmdb.org/t/p/w500/undefined' ? (
                <img
                  id='detailposter'
                  src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                  alt={`Movie poster for ${title}`}
                />
              ) : (
                <img
                  id='poster'
                  src='https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg'
                  alt='back up movie poster cinema pardiso'
                />
              )}
            </div>
            <div id='detaildetails'>
              {details.title ? (
                <div id='detailtitle'>{details.title}</div>
              ) : null}
              {details.release_date ? (
                <div id='detailrelease'>{`${
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                  details.release_date.split('-')[0]
                }`}</div>
              ) : null}
              {details.overview ? (
                <div id='detailoverview'>{details.overview}</div>
              ) : null}
              {Math.round(details.vote_average / 2) ? (
                <div id='detailrating'>
                  {Math.round(details.vote_average / 2) ? (
                    <Stars
                      rating={Math.round(details.vote_average / 2)}
                      reviews={details.vote_count}
                    />
                  ) : (
                    'No Rating'
                  )}
                </div>
              ) : null}
              {!watch ? null : (
                <a
                  id='providers'
                  rel='noreferrer'
                  href={`${watch.link}`}
                  target='_blank'
                >
                  Where to Watch
                </a>
              )}
              {providers ? (
                <div id='logos'>
                  {providers.map((logo, i) => {
                    return (
                      <a
                        href={logo[1]}
                        key={`logoid - ${logo.toString()} + ${i + 1} `}
                        rel='noreferrer'
                        target='_blank'
                      >
                        <div id='shinediv'>
                          <img
                            key={`logoid - ${i}`}
                            id='logo'
                            src={`https://image.tmdb.org/t/p/w500/${logo[0]}`}
                            alt='thumbnail for current provider'
                          />
                        </div>
                      </a>
                    );
                  })}
                </div>
              ) : null}
            </div>

            {recommendations && recommendations.length > 0 ? (
              <div>
                {' '}
                {recommendations.map((rec, i) => {
                  <div id='likethis'>More Like This</div>;
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
            ) : (
              <div id='likethis'>No recommendations available</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;