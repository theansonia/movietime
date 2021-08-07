/* eslint-disable no-useless-escape */
import React from 'react'
import Stars from './Stars'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeCategory } from '../../appSlices/categorySlice'
import { setSearchStatus } from '../../appSlices/searchStatusSlice'

const Movie = ({
  title,
  poster,
  overview,
  release,
  rating,
  reviews,
  type,
  aired,
  id,
}) => {
  const dispatch = useDispatch()

  return (
    <div id='movies'>
      <Link
        onClick={() => {
          dispatch(setSearchStatus(false))
          dispatch(changeCategory(null))
        }}
        style={{ textDecoration: 'none' }}
        // eslint-disable-next-line no-useless-escape
        to={{
          pathname: `/moviedetails/${title.replace(
            /[.,/#!$%\^&\*;:{}=\-_`~()]/g,
            ''
          )}`,
          state: { id: id, type: type },
        }}
      >
        <div id='poster'>
          {poster !== 'https://image.tmdb.org/t/p/w500/null' &&
          poster !== 'https://image.tmdb.org/t/p/w500/undefined' ? (
            <img id='poster' src={poster} alt={`Movie poster for ${title}`} />
          ) : (
            <img
              id='poster'
              src='https://image.tmdb.org/t/p/w500//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg'
              alt='back up movie poster cinema pardiso'
            />
          )}
        </div>
      </Link>
      <div id='details'>
        <Link
          onClick={() => {
            dispatch(setSearchStatus(false))
            dispatch(changeCategory(null))
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
            pathname: `/moviedetails/${title.replace(
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
            dispatch(setSearchStatus(false))
            dispatch(changeCategory(null))
          }}
          style={{
            textDecoration: 'none',
            fontSize: '1.4em',
            marginBottom: '.5em',
            fontWeight: 'normal',
            color: 'inherit',
          }}
          to={{
            pathname: `/moviedetails/${title.replace(
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
  )
}

export default Movie
