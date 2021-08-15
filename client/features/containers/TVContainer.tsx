import { useDispatch, useSelector } from 'react-redux';
import Show from '../components/Show';
import BeatLoader from 'react-spinners/BeatLoader';
import { css } from '@emotion/core';
import { setQuery } from '../../appSlices/querySlice';
import { useScroll } from '../../hooks/useScroll';
import { RootState } from 'client/reducer';

const override = css`
  display: flex;
  margin: 0 auto;
  position: fixed;
  z-index: 100000;
`;

const TVContainer = ({ tvResults }) => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.query.value);
  const lastShow = useScroll();

  return (
    <div>
      {!query ? (
        <div id='trending'>Featured TV Shows</div>
      ) : (
        <div id='trending'>Results</div>
      )}

      <div className='moviecontainer'>
        {tvResults.length === 0
          ? null
          : tvResults.map((movie, index) => {
              if (tvResults.length === index + 1) {
                return (
                  <div
                    key={`showkey-${index}`}
                    id='movies'
                    ref={lastShow}
                    onClick={() => dispatch(setQuery(movie.name))}
                  >
                    <Show
                      key={`showkeyinner-${movie.id}`}
                      id={movie.id}
                      name={movie.name}
                      poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      overview={movie.overview}
                      release={
                        movie.release_date === undefined
                          ? null
                          : movie.first_air_date.split('-')[0]
                      }
                      aired={
                        movie.first_air_date === undefined
                          ? null
                          : movie.first_air_date.split('-')[0]
                      }
                      rating={Math.round(movie.vote_average / 2)}
                      reviews={movie.vote_count}
                      type={movie.media_type}
                    />
                  </div>
                );
              } else {
                return (
                  <div
                    key={`keyout--${index}`}
                    id='movies'
                    onClick={() => dispatch(setQuery(movie.name))}
                  >
                    <Show
                      key={movie.id + 'moviekeyinnerbutouter'}
                      id={movie.id}
                      name={movie.name}
                      poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      overview={movie.overview}
                      release={
                        movie.first_air_date === undefined
                          ? null
                          : movie.first_air_date.split('-')[0]
                      }
                      aired={
                        movie.first_air_date === undefined
                          ? null
                          : movie.first_air_date.split('-')[0]
                      }
                      rating={Math.round(movie.vote_average / 2)}
                      reviews={movie.vote_count}
                      type={movie.media_type}
                    />
                  </div>
                );
              }
            })}

        {/* <div id='beat'>
          {isLoading ? (
            <BeatLoader
              id='beat'
              color={color}
              loading={isLoading}
              css={override}
              size={25}
            />
          ) : null}
        </div> */}
      </div>
    </div>
  );
};

export default TVContainer;
