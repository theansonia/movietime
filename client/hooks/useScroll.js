import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePages } from '../appSlices/pagesSlice';
// import { RootState } from '../app/reducer';s

export const useScroll = () => {
  const isLoading = useSelector((state) => state.isLoading.value);
  const pages = useSelector((state) => state.pages.value);
  const hasMore = useSelector((state) => state.hasMore.value);
  const query = useSelector((state) => state.query.value);
  const observer = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.length < 1) {
      document.addEventListener('keydown', () => {
        const key = event.key; // const {key} = event; ES6+
        if (key === 'Backspace') {
          dispatch(updatePages(1));
        }
      });
    }
  }, [query]);

  const lastOne = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          dispatch(updatePages(pages + 1));
        }
      });
      if (node) {
        observer.current.observe(node);
        console.log(node);
      }
    },
    [isLoading, hasMore]
  );
  return lastOne;
};
