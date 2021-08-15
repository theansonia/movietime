import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forwardRef, SyntheticEvent, useEffect, useState } from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import { handleKeyPress } from '../../../utils/handleKeyPress';
// import { useEffect } from 'react';
import { RootState } from '../../../reducer';
import { useHandleSearchClick } from '../../../hooks/useHandleSearchClick';
import './SearchButton.scss';
import { useDebounce } from '../../../hooks/useDebounce';
import { setValue } from '../search/searchSlices/valueSlice';
import { setQuery } from '../../../appSlices/querySlice';
import { updatePages } from '../../../appSlices/pagesSlice';
import { setSearchStatus } from '../../../appSlices/searchStatusSlice';

const SearchButton = forwardRef<HTMLInputElement>((props, ref) => {
  const searchStatus = useSelector(
    (state: RootState) => state.searchStatus.value
  );

  // useEffect(() => {
  //   document.addEventListener(
  //     'focusout',
  //     (e) => {
  //       console.log(e);
  //       setSearchStatus(false);
  //     },
  //     true
  //   );
  // }, []);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [localCategory, setLocalCategory] = useState('');
  const debouncedQuery: string = useDebounce();
  const category = useSelector((state: RootState) => state.category.value);
  const query = useSelector((state: RootState) => state.query.value);
  const handleClick = useHandleSearchClick();
  const history = useHistory();

  const handleFocus = () => {
    setSearchStatus(true);
    if (!category) {
      history.push('/home');
      dispatch(setQuery(''));
      dispatch(setValue(''));
      dispatch(updatePages(1));
      dispatch(setSearchStatus(true));
    }
  };

  useEffect(() => {
    if (pathname === '/shows') setLocalCategory('TV Show');
    if (pathname === '/home') setLocalCategory('Movies and TV Show');
    if (pathname === '/movies') setLocalCategory('Movie');
  }, [pathname]);

  useEffect(() => {
    dispatch(setValue(debouncedQuery));
  }, [debouncedQuery, dispatch]);

  return (
    <>
      {category === null ? (
        <div
          id='search-btn-container'
          onClick={() => {
            handleClick();
            history.push('/home');
          }}
          onKeyPress={(e) => handleKeyPress(e)}
          role='button'
          tabIndex={0}
        >
          <input
            id='searchbtn'
            type='search'
            list='movie'
            name='search'
            placeholder={`Search for ${localCategory}s`}
            onChange={(e) => dispatch(setValue(e.target.value))}
            value={debouncedQuery}
            onFocus={handleFocus}
            onBlur={() => dispatch(setSearchStatus(false))}
            ref={ref}
            onSubmit={(e: SyntheticEvent) => {
              e.preventDefault();
              const { value } = e.target[0] as HTMLTextAreaElement;
              dispatch(setQuery(value));
            }}
          />

          {!searchStatus && (
            <SearchSharpIcon id='searchicon' style={{ position: 'fixed' }} />
          )}
        </div>
      ) : (
        <div
          onClick={handleClick}
          onKeyPress={(e) => handleKeyPress(e)}
          role='button'
          tabIndex={0}
          id='search-btn-container'
          // className='searchbtn'
        >
          <div id='wrapper'>
            <input
              id='searchbtn'
              list='movie'
              name='search'
              placeholder={`Search for ${localCategory}s`}
              onChange={(e) => dispatch(setValue(e.target.value))}
              type='search'
              value={debouncedQuery}
              onFocus={handleFocus}
              onBlur={() => dispatch(setSearchStatus(false))}
              onSubmit={(e: SyntheticEvent) => {
                e.preventDefault();
                const { value } = e.target[0] as HTMLTextAreaElement;
                dispatch(setQuery(value));
              }}
              ref={ref}
            />
            {!searchStatus && (
              <SearchSharpIcon id='searchicon' style={{ position: 'fixed' }} />
            )}

            {query && searchStatus && (
              <ClearIcon
                id='clear'
                onClick={() => {
                  dispatch(setQuery(''));
                  dispatch(setValue(''));
                  dispatch(updatePages(1));
                  dispatch(setSearchStatus(true));
                }}
                onKeyDown={(e) => handleKeyPress(e)}
                role='button'
                tabIndex={0}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
});

export default SearchButton;
