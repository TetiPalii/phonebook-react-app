import { AuthNav } from 'components/authNav/AuthNav';
import { Navigation } from 'components/navigation/Navigation';
import { UserMenu } from 'components/userMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
      <>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </>
  );
};
