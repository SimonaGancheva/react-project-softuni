import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

export const Logout = () => {
  const { onLogout } = useContext(AuthContext);

  useEffect(() => {
    authService
      .logout()
      .then(() => {
        onLogout();
      })
      .catch(() => {
        onLogout();
      });
  }, []);

  return <Navigate to="/" />;
};
