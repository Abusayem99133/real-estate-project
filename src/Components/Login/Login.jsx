import { Link, useNavigate, useLocation } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";

// import SocialLogin from "./SocialLogin";
import UserAuth from "../../UserAuth";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const { signInUser, googleLogin, gitHubLogin } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          navigate(from);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleSocialSignin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(from);
        // console.log(result.user);
      }
    });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered relative"
                  required
                />
              </div>
              <span className="absolute">Show</span>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="p-3">
              Do not have an account?{" "}
              <Link to="/register" className="btn-link">
                Register
              </Link>
            </p>
            <div className="p-2">
              <div>
                <h2 className="divider text-center">Or sign in with</h2>
                <div className="text-center space-x-2">
                  <button
                    onClick={() => handleSocialSignin(googleLogin)}
                    className="text-4xl "
                  >
                    <FcGoogle />
                  </button>

                  <button
                    onClick={() => handleSocialSignin(gitHubLogin)}
                    className="text-4xl"
                  >
                    <FaGithub />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
