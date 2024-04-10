import UserAuth from "../../UserAuth";

const SocialLogin = () => {
  const { googleLogin } = UserAuth;

  return (
    <div>
      <h2 className="divider">Continue with</h2>
      <div>
        <button onClick={() => googleLogin()} className="btn btn-primary  ">
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
