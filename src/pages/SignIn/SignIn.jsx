import { SigninForm } from 'components/SigninForm/SigninForm';
import { SignInHaveAccountBox, SignInStyled } from './SignIn.styled';
import { NavLinkStyled } from 'pages/Login/Login.styled';

export const SignIn = () => {
  return (
    <SignInStyled>
      <h1>PHONEBOOK</h1>
      <SigninForm />
      <SignInHaveAccountBox>
        <p>Already have an account</p>
        <NavLinkStyled to="/login">Login</NavLinkStyled>
      </SignInHaveAccountBox>
    </SignInStyled>
  );
};
