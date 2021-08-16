import { createContext, useContext, useState } from 'react';

export const user = {};

export interface UserInfoContextTypes {
  userDetails: {
    first_name: string;
    last_name: string;
    password: string;
    username?: string;
    email: string;
  };
  setUserDetails?: ({}) => void;
}
export const UserContext = createContext<UserInfoContextTypes>({
  userDetails: { first_name: '', last_name: '', password: '', email: '' },
  setUserDetails: ({}) => console.warn('No Set User Provider'),
});

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState<UserInfoContextTypes | any>(
    user
  );

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
