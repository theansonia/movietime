import { useEffect, useRef } from 'react';

export const useUnload = (func) => {
  const cb = useRef(func);
  console.log(cb);
  useEffect(() => {
    const onUnload = cb.current;
    window.addEventListener('onbeforeunload', onUnload);
    return () => window.removeEventListener('onbeforeunload', onUnload);
  });
};
