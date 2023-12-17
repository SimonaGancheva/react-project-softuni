import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { clearUserData } from '../utils/util';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage({});

  const onLoginSubmit = async (data) => {
    const { email, password } = data;
    if (email === '' || password === '') {
      return alert('All fields are required!');
    }
    let result;
    try {
       result = await authService.login(email, password);
    } catch (error) {
      console.log(error.message);
      setUser({});
      clearUserData();
      return;
    }
    try {
      setUser(result);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const onRegisterSubmit = async (data) => {
    const { username, email, password, repass } = data;
    if (email === '' || password === '' || username === '') {
      return alert('All fields are required!');
    }
    if (repass !== password) {
      return alert("Passwords don't match!");
    }
    const result = await authService.register(username, email, password);
    try {
      setUser(result);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const onLogout =  () => {
    // await authService.logout()
    setUser({});
    clearUserData();
  };

  
  const isAuthenticated = !!user.accessToken;

  const contextData = {
    userId: user._id,
    userEmail: user.email,
    username: user.username,
    token: user.accessToken,
    isAuthenticated,
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
