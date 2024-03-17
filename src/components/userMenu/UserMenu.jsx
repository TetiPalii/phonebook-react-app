import { Button } from '@mui/joy';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { logout } from '../../redux/auth/authOperations';
// import { logout } from 'redux/auth/authOperations';
// import { selectUser } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();


  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>Welcome,{user.name}</p>
      <Button size="sm" onClick={handleClick}>
        Logout
      </Button>
    </div>
  );
};
