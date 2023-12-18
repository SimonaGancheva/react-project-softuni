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
    let newUser = {};
    const { email, password } = data;
    if (email === '' || password === '') {
      return alert('All fields are required!');
    }

    try {
      newUser = await authService.login(email, password);
    } catch (err) {
      return alert(err.message);
    }

    setUser(newUser);
    navigate('/');
  };

  const onRegisterSubmit = async (data) => {
    let newUser = {};
    const { username, email, password, repass } = data;
    try {
      if (email === '' || password === '' || username === '') {
        return alert('All fields are required!');
      }
      if (repass !== password) {
        return alert("Passwords don't match!");
      }
      newUser = await authService.register(username, email, password);
    } catch (err) {
      return alert(err.message);
    }

    setUser(newUser);
    navigate('/');
  };

  const onLogout = () => {
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
