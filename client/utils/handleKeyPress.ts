import { SyntheticEvent } from 'react';

export const handleKeyPress = (e: SyntheticEvent): HTMLButtonElement => {
  const target = e.target as HTMLButtonElement;
  // document.addEventListener('keydown', (e) => {
  //   const key = e.key;
  //   if (key === 'Tab') target.focus();
  // });

  return target;
};
