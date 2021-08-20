/* eslint-disable no-useless-escape */
import React, { FunctionComponent } from 'react';
import Stars from './Stars';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchStatus } from '../../appSlices/searchStatusSlice';
import { changeCategory } from '../components/search/searchSlices/categorySlice';
import { MovieProps } from '../../types';
export interface TVProps extends MovieProps {
  name: string;
  tempQuery: string;
}

const Show: FunctionComponent<TVProps> = ({
  name,
  poster,
  overview,
  release,
  rating,
  reviews,
  id,
  tempQuery,
}: TVProps) => {
  const dispatch = useDispatch();

  return (
    <div id='movies'>
      <Link
        onClick={() => {
          dispatch(setSearchStatus(false));
          dispatch(changeCategory(null));
          sessionStorage.setItem(
            'scrollPosition',
            JSON.stringify(window.scrollY)
          );
        }}
        style={{ textDecoration: 'none' }}
        // eslint-disable-next-line no-useless-escape
        to={{
          pathname: `/details/${name.replace(
            /[.,/#!$%\^&\*;:{}=\-_`~()]/g,
            ''
          )}`,
          state: { id: id, title: name, type: 'tv' },
        }}
      >
        <div id='poster'>
          {poster !== 'https://image.tmdb.org/t/p/w500/null' &&
          poster !== 'https://image.tmdb.org/t/p/w500/undefined' ? (
            <img id='poster' src={poster} alt={`TV poster for ${name}`} />
          ) : (
            <img
              id='poster'
              src='https://image.tmdb.org/t/p/w500//aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg'
              alt='back up tv poster of seinfeld'
            />
          )}
        </div>
      </Link>

      <div id='details'>
        <Link
          onClick={() => {
            dispatch(setSearchStatus(false));
            dispatch(changeCategory(null));
            sessionStorage.setItem(
              'scrollPosition',
              JSON.stringify(window.pageYOffset)
            );
          }}
          style={{
            textDecoration: 'none',
            fontSize: '1em',
            marginBottom: '.5em',
            fontWeight: 'bold',
            marginTop: '.5em',
            color: 'inherit',
          }}
          to={{
            pathname: `/details/${name.replace(
              /[.,/#!$%\^&\*;:{}=\-_`~()]/g,
              ''
            )}`,
            state: { id: id, title: name, type: 'tv', tempQuery: tempQuery },
          }}
        >
          {name ? <div id='title'>{name}</div> : null}
        </Link>
        {release ? <div id='release'>First Aired {release}</div> : null}
        <Link
          onClick={() => {
            dispatch(setSearchStatus(false));
            dispatch(changeCategory(null));
            sessionStorage.setItem(
              'scrollPosition',
              JSON.stringify(window.pageYOffset)
            );
          }}
          style={{
            textDecoration: 'none',
            fontSize: '1.4em',
            marginBottom: '.5em',
            fontWeight: 'normal',
            color: 'inherit',
          }}
          to={{
            pathname: `/details/${name.replace(
              // eslint-disable-next-line no-useless-escape
              /[.,/#!$%\^&\*;:{}=\-_`~()]/g,
              ''
            )}`,
            state: { id: id, title: name, type: 'tv', tempQuery: tempQuery },
          }}
        >
          <div id='overview'>{overview}</div>
        </Link>
        {rating ? (
          <div id='rating'>
            {rating ? <Stars rating={rating} reviews={reviews} /> : 'No Rating'}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Show;
