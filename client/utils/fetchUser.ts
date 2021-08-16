export const fetchUser = (
  email: string,
  password: string,
  first_name: string,
  last_name: string
): {} => {
  const data = { email, password, first_name, last_name };
  const fetchUserData = async (data: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
  }) => {
    try {
      const response = await fetch('/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
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

  const user = fetchUserData(data);
  return user;
};
