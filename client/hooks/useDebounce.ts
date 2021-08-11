import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../features/components/search/searchSlices/querySlice';
import debounce from 'lodash.debounce';
import { setValue } from '../features/components/search/searchSlices/valueSlice';
import { RootState } from '../reducer';

export function useDebounce(): string {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.value.value);
  const debouncedSearch = useMemo(
    () =>
      debounce((val) => {
        dispatch(setQuery(val));
      }, 300),
    [dispatch]
  );

  const handleChange = useCallback(
    (initialValue) => {
      dispatch(setValue(initialValue));
      debouncedSearch(initialValue);
    },
    [debouncedSearch, dispatch]
  );

  useEffect(() => {
    handleChange(value);
  }, [handleChange, value]);

  return value;
}
