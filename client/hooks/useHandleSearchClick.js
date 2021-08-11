import { useDispatch, useSelector } from 'react-redux';
import { updatePages } from '../appSlices/pagesSlice';
import { setSearchStatus } from '../appSlices/searchStatusSlice';
import { setQuery } from '../features/components/search/searchSlices/querySlice';
import { setValue } from '../features/components/search/searchSlices/valueSlice';
import { RootState } from '../reducer';

export const useHandleSearchClick = () => {
  const dispatch = useDispatch();
  const searchStatus = useSelector((state) => state.searchStatus.value);

  return () => {
    setTimeout(() => {
      const search = document.getElementById('search');
      if (search) search.focus();
      return search;
    }, 0);

    if (!searchStatus) {
      dispatch(setSearchStatus(true));
      dispatch(setQuery(''));
      dispatch(updatePages(1));
      dispatch(setValue(''));
    }
  };
};
