import { useDispatch, useSelector } from 'react-redux';
import { updatePages } from '../appSlices/pagesSlice';
import { setSearchStatus } from '../appSlices/searchStatusSlice';
import { setQuery } from '../features/components/search/searchSlices/querySlice';
import { setValue } from '../features/components/search/searchSlices/valueSlice';

export const useHandleSearchClick = () => {
  const dispatch = useDispatch();
  const searchStatus = useSelector((state) => state.searchStatus.value);
  return () => {
    const input = document.getElementsByName('search');
    input[0].focus();

    if (!searchStatus) {
      dispatch(setSearchStatus(true));
      dispatch(setQuery(''));
      dispatch(updatePages(1));
      dispatch(setValue(''));
    }
  };
};
