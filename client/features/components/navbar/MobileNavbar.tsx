import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useUserContext } from '../../../contexts/UserContext';
import { isAuthenticated, logout } from '../../../utils/AuthService';
import { setQuery } from '../search/searchSlices/querySlice';
import { setValue } from '../search/searchSlices/valueSlice';
import { updatePages } from '../../../appSlices/pagesSlice';
import { setSearchStatus } from '../../../appSlices/searchStatusSlice';
import { changeCategory } from '../../../appSlices/categorySlice';
import { handleKeyPress } from '../../../utils/handleKeyPress';
import './Navbar.scss';
import { MobileSearch } from '../searchbutton/MobileSearch';
import { RootState } from 'client/reducer';

export interface MobileNavbarProps {}

export const MobileNavbar = () => {
  const [visible, setVisible] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [title, setTitle] = useState(
    <Title
      onClick={() => {
        handleClose();
        history.push('/registration');
      }}
      // className={classes.title}
    >
      Sign Up
    </Title>
  );
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const category = useSelector((state: RootState) => state.category.value);
  const { userDetails } = useUserContext();
  const history = useHistory();

  useEffect(() => {
    if (pathname === '/signin') {
      dispatch(changeCategory(null));
    }
  }, [pathname]);

  useEffect(() => {
    if (isAuthenticated()) {
      setTitle(<Title>{`${userDetails.first_name}`}</Title>);
    } else {
      setTitle(
        <Title
          onClick={() => {
            handleClose();
            history.push('/registration');
          }}
        >
          Sign Up
        </Title>
      );
    }
  }, [userDetails]);

  const handleClick = () => {
    dispatch(setQuery(''));
    dispatch(setValue(''));
    dispatch(updatePages(1));
    dispatch(setSearchStatus(false));
  };

  const handleLogOut = () => {
    setTitle(
      <Title
        onClick={() => {
          handleClose();
          history.push('/registration');
        }}
      >
        Sign Up
      </Title>
    );
    // setAnchorEl(null);
    logout();
  };

  const showDrawer = (event) => {
    setVisible(true);
    // setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const onSearchFocus = () => {
    setSearchStatus(true);
    if (!category || category === 'Movies and TV Show') {
      history.push('/home');
      dispatch(setQuery(''));
      dispatch(setValue(''));
      dispatch(updatePages(1));
      dispatch(setSearchStatus(true));
    }
    setOpen(true);
  };

  const onSearchBlur = () => {
    setOpen(false);
  };

  return (
    <MobileWrapper>
      <IconMenu
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={showDrawer}
        style={{ fill: '#f8f9fa' }}
      />
      <MobileSearch
        isOpen={isOpen}
        onSearchFocus={onSearchFocus}
        onSearchBlur={onSearchBlur}
      />
      <Drawer
        title={title}
        width={150}
        height='75px'
        placement={'left'}
        closable={true}
        onClose={handleClose}
        visible={visible}
        key={'left'}
        drawerStyle={{
          opacity: '.6',
        }}
        style={{
          height: '35%',
          marginTop: '2.5rem',
        }}
        className='drawer'
      >
        {isAuthenticated() ? (
          <Item
            onClick={() => {
              handleClose();
              handleLogOut();
            }}
            key='1'
            category='blank'
            title='ignore'
          >
            Logout
          </Item>
        ) : (
          <Item
            onClick={() => {
              handleClose();
              history.push('/signin');
            }}
            key='1'
            category={pathname}
            title='/signin'
          >
            Sign In
          </Item>
        )}

        <Item
          onClick={() => {
            handleClose();
            dispatch(changeCategory('Movies and TV Show'));
            handleClick();
            history.push('/home');
          }}
          onKeyDown={handleKeyPress}
          role='button'
          tabIndex={0}
          key='2'
          title='Movies and TV Show'
          category={category}
        >
          Home
        </Item>

        <Item
          onClick={() => {
            handleClose();
            dispatch(changeCategory('Movie'));
            handleClick();
            history.push('/movies');
          }}
          onKeyDown={handleKeyPress}
          role='button'
          tabIndex={1}
          key='3'
          title='Movie'
          category={category}
        >
          Film
        </Item>

        <Item
          onClick={() => {
            handleClose();
            dispatch(changeCategory('TV'));
            handleClick();
            history.push('/shows');
          }}
          onKeyDown={handleKeyPress}
          role='button'
          tabIndex={3}
          key='4'
          title='TV'
          category={category}
        >
          TV
        </Item>
      </Drawer>
    </MobileWrapper>
  );
};

const IconMenu = styled(MenuIcon)`
  fill: #f8f9fa;
`;
const MobileWrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 100vw;
  top: 0;
  left: 0;
  flex: 1;
  align-self: flex-start;
  padding: 0.5rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #212529;
  color: #f8f9fa;
`;

const Item = styled.p<{ category: string; title: string }>`
  font-weight: ${(p) => (p.category === p.title ? '700' : '300')};
  color: rgb(33, 37, 41);
  text-decoration: none;
  font-size: 1rem;
  margin: 0;
  padding: 0;

  &:hover {
    background-color: #adb5bd;
  }

  &:focus {
    background-color: #adb5bd;
  }
`;

const Title = styled.p`
  color: rgba(167, 161, 161, 1);
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  margin: 0;
  padding: 0;
`;
