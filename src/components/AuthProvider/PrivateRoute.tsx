import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/app.store';


interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
