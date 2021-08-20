/* eslint-disable no-useless-escape */
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../components/search/searchSlices/categorySlice';
import { setSearchStatus } from '../../appSlices/searchStatusSlice';
import Stars from './Stars';
import { MovieProps } from '../../types';
import { RootState } from 'client/reducer';

const Movie: FunctionComponent<MovieProps> = ({
  title,
  poster,
  overview,
  release,
  rating,
  reviews,
  type,
  aired,
  id,
}: MovieProps) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  return (
    <div className='movies'>
      <Link
        onClick={() => {
          dispatch(setSearchStatus(false));
          dispatch(changeCategory(null));
        }}
        style={{ textDecoration: 'none' }}
        // eslint-disable-next-line no-useless-escape
        to={{
          pathname: `/details/${title.replace(
            /[.,/#!$%\^&\*;:{}=\-_`~()]/g,
            ''
          )}`,
          state: { id: id, type: type },
        }}
      >
        <div className='poster'>
          {poster !== 'https://image.tmdb.org/t/p/w500/null' &&
          poster !== 'https://image.tmdb.org/t/p/w500/undefined' ? (
            <img
              className='poster'
              src={poster}
              alt={`Movie poster for ${title}`}
            />
          ) : (
            <img
              className='poster'
              src='https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg'
              alt='back up movie poster cinema pardiso'
            />
          )}
        </div>
      </Link>
      <div id='details'>
        <Link
          onClick={() => {
            dispatch(setSearchStatus(false));
            dispatch(changeCategory(null));
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
            pathname: `/details/${title.replace(
              /[.,/#!$%\^&\*;:{}=\-_`~()]/g,
              ''
            )}`,
            state: { id: id, type: type },
          }}
        >
          {title ? <div id='title'>{title}</div> : null}
          <div id='type'>
            {type && type.length === 2 ? type.toUpperCase() : null}
          </div>
          <div id='type'>
            {type && type.length > 2
              ? type[0].toUpperCase() + type.substring(1)
              : null}
          </div>
        </Link>

        {release ? <div id='release'>Premiered {release}</div> : null}
        {aired ? <div id='release'>First Aired {aired}</div> : null}
        <Link
          onClick={() => {
            dispatch(setSearchStatus(false));
            dispatch(changeCategory(null));
          }}
          style={{
            textDecoration: 'none',
            fontSize: '1.4em',
            marginBottom: '.5em',
            fontWeight: 'normal',
            color: 'inherit',
          }}
          to={{
            pathname: `/details/${title.replace(
              /[.,/#!$%\^&\*;:{}=\-_`~()]/g,
              ''
            )}`,
            state: { id: id, type: type },
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

export default Movie;
