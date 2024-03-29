import { Navigate } from 'react-router-dom';

import { useAppContext } from '../context/AppContext';

const ProtectedRoute = ({ children }) => {
  const { token } = useAppContext();

  if (!token) {
    return <Navigate to="/auth" />;
  }
  return children;
};

export default ProtectedRoute;
