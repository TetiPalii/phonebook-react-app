import { NavLinkAuth } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <nav>
      <NavLinkAuth to="/register">Register</NavLinkAuth>
      <NavLinkAuth to="/logIn">Log in</NavLinkAuth>
    </nav>
  );
};
