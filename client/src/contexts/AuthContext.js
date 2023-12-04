import { createContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const onLoginSubmit = async (data) => {
    const { email, password } = data;
    if (email == '' || password == '') {
      return alert('All fields are required!');
    }
    const result = await authService.login(email, password);
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

  const onLogout = () => {
    setUser({});
  };

  //TODO: check for token in localStorage!
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
