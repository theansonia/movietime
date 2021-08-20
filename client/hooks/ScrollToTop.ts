import { RootState } from 'client/reducer';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const searchStatus = useSelector(
    (state: RootState) => state.searchStatus.value
  );
  const { pathname } = useLocation();

  useEffect(() => {
    if (searchStatus) {
      try {
        // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      } catch (error) {
        // just a fallback for older browsers
        window.scrollTo(0, 0);
      }
    }
  }, [searchStatus]);

  return null;
};
