import { isTokenExpired, MyToken } from './jwtHelper';
import jwtDecode from 'jwt-decode';

export interface Error {
  response: any;
}

export const getToken = () => {
  // Retrieves the user token from localStorage
  return localStorage.getItem('token');
};
export const isAuthenticated = () => {
  // Checks if there is a saved token and it's still valid
  const token = localStorage.getItem('token');
  if (token) {
    return !isTokenExpired(token);
  } else {
    return false;
  }
};

export const isAdmin = () => {
  return jwtDecode<MyToken>(getToken()).scope === 'admin';
};

export const finishAuthentication = (token: {}) => {
  localStorage.setItem('token', JSON.stringify(token));
};
export const logout = () => {
  // Clear user token and profile data from localStorage
  localStorage.removeItem('token');
};

export const _checkStatus = (response) => {
  // raises an error in case response status is not a success
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    // error.response = response;
    return error;
  }
};
