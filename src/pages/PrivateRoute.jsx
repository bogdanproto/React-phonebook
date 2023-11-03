import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectStatusAuth } from 'redux/userAuth/selectors';

export const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const { token, errorAuth } = useSelector(selectStatusAuth);
  const isNotSuccessAuth = !token || (token && errorAuth);

  return isNotSuccessAuth ? <Navigate to={redirectTo} /> : component;
};
