/* eslint-disable no-useless-escape */
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Recs = ({ title, pic, id }) => {
  const category = useSelector((state) => state.category)
  const topFunction = () => {
    console.log('hey')
    window.scrollTo(0, 0)
  }

  return (
    <div id='recs'>
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
        to={{
          pathname: `/moviedetails/${title.replace(
            /[.,/#!$%\^&\*;:{}=\-_`~()]/g,
            ''
          )}`,
          state: { id: id, category: category },
        }}
      >
        {title ? <div id='rectitle'>{title}</div> : null}
      </Link>
      <Link
        style={{ textDecoration: 'none' }}
        to={{
          pathname: `/moviedetails/${title.replace(
            /[.,/#!$%\^&\*;:{}=\-_`~()]/g,
            ''
          )}`,
          state: { id: id, category: category },
        }}
      >
        {pic !== 'https://image.tmdb.org/t/p/w500/null' ? (
          <div id='recposterdiv' onClick={topFunction}>
            <img
              id='recposter'
              style={{ borderRadius: '30px' }}
              src={pic}
              alt={`Movie poster for ${title}`}
            />
          </div>
        ) : (
          <div id='recposterdiv'>
            <img
              id='recposter'
              style={{ borderRadius: '30px' }}
              src='https://image.tmdb.org/t/p/w500///tfNuePdHrP9fp6K2VTJwHKKJf8C.jpg'
              alt='back up movie poster cinema pardiso'
            />
          </div>
        )}
      </Link>
    </div>
  )
}

export default Recs
