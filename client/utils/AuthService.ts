import { isTokenExpired, MyToken } from './jwtHelper';
import jwtDecode from 'jwt-decode';
import decode from 'jwt-decode';
import { fetchUser } from './fetchUser';

export interface Error {
  response: any;
}

export const doAuthentication = (
  values: {
    email: any;
    password?: string;
    first_name?: string;
    last_name?: string;
  },
  endpoint: string
) => {
  return fetchUser(values, `/${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(values),
  });
};
export const login = (data: { email: string; password: string }) => {
  return doAuthentication(data, 'get');
};

export const refresh = (data: { email: string }) => {
  return doAuthentication(data, 'refresh');
};

export const signup = (data: {
  email: any;
  password: string;
  first_name: string;
  last_name: string;
}) => {
  return doAuthentication(data, 'create');
};

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
  deleteCookie('token');
};

export const checkStatus = (response: Response) => {
  // raises an error in case response status is not a success
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    // error.response = response;
    return error;
  }
};

export const getCookie = (token: string) => {
  if (document.cookie.includes(token)) {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${token}=`))
      .split('=')[1];
    return cookieValue;
  }
};

export function deleteCookie(name: string) {
  if (getCookie(name)) {
    document.cookie = name + '=' + ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }
}

export async function refreshUser() {
  let token = getCookie('token');
  if (!token) {
    token = localStorage.getItem('token');
  }

  if (token) {
    const decoded = decode<MyToken>(token);
    const response = await refresh(decoded);
    return response;
  }
}
