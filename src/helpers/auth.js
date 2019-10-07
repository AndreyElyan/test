import { setItem, removeItem } from './storage';

const key = '@Omni:token';

export const removeUser = () => {
  removeItem(key);
  localStorage.removeItem('@Omni:token');
};

export const isAuthenticated = () => {
  const tokenStorage = localStorage.getItem('@Omni:token');
  return !!tokenStorage;
};

export const setUserSession = tokenValue => {
  setItem(key, tokenValue);
};
