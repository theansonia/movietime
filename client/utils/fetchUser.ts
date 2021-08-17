import { checkBrowser } from './checkBrowser';

export const fetchUser = (
  data: {
    email: string;
    password: string;
    first_name?: string;
    last_name?: string;
  },
  endpoint: string
): {} => {
  const fetchUserData = async (data: {
    email: string;
    password: string;
    first_name?: string;
    last_name?: string;
  }) => {
    try {
      const response = await fetch(`/signin/${endpoint}`, {
        method: 'POST',
        cache: 'no-cache',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
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

  const user = fetchUserData(data);
  return user;
};
