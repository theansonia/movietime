import { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { handleKeyPress } from '../../../utils/handleKeyPress';
import { changeCategory } from '../../../appSlices/categorySlice';
import { updatePages } from '../../../appSlices/pagesSlice';
import { setQuery } from '../../../appSlices/querySlice';
import { setSearchStatus } from '../../../appSlices/searchStatusSlice';
import { setValue } from '../search/searchSlices/valueSlice';
import ToggleTheme from '../toggleTheme/ToggleTheme';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import './Navbar.scss';
const Navbar: FunctionComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    dispatch(setQuery(''));
    dispatch(setValue(''));
    dispatch(updatePages(1));
    dispatch(setSearchStatus(false));
  };

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div id='navbar'>
      <Link to='/home' id='homebutton'>
        <div
          data-testid='homebtn'
          onClick={() => {
            dispatch(changeCategory('Movies and TV Show'));
            handleClick();
          }}
          onKeyDown={handleKeyPress}
          role='button'
          tabIndex={0}
        >
          <svg
            id='homebtn'
            width='48'
            height='48'
            viewBox='0 0 24 24'
            fill=''
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0)'>
              <rect width='24' height='24' fill='#212529' />
              <path
                id='homepath'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M22 11.414V24H2V11.414L0.707 12.707L0 12L12 0L24 12L23.293 12.707L22 11.414ZM16 23H21V10.414L12 1.414L3 10.414V23H8V14H16V23ZM15 15.111H9V22.889H15V15.111Z'
                fill='#F8F9FA'
              />
            </g>
            <defs>
              <clipPath id='clip0'>
                <rect width='24' height='24' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </div>
      </Link>
      <Link
        id='filmbutton'
        to={'/movies'}
        className='option'
        onClick={() => {
          dispatch(changeCategory('Movie'));
          handleClick();
        }}
        onKeyDown={handleKeyPress}
        role='button'
        tabIndex={0}
      >
        <div>Movies</div>
      </Link>
      <Link
        id='tvbutton'
        to={'/shows'}
        className='option'
        onClick={() => {
          dispatch(changeCategory('TV'));
          handleClick();
        }}
        onKeyDown={handleKeyPress}
        role='button'
        tabIndex={0}
      >
        <div>TV Shows</div>
      </Link>

      <div>
        <Link to='/registration'>
          <div
            id='signin'
            className='option'
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={{ marginTop: '1rem' }}
          >
            Sign In
            {!isHovered ? (
              <ArrowDropDownIcon
                style={{ position: 'absolute', top: '1.25rem' }}
              />
            ) : (
              <ArrowDropUpIcon
                style={{ position: 'absolute', top: '1.25rem' }}
              />
            )}
          </div>
        </Link>
      </div>
      <ToggleTheme />
    </div>
  );
};

export default Navbar;
