import { logout } from '../../../utils/AuthService';
import { FunctionComponent } from 'react';

export interface ContentProps {}

export const Content: FunctionComponent<ContentProps> = () => {
  const handleLogOut = () => {
    logout();
  };
  return (
    <div className='popover-content'>
      <p id='popover-logout' onClick={handleLogOut}>
        Logout
      </p>
    </div>
  );
};
