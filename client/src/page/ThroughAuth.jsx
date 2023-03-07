import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const ThroughAuth = ({ children }) => {
  const { token } = useAppContext;

  if (token) {
    return <Navigate to="/" />;
  }
  return children;
};
export default ThroughAuth;
