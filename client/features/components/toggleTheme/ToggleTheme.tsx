/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sun from './sun.svg';
import moon from './moon.svg';
import { setLightTheme } from './toggleThemeSlice';
import { RootState } from '../../../reducer';
import { handleKeyPress } from '../../../utils/handleKeyPress';

const ToggleTheme: FunctionComponent = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.value);
  const [icon, setIcon] = useState(sun);

  const toggleTheme = () => {
    if (theme === 'lightmode') {
      dispatch(setLightTheme('darkmode'));
    }
    if (theme === 'darkmode') {
      dispatch(setLightTheme('lightmode'));
    }
  };
  return (
    <div className='toggle__box'>
      <span>
        {icon && (
          <img
            src={theme === 'lightmode' ? sun : moon}
            alt='moon or sun symbol for theme'
            className='theme-icon'
          />
        )}
      </span>
      <div className='toggle__btn'>
        <input
          type='checkbox'
          className='checkbox'
          onClick={toggleTheme}
          onKeyPress={(e) => handleKeyPress(e)}
          role='button'
          tabIndex={0}
        />
        <div className='circle'></div>
        <div className='layer'></div>
      </div>
    </div>
  );
};

export default ToggleTheme;
