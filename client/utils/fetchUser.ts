import { getToken, isAuthenticated } from './AuthService';
import { checkBrowser } from './checkBrowser';

export type User = {
  user: {};
};
export type Token = {
  token: {};
};

interface UserData {
  user: {};
  token: { Token };
}
export const fetchUser = (
  data: {
    email: string;
    password?: string;
    first_name?: string;
    last_name?: string;
  },
  endpoint: string,
  options: RequestInit
): Promise<UserData> => {
  const fetchUserData = async () => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    if (isAuthenticated()) {
      headers['Authorization'] = 'Bearer ' + getToken();
    }

    try {
      const response = await fetch(`/signin/${endpoint}`, {
        // method: 'POST',
        // cache: 'no-cache',
        // mode: 'cors',
        headers,
        ...options, // body data type must match "Content-Type" header
      });
      const userData = await response.json();
      return userData;
    } catch (err) {
      // catches errors both in fetch and response.json
      console.log('error creating and fetching user details', err);
    } finally {
      console.log('successful api fetchUser');
    }
  };

  const user = fetchUserData();
  return user;
};
