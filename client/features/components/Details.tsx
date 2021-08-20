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
import { MoviePrevResults } from '../../utils/sortResults';
import { fetchDetails, fetchProvidersAndRecs } from '../../utils/fetchData';
import { handleMovieOrShowClick } from '../../utils/handleMovieOrShowClick';

let REACT_APP_MOVIE_API_KEY;
if (process.env.NODE_ENV !== 'production') {
  REACT_APP_MOVIE_API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;
}
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

const Details: FunctionComponent<RouteComponentProps> = (
  props: PropsInterface
) => {
  const { state } = useLocation<LocationState>();
  const {
    params: { title },
  } = props.match;

  const [type] = useState(state.type ? state.type : 'movie');
  const [details, updateDetails] = useState(([] as unknown) as Details);
  const [recommendations, updateRecommendations] = useState(
    ([] as unknown) as MoviePrevResults
  );
  const [watch, updateWatch] = useState<Watch | null>(null);
  const [providers, updateProviders] = useState(([] as unknown) as string[][]);

  useEffect(() => {
    fetchDetails(title).then((data) => updateDetails(data.results[0]));

    return () => updateDetails(([] as unknown) as Details);
  }, [title]);

  useEffect(() => {
    if (details === undefined) return;
    if (details.length === 0) return;

    fetchProvidersAndRecs(type, details.id).then((data) => {
      updateRecommendations(data[0].results);
      updateWatch(data[1].results['US']);
    });
    // may need to add id back to details.id
  }, [details, type]);

  useEffect(() => {
    if (!watch) return;
    handleMovieOrShowClick();
    const options = Object.keys(watch).filter((key) => {
      if (key !== 'link') return key;
    }, []);

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
    <div className='divdivider'>
      {!details ? null : (
        <div id='detailswrapper'>
          <div id='detailposterwrapper'>
            {`https://image.tmdb.org/t/p/w500/${details.backdrop_path}` !==
              'https://image.tmdb.org/t/p/w500/null' &&
            `https://image.tmdb.org/t/p/w500/${details.backdrop_path}` !==
              'https://image.tmdb.org/t/p/w500/undefined' ? (
              <img
                id='detailposter'
                src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}
                alt={`Movie poster for ${title}`}
              />
            ) : (
              <img
                id='detailposter'
                src='https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg'
                alt='back up movie poster cinema pardiso'
              />
            )}
          </div>
          <div id='detaildetails'>
            <div id='detailtitle'>{details.title ? details.title : title}</div>
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
              <div id='likethis'>More Like This</div>
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
          ) : (
            <div id='likethis'>No recommendations available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
