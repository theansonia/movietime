export const deconstructUsername = (username: string) => {
  let first_name: string;
  let last_name: string;
  if (!username) {
    first_name = '';
    last_name = '';
  } else if (username.split(' ').length < 2) {
    first_name = username[0].toUpperCase();
    last_name = '';
  } else {
    first_name =
      username.split(' ')[0][0].toUpperCase() +
      username.split(' ')[0].substring(1);

    last_name =
      username.split(' ')[1][0].toUpperCase() +
      username.split(' ')[1].substring(1);
  }
  return [first_name, last_name];
};
