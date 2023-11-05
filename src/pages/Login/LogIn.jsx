import { LoginForm } from 'components/LoginForm/LoginForm';
import { LogInStyled, LoginRegisterBox, NavLinkStyled } from './Login.styled';
import { routes } from 'utils/consts';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatusAuth } from 'redux/userAuth/selectors';
import { useEffect } from 'react';
import { clearContacts } from 'redux/contacts/contactsSlice';

const LogIn = () => {
  const { token } = useSelector(selectStatusAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      dispatch(clearContacts());
    }
  }, [dispatch, token]);

  return (
    <LogInStyled>
      <h1>PHONEBOOK</h1>

      <LoginForm />
      <LoginRegisterBox>
        <p>Don't have an account?</p>
        <NavLinkStyled to={routes.SIGIN}>Signup</NavLinkStyled>
      </LoginRegisterBox>
    </LogInStyled>
  );
};

export default LogIn;
