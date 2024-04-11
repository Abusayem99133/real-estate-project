import UserAuth from "../../UserAuth";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user, loading } = UserAuth();
  const location = useLocation();
  if (loading) {
    return <h1 className="text-5xl">ami ashtase</h1>;
  }
  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
