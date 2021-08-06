import React from 'react'
import { Link } from 'react-router-dom'

const TVRecs = ({ name, pic }) => {
  return (
    <div id="recs">
      <Link
        style={{
          textDecoration: 'none',
          fontSize: '1em',
          marginBottom: '.5em',
          fontWeight: 'bold',
          marginTop: '.5em',
          color: 'inherit',
          zIndex: '100000000000',
        }}
        to={`/details/${name}`}
      >
        {name ? <div id="rectitle">{name}</div> : null}
      </Link>

      <Link style={{ textDecoration: 'none' }} to={`/details/${name}`}>
        {pic !== 'https://image.tmdb.org/t/p/w500/null' ? (
          <div id="recposterdiv">
            <img
              style={{ borderRadius: '30px' }}
              id="recposter"
              src={pic}
              alt={`Movie poster for ${name}`}
            />
          </div>
        ) : (
          <div id="recposterdiv">
            <img
              id="recposter"
              style={{ borderRadius: '30px' }}
              src="https://image.tmdb.org/t/p/w500///lyTCCuymqg8egIaQXZAY5vE4MB0.jpg"
              alt="back up movie poster cinema pardiso"
            />
          </div>
        )}
      </Link>
    </div>
  )
}

export default TVRecs
