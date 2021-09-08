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

  let hero = 'https://image.tmdb.org/t/p/w500/8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg';
  if (
    poster !== 'https://image.tmdb.org/t/p/w500/null' &&
    poster !== 'https://image.tmdb.org/t/p/w500/undefined'
  )
    hero = poster;

  return (
    <>
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
        // eslint-disable-next-line no-useless-escape
        to={
          title
            ? {
                pathname: `/details/${title.replace(
                  /[.,/#!$%\^&\*;:{}=\-_`~()]/g,
                  ''
                )}`,
                state: { id: id, type: type },
              }
            : {
                pathname: `/home`,
              }
        }
        id='contentlink'
      >
        <div className='poster'>
          {poster !== 'https://image.tmdb.org/t/p/w500/null' &&
            poster !== 'https://image.tmdb.org/t/p/w500/undefined' && (
              <img
                className='poster'
                src={
                  hero && hero.length > 0
                    ? hero
                    : 'https://image.tmdb.org/t/p/w500/8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg'
                }
                alt={`Movie poster for ${title}`}
                data-testid='thumbnail'
              />
            )}
        </div>

        <div id='details'>
          {title && <div id='title'>{title}</div>}
          <div id='type'>{type && type.length === 2 && type.toUpperCase()}</div>
          <div id='type'>
            {type &&
              type.length > 2 &&
              type[0].toUpperCase() + type.substring(1)}
          </div>

          {release && <div id='release'>Premiered {release}</div>}
          {aired && <div id='release'>First Aired {aired}</div>}
          <div id='overview'>{overview}</div>

          {rating && (
            <div id='rating'>
              {rating ? (
                <Stars rating={rating} reviews={reviews} />
              ) : (
                'No Rating'
              )}
            </div>
          )}
        </div>
      </Link>
    </>
  );
};

export default Movie;
