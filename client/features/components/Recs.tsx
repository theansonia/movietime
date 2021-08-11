/* eslint-disable no-useless-escape */
import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { MovieRecsProps } from '../../../types/index';
// import { setQuery } from '../../appSlices/querySlice';
import { RootState } from '../../reducer';

interface MovieRecsProps {
  title: string;
  pic: string;
  id: number | string;
}

const Recs: FunctionComponent<MovieRecsProps> = ({
  title,
  pic,
  id,
}: MovieRecsProps) => {
  const query = useSelector((state: RootState): string => state.query.value);

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
          zIndex: 100000000000,
        }}
        to={{
          pathname: `/moviedetails/${title.replace(
            /[.,/#!$%\^&\*;:{}=\-_`~()]/g,
            ''
          )}`,
          state: { id: id, title: title },
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
          state: { id: id, title: title },
        }}
      >
        {pic !== 'https://image.tmdb.org/t/p/w500/null' ? (
          <div
            id='recposterdiv'
            // onClick={topFunction}
            // onKeyDown={handleKey}
            role='button'
            tabIndex={0}
          >
            <img
              id='recposter'
              style={{ borderRadius: '30px' }}
              src={pic}
              alt={`Movie poster for ${query}`}
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
  );
};

export default Recs;
