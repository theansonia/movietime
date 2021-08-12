/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps, RouteProps } from 'react-router';
import { Details } from '../../types';
import { RootState } from '../../reducer';
import { Provider, Watch } from './MovieDetails';
import { TVPrevResults } from './search/tvSearch';
import Stars from './Stars';
import TVRecs from './TVRecs';
import { fetchDetails, fetchProvidersAndRecs } from '../../utils/fetchData';

const REACT_APP_MOVIE_API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;

interface PropsInterface extends RouteComponentProps<{ name: string }> {
  location: RouteProps['location'];
  children: RouteProps['children'];
}

const TVDetails: FunctionComponent<RouteComponentProps> = (
  props: PropsInterface
) => {
  const {
    params: { name },
  } = props.match;
  // const { state } = useLocation<LocationState>();
  const [details, updateDetails] = useState(([] as unknown) as Details);
  const [recommendations, updateRecommendations] = useState(
    ([] as unknown) as TVPrevResults
  );
  const [watch, updateWatch] = useState<Watch | null>(null);
  const [providers, updateProviders] = useState(([] as unknown) as string[][]);
  const theme = useSelector((state: RootState) => state.theme.value);

  useEffect(() => {
    fetchDetails(name).then((data) => updateDetails(data.results[0]));

    return () => updateDetails(([] as unknown) as Details);
  }, [name]);

  useEffect(() => {
    if (details === undefined) return;
    if (details.length === 0) return;

    fetchProvidersAndRecs('tv', details.id).then((data) => {
      updateRecommendations(data[0].results);
      updateWatch(data[1].results['US']);
    });
  }, [details]);

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
      <div id='morelikethis'>
        {!details ? null : (
          <div id='detail'>
            <div id='detailposter'>
              {`https://image.tmdb.org/t/p/w500/${details.poster_path}` !==
                'https://image.tmdb.org/t/p/w500/null' ||
              `https://image.tmdb.org/t/p/w500/${details.poster_path}` !==
                'https://image.tmdb.org/t/p/w500/undefined' ? (
                <img
                  id='detailposter'
                  src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                  alt={`Movie poster for ${name}`}
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
              {details.name ? <div id='detailtitle'>{details.name}</div> : null}
              {details.first_air_date ? (
                <div id='detailrelease'>{`${
                  details.first_air_date.split('-')[0]
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
                        key={`${logo.toString()} + ${i}`}
                        rel='noreferrer'
                        target='_blank'
                      >
                        <div id='shinediv'>
                          <img
                            key={`logoid - ${logo.toString()} + ${i} `}
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

            {recommendations ? (
              <div>
                {recommendations.map((rec, i) => {
                  <div id='likethis'>More Like This</div>;
                  if (i < 5)
                    return (
                      <TVRecs
                        key={rec.id}
                        name={rec.title || rec.name}
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

export default TVDetails;
