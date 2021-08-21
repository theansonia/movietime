import { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Popover } from 'antd';
import 'antd/dist/antd.css';
import { handleKeyPress } from '../../../utils/handleKeyPress';
import { changeCategory } from '../search/searchSlices/categorySlice';
import { updatePages } from '../../../appSlices/pagesSlice';
import { setQuery } from '../search/searchSlices/querySlice';
import { setSearchStatus } from '../../../appSlices/searchStatusSlice';
import { setValue } from '../search/searchSlices/valueSlice';
import ToggleTheme from '../toggleTheme/ToggleTheme';
import './Navbar.scss';
import { useUserContext } from '../../../contexts/UserContext';
import AvatarCircle from './AvatarCircle';
import { isAuthenticated, logout } from '../../../utils/AuthService';
import { RootState } from 'client/reducer';
import { SearchButton } from '../searchbutton/SearchButton';

const Navbar = () => {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const { userDetails } = useUserContext();
  const [isOpen, setOpen] = useState(false);
  const category = useSelector((state: RootState) => state.category.value);
  const history = useHistory();

  useEffect(() => {
    setLoggedIn(isAuthenticated());
  }, [userDetails]);

  const handleClick = () => {
    dispatch(setQuery(''));
    dispatch(setValue(''));
    dispatch(updatePages(1));
    dispatch(setSearchStatus(false));
  };

  // const handleHover = () => {
  //   setIsHovered(!isHovered);
  // };

  const handleLogOut = () => {
    setLoggedIn(false);
    logout();
  };

  const handleVisibleChange = (visible: boolean) => {
    setVisible(!visible);
  };

  const onSearchFocus = () => {
    if (!category || category === 'Movies and TV Show') {
      history.push('/home');
    }
    setOpen(true);
    dispatch(setSearchStatus(true));
    dispatch(setQuery(''));
    dispatch(setValue(''));
    dispatch(updatePages(1));
    dispatch(setSearchStatus(true));
  };

  const onSearchBlur = (e: SyntheticEvent) => {
    setOpen(false);
    dispatch(setSearchStatus(false));
  };
  return (
    <LaptopNavbar>
      <FirstNavContainer>
        <Watchr>WATCHR</Watchr>
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
          <div>TV</div>
        </Link>
      </FirstNavContainer>

      <SecondNavContainer>
        <div>
          <SearchButton
            isOpen={isOpen}
            onSearchFocus={onSearchFocus}
            onSearchBlur={onSearchBlur}
          />
        </div>
        <div
          className='signin'
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          {isAuthenticated() && userDetails.first_name ? (
            <AvatarCircle initial={userDetails.first_name[0]} />
          ) : (
            // <FaceRoundedIcon id='profile' style={{ position: 'relative' }} />
            <Link to='/signin'>
              <div className='signin'>Sign In</div>
            </Link>
          )}

          {!isHovered && isAuthenticated() ? (
            <ArrowDropDownIcon
              style={{ position: 'relative', bottom: '.1rem', width: '1rem' }}
              id='arrow'
            />
          ) : (
            <>
              {loggedIn && isAuthenticated() && (
                <div
                  style={{
                    // marginLeft: buttonWidth,
                    clear: 'both',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Popover
                    placement='bottom'
                    title={`${userDetails.first_name} ${userDetails.last_name}`}
                    content={
                      <div className='popover-content'>
                        <p id='popover-logout' onClick={handleLogOut}>
                          Logout
                        </p>
                      </div>
                    }
                    trigger='hover'
                    visible={visible}
                    onVisibleChange={handleVisibleChange}
                  >
                    <ArrowDropUpIcon
                      style={{
                        position: 'relative',
                        bottom: '.25rem',
                        width: '1rem',
                      }}
                      id='arrow'
                    />
                  </Popover>
                </div>
              )}
            </>
          )}
        </div>

        <ToggleTheme />
      </SecondNavContainer>
    </LaptopNavbar>
  );
};

export default Navbar;

const LaptopNavbar = styled.div`
  background-color: #212529;
  height: 4rem;
  font-size: 1rem;
  position: fixed;
  top: 0;
  display: grid;
  grid-template-columns: [categories] 30% [search] 70% [end];
  font-weight: 400;
  min-width: 100%;
  z-index: 99;
  place-items: center;
`;
const Watchr = styled.div`
  color: #ef7763;
  font-weight: bold;
  justify-self: flex-start;
  font-size: 2rem;
`;
const FirstNavContainer = styled.div`
  display: flex;
  place-items: center;
  gap: 2rem;
  justify-self: flex-start;
  margin-left: 4rem;
`;
const SecondNavContainer = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  place-items: center;
  justify-self: flex-end;
  margin-right: 3.5rem;
`;
