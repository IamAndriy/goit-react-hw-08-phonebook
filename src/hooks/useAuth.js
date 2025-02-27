import { useSelector } from "react-redux";
import { selectUser, selectToken, selectIsLoggedIn, selectIsRefreshing, selectError } from  "../redux/auth/selectors";

export const useAuth = () => {

  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);

  return {user, token, isLoggedIn, isRefreshing, error}
}