import { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { setQuery } from '../search/searchSlices/querySlice';
import { setValue } from '../search/searchSlices/valueSlice';
import { setSearchStatus } from '../../../appSlices/searchStatusSlice';
import { useDebounce } from '../../../hooks/useDebounce';

export interface MobileSearchProps {
  isOpen: boolean;
  onSearchFocus: () => void;
  onSearchBlur: () => void;
}

export const MobileSearch: React.SFC<MobileSearchProps> = ({
  isOpen,
  onSearchFocus,
  onSearchBlur,
}) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [localCategory, setLocalCategory] = useState('');
  const debouncedQuery: string = useDebounce();

  useEffect(() => {
    if (pathname === '/shows') setLocalCategory('TV Show');
    if (pathname === '/home') setLocalCategory('Movies and TV Show');
    if (pathname === '/movies') setLocalCategory('Movie');
    if (pathname === '/signin') setLocalCategory('Movies and TV Show');
  }, [pathname]);

  useEffect(() => {
    dispatch(setValue(debouncedQuery));
  }, [debouncedQuery, dispatch]);

  return (
    <Container>
      <SearchBox
        isOpen={isOpen}
        onFocus={onSearchFocus}
        id='mobilesearch'
        type='search'
        list='movie'
        name='search'
        placeholder='Search'
        onChange={(e) => dispatch(setValue(e.target.value))}
        value={debouncedQuery}
        onBlur={() => {
          dispatch(setSearchStatus(false));
          onSearchBlur();
        }}
        // ref={ref}
        onSubmit={(e: SyntheticEvent) => {
          e.preventDefault();
          const { value } = e.target[0] as HTMLTextAreaElement;
          dispatch(setQuery(value));
        }}
      />
    </Container>
  );
};

const SearchBox = styled.input<{ isOpen: boolean }>`
  width: ${(p) => (p.isOpen ? '100%' : '4rem')};
  transition: all 0.75s;
  background-color: #f8f9fa;
  border-radius: 6px;
  float: right;
  color: #212529;
  text-indent: 5px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #212529;
    font-size: xx-small;
    margin: 0;
    text-indent: 0px;
  }
  :-ms-input-placeholder {
     color: #212529;
     font-size: xx-small;
     margin: 0;
     text-indent: 0px;
  }
}
`;
const Container = styled.div`
  // padding: 1rem;
`;
