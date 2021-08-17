export const createUser = (
  email: string,
  password: string,
  first_name?: string,
  last_name?: string
): {} => {
  const data = { email, password, first_name, last_name };
  const fetchUserData = async (data: {
    email: string;
    password: string;
    first_name?: string;
    last_name?: string;
  }) => {
    try {
      const response = await fetch('/signin/create', {
        method: 'POST',
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
      console.log('not loading');
    }
  };

  const user = fetchUserData(data);
  return user;
};

export const fetchUser = async (email: string, password: string) => {
  const data = { email, password };
  const fetchUserData = async (data: { email: string; password: string }) => {
    try {
      const response = await fetch('/signin/get', {
        method: 'POST',
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
      console.log('error fetching user details', err);
    } finally {
      console.log('not loading');
    }
  };

  const user = await fetchUserData(data);
  return user;
};
