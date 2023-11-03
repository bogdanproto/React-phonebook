import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { LogIn } from 'pages/Login/LogIn';
import { PhoneBook } from 'pages/PhoneBook/PhoneBook';
import { PrivateRoute } from 'pages/PrivateRoute';
import { ResrictedRoute } from 'pages/RestrictedRoute';
import { SignIn } from 'pages/SignIn/SignIn';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/userAuth/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={
            <ResrictedRoute redirectTo="/phonebook" component={<LogIn />} />
          }
        />
        <Route
          path="/signin"
          element={
            <ResrictedRoute redirectTo="/phonebook" component={<SignIn />} />
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<PhoneBook />} />
          }
        />
      </Route>
    </Routes>
  );
};
