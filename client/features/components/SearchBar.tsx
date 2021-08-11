import { useEffect, useState, FunctionComponent, SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { RouteComponentProps } from 'react-router';
import { handleKeyPress } from '../../utils/handleKeyPress';
import { updatePages } from '../../appSlices/pagesSlice';
import { setQuery } from '../../appSlices/querySlice';
import { RootState } from '../../reducer';
import { setValue } from './search/searchSlices/valueSlice';
import { useDebounce } from '../../hooks/useDebounce';
export interface MyInputHandles {
  focus(): void;
  state?: string;
  featuring?: string;
}

type Props = {
  state?: string;
  featuring?: string;
};
// eslint-disable-next-line react/display-name

const SearchBar: FunctionComponent<Props> = (props: Props) => {
  const searchStatus = useSelector(
    (state: RootState) => state.searchStatus.value
  );
  const dispatch = useDispatch();
  const [localCategory, setLocalCategory] = useState(props.state);
  const debouncedQuery: string = useDebounce();

  useEffect(() => {
    if (localCategory === 'TV') setLocalCategory('TV Show');
  }, [localCategory]);

  useEffect(() => {
    dispatch(setValue(debouncedQuery));
  }, [debouncedQuery, dispatch]);

  return (
    <>
      {searchStatus && (
        <div id='searchbar'>
          <div
            id='x'
            onClick={() => {
              dispatch(setQuery(''));
              dispatch(updatePages(1));
              dispatch(setValue(''));
            }}
            onKeyDown={(e) => handleKeyPress(e)}
            role='button'
            tabIndex={0}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                id='xpath'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 0C18.623 0 24 5.377 24 12C24 18.623 18.623 24 12 24C5.377 24 0 18.623 0 12C0 5.377 5.377 0 12 0ZM12 1C18.071 1 23 5.929 23 12C23 18.071 18.071 23 12 23C5.929 23 1 18.071 1 12C1 5.929 5.929 1 12 1ZM12 11.293L17.293 6L18 6.707L12.707 12L18 17.293L17.293 18L12 12.707L6.707 18L6 17.293L11.293 12L6 6.707L6.707 6L12 11.293Z'
                fill='#F8F9FA'
              />
            </svg>
          </div>
          <form
            onSubmit={(e: SyntheticEvent) => {
              e.preventDefault();
              const { value } = e.target[0] as HTMLTextAreaElement;
              dispatch(setQuery(value));
            }}
          >
            <input
              id='search'
              list='movie'
              placeholder={`Search for ${localCategory}s`}
              onChange={(e) => dispatch(setValue(e.target.value))}
              type='search'
              value={debouncedQuery}
            />
          </form>
        </div>
      )}
    </>
  );
};

export default SearchBar;
