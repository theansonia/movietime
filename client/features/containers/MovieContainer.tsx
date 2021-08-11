import { useDispatch, useSelector } from 'react-redux';
import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { css } from '@emotion/core';
import Movie from '../components/Movie';
import SearchBar from '../components/SearchBar';
import { useScroll } from '../../hooks/useScroll';
import { updatePages } from '../../appSlices/pagesSlice';
import { RootState } from 'client/reducer';
import { MoviePrevResults } from 'client/utils/sortResults';
import { MovieData } from 'client/types';

const override = css`
  display: flex;
  margin: 0 auto;
  position: fixed;
  z-index: 100000;
`;

interface MovieContainerProps {
  featuring: string;
  movieResults: MoviePrevResults;
  children?: ReactNode;
}
const MovieContainer: FunctionComponent<MovieContainerProps> = ({
  movieResults,
  featuring,
}) => {
  const color = '#6c757d';
  const query = useSelector((state: RootState) => state.query.value);
  const isLoading = useSelector((state: RootState) => state.isLoading.value);
  const searchStatus = useSelector(
    (state: RootState) => state.searchStatus.value
  );
  // const movieData = useSelector((state) => state.movieData.data);
  const dispatch = useDispatch();
  const lastMovie = useScroll();

  return (
    <>
      <SearchBar state={featuring} />

      {!query ? (
        <div id='trending'>Featured {featuring}s</div>
      ) : (
        <div id='trending'>Results</div>
      )}

      <div className='moviecontainer'>
        {movieResults.length > 0 &&
          movieResults.map((movie, index) => {
            if (movieResults.length === index + 1) {
              return (
                <div key={`moviekey-${index}`} id='movies' ref={lastMovie}>
                  <Movie
                    key={`moviekeyinner-${movie.id}`}
                    id={movie.id}
                    title={movie.title || movie.name}
                    poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    overview={movie.overview}
                    release={
                      movie.release_date === undefined
                        ? null
                        : movie.release_date.split('-')[0]
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
                <div key={`moviekeyagain-${index}`} id='movies'>
                  <Movie
                    key={movie.id + 'moviekeyinnerbutouter'}
                    id={movie.id}
                    title={movie.title || movie.name}
                    poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    overview={movie.overview}
                    release={
                      movie.release_date === undefined
                        ? null
                        : movie.release_date.split('-')[0]
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
        <div id='beat'>
          {/* {isLoading ? (
            <BeatLoader
              id='beat'
              color={color}
              loading={isLoading}
              css={override}
              size={25}
            />
          ) : null} */}
        </div>
      </div>
    </>
  );
};

export default MovieContainer;
