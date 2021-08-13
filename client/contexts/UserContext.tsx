import { createContext, useContext, useState } from 'react';

export const user = {
  email: '',
  password: '',
  username: '',
  id: 0,
};

export interface UserInfoContextTypes {
  email?: string | null;
  password?: string | null;
  username?: string | null;
  id?: null | number;
  setUserDetails?: ({}) => void;
}
export const UserContext = createContext<UserInfoContextTypes>({
  email: '',
  password: '',
  username: '',
  id: null,
  setUserDetails: ({}) => console.warn('No Set User Provider'),
});

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState<UserInfoContextTypes | {}>(
    user
  );

  return (
    <UserContext.Provider value={{ ...userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
