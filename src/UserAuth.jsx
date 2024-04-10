import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";

const UserAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default UserAuth;
