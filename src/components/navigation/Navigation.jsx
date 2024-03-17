import { NavLinkAuth } from 'components/authNav/AuthNav.styled';
import { useAuth } from '../../redux/auth/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkAuth to="/">Home</NavLinkAuth>
      {isLoggedIn && <NavLinkAuth to="/contacts">Phonebook</NavLinkAuth>}
    </nav>
  );
};
