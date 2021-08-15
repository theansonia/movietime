import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { updatePages } from '../appSlices/pagesSlice';
import { setSearchStatus } from '../appSlices/searchStatusSlice';
import { setQuery } from '../features/components/search/searchSlices/querySlice';
import { setValue } from '../features/components/search/searchSlices/valueSlice';

export const useHandleSearchClick = () => {
  const dispatch = useDispatch();
  const searchStatus = useSelector((state) => state.searchStatus.value);
  const category = useSelector((state) => state.category.value);
  const history = useHistory();
  return () => {
    // setTimeout(() => {
    //   const search = document.getElementsByName('search');
    //   if (search) search.focus();
    //   return search;
    // }, 0);

    // const searchicon = document.getElementById('searchicon');
    // searchicon.style.visibility = 'visible';
    const input = document.getElementsByName('search');
    input[0].focus();

    if (!searchStatus) {
      dispatch(setSearchStatus(true));
      dispatch(setQuery(''));
      dispatch(updatePages(1));
      dispatch(setValue(''));
    }
    // if (searchStatus && !category) history.push('/home');
  };
};
