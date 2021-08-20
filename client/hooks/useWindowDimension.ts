import { useUserContext } from '../contexts/UserContext';
import { refreshUser } from '../utils/AuthService';
import { useEffect, useState } from 'react';

export interface useWindowDimensionProps {}

export const useWindowDimension = () => {
  const { setUserDetails } = useUserContext();
  const [windowDimension, setWindowDimension] = useState(null);
  const [isMobile, setIsMobile] = useState(windowDimension <= 640);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
    if (windowDimension <= 640) setIsMobile(true);
    else setIsMobile(false);
    const handleResize = () => {
      setWindowDimension(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);

  useEffect(() => {
    if (windowDimension <= 640) setIsMobile(true);
    else setIsMobile(false);
  }, [windowDimension]);
  return [isMobile, setIsMobile];
};
