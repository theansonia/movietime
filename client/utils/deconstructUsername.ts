export const deconstructUsername = (username: string) => {
  let firstName: string;
  let lastName: string;
  if (!username) {
    firstName = '';
    lastName = '';
  } else if (username.split(' ').length < 2) {
    firstName = username;
    lastName = '';
  } else {
    firstName =
      username.split(' ')[0][0].toUpperCase() +
      username.split(' ')[0].substring(1);

    lastName =
      username.split(' ')[1][0].toUpperCase() +
      username.split(' ')[1].substring(1);
  }
  return [firstName, lastName];
};
