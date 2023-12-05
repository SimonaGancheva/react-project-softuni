import { clearUserData, setUserData } from '../utils/util';
import * as request from './requester';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}

export const login = async (email, password) => {
  const result = await request.post(endpoints.login, {email,password});
  // setUserData(result)
  return result;
};

export const register = async (username, email, password) => {
  const result = await request.post(endpoints.register, {username, email, password});
  // setUserData(result);
  return result;
}

export const logout = async () => {
  await request.get(endpoints.logout);
  // clearUserData();
}
