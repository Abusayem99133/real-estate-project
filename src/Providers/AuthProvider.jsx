import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Components/firebase/firebase.config";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const XProvider = new TwitterAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign out in user
  const logOut = () => {
    setUser(null);
    return signOut(auth);
  };
  // google login in user
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // github login in user
  const gitHubLogin = () => {
    return signInWithPopup(auth, gitHubProvider);
  };
  // X login user
  const XLogin = () => {
    return signInWithPopup(auth, XProvider);
  };

  // observer
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth state changed", currentUser);
      setUser(currentUser);
    });
  }, []);
  const authInfo = {
    user,
    createUser,
    signInUser,
    googleLogin,
    gitHubLogin,
    logOut,
    XLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
