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
    <>
      <Link
        id='contentlink'
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
        <div className='poster'>
          {poster !== 'https://image.tmdb.org/t/p/w500/null' &&
          poster !== 'https://image.tmdb.org/t/p/w500/undefined' ? (
            <img
              className='poster'
              src={poster}
              alt={`TV poster for ${name}`}
            />
          ) : (
            <img
              id='poster'
              src='https://image.tmdb.org/t/p/w500//aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg'
              alt='back up tv poster of seinfeld'
            />
          )}
        </div>

        <div id='details'>
          {name ? <div id='title'>{name}</div> : null}

          {release ? <div id='release'>First Aired {release}</div> : null}

          <div id='overview'>{overview}</div>

          {rating ? (
            <div id='rating'>
              {rating ? (
                <Stars rating={rating} reviews={reviews} />
              ) : (
                'No Rating'
              )}
            </div>
          ) : null}
        </div>
      </Link>
    </>
  );
};

export default Show;
