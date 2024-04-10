import { FaGithub } from "react-icons/fa";
import UserAuth from "../../UserAuth";
import { FcGoogle } from "react-icons/fc";
// import auth from "../firebase/firebase.config";
// import { GoogleAuthProvider } from "firebase/auth";

const SocialLogin = () => {
  const { googleLogin, gitHubLogin } = UserAuth;
  // console.log(googleLogin);
  // googleLogin()
  //   .then((result) => {
  //     console.log(result.user);
  //   })
  //   .catch((error) => {
  //     console.log(error.message);
  //   });
  // const social = () => {
  //   console.log();
  // };
  // const signInWithGoogle = () => {
  //   const provider = new GoogleAuthProvider();
  //   auth
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       // Handle successful sign-in
  //       console.log("Google Sign-In successful:", result.user);
  //     })
  //     .catch((error) => {
  //       // Handle sign-in error
  //       console.error("Google Sign-In error:", error);
  //     });
  // };
  return (
    <div>
      <h2 className="divider text-center">Or sign in with</h2>
      <div className="text-center space-x-2">
        <button onClick={() => googleLogin()} className="text-4xl ">
          <FcGoogle />
        </button>

        <button onClick={() => gitHubLogin()} className="text-4xl">
          <FaGithub />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
