import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const PublicGuard = () => {
    const {isAuthenticated} = useContext(AuthContext);
    if (isAuthenticated) {
       
        return <Navigate to="/profile" />
    }
  return (
    <Outlet />
  )
};
