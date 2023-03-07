import { Navigate } from 'react-router-dom';

import { useAppContext } from '../context/AppContext';

const ProtectedRoute = ({ children }) => {
  const { user, token } = useAppContext();
  if (token && !user) {
  }
  if (!user) {
    return <Navigate to="/auth" />;
  }
  return children;
};

export default ProtectedRoute;
