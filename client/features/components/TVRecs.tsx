/* eslint-disable no-useless-escape */
import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../reducer';
interface TVRecsProps {
  name: string;
  pic: string;
  id?: string | number;
}

const TVRecs: FunctionComponent<TVRecsProps> = ({
  name,
  pic,
  id,
}: TVRecsProps): JSX.Element => {
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
          pathname: `/tvdetails/${name.replace(
            /[.,/#!$%\^&\*;:{}=\-_`~()]/g,
            ''
          )}`,
          state: { id: id, name: name },
        }}
      >
        {name ? <div id='rectitle'>{name}</div> : null}
      </Link>

      <Link
        style={{ textDecoration: 'none' }}
        to={{
          pathname: `/tvdetails/${name.replace(
            /[.,/#!$%\^&\*;:{}=\-_`~()]/g,
            ''
          )}`,
          state: { id: id, name: name },
        }}
      >
        {pic !== 'https://image.tmdb.org/t/p/w500/null' ? (
          <div id='recposterdiv'>
            <img
              style={{ borderRadius: '30px' }}
              id='recposter'
              src={pic}
              alt={`Movie poster for ${query}`}
            />
          </div>
        ) : (
          <div id='recposterdiv'>
            <img
              id='recposter'
              style={{ borderRadius: '30px' }}
              src='https://image.tmdb.org/t/p/w500///lyTCCuymqg8egIaQXZAY5vE4MB0.jpg'
              alt='back up movie poster cinema pardiso'
            />
          </div>
        )}
      </Link>
    </div>
  );
};

export default TVRecs;
