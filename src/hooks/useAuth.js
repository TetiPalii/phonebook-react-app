import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing, selectUser,selectError, selectIsLoading } from '../redux/selectors';

export const useAuth = () => {
    return { 
    user: useSelector(selectUser),
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    error: useSelector(selectError),
    isLoading: useSelector(selectIsLoading),
     };
}