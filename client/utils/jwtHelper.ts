import decode from 'jwt-decode';
export interface MyToken {
  email: string;
  first_name: string;
  last_name?: string;
  exp: number;
  scope?: any;
  // whatever else is in the JWT.
}
export const getTokenExpirationDate = (token) => {
  const decoded = decode<MyToken>(token);
  if (!decoded.exp) {
    return null;
  }

  const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
  date.setUTCSeconds(decoded.exp);
  return date;
};

export const isTokenExpired = (token) => {
  const date = getTokenExpirationDate(token);
  const offsetSeconds = 0;
  if (date === null) {
    return false;
  }
  return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
};
