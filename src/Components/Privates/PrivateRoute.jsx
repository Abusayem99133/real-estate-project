import UserAuth from "../../UserAuth";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user } = UserAuth();
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
