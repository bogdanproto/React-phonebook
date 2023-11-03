import { LoginForm } from 'components/LoginForm/LoginForm';
import { LogInStyled, LoginRegisterBox, NavLinkStyled } from './Login.styled';

export const LogIn = () => {
  return (
    <LogInStyled>
      <h1>PHONEBOOK</h1>

      <LoginForm />
      <LoginRegisterBox>
        <p>Don't have an account?</p>
        <NavLinkStyled to="/signin">Signup</NavLinkStyled>
      </LoginRegisterBox>
    </LogInStyled>
  );
};
