import { Link, NavLink } from "react-router-dom";
import hujur from "../assets/siam.jpg";
import logo from "../assets/house.png";
import UserAuth from "../UserAuth";
const Navbar = () => {
  const { user, logOut } = UserAuth();

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Update Profile</NavLink>
      </li>

      <li>
        <NavLink to="login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div className=" navbar p-8 shadow-xl bg-orange-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-50 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="flex items-center space-x-3 font-bold text-orange-600">
          <img className="w-16" src={logo} alt="" />
          <span className="text-3xl ">Estate</span>
        </a>
      </div>
      <div className="navbar-center  lg:flex">
        <ul className="menu space-x-8 menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 border-2 border-orange-500 hover:bg-purple-200 font-bold"
                  : "font-bold"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 border-2 border-orange-500 hover:bg-purple-200 font-bold"
                  : "font-bold"
              }
            >
              Update Profile
            </NavLink>
          </li>

          <li>
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 border-2 border-orange-500 hover:bg-purple-200 font-bold"
                  : "font-bold"
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mt-20 -ml-5  md:ml-0 md:mt-0  navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10">
                <img
                  className="rounded-full"
                  alt="user photo"
                  src={user?.photo || hujur}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm btn-ghost">
                  {user?.displayName || "User Name not found"}
                </button>
              </li>
              <li>
                <button
                  onClick={() => logOut()}
                  className="btn btn-sm btn-ghost"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm btn-ghost">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
