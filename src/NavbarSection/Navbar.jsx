import { NavLink } from "react-router-dom";
import logo from "../assets/house.png";
const Navbar = () => {
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
    </>
  );
  return (
    <div className=" navbar   bg-base-300">
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
        <a className=" font-bold text-lime-600">
          <img className="w-8" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center  lg:flex">
        <ul className="menu space-x-8 menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-lime-600 border-2 border-lime-500 hover:bg-lime-400 font-bold"
                  : "font-bold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-lime-600 border-2 border-lime-500 hover:bg-lime-400 font-bold"
                  : "font-bold"
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li></li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-lime-600 border-2 border-lime-500 hover:bg-lime-400 font-bold"
                  : "font-bold"
              }
            >
              About Pages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-lime-600 border-2 border-lime-500 hover:bg-lime-400 font-bold"
                  : "font-bold"
              }
            >
              Update Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mt-20 -ml-5  md:ml-0 md:mt-0  navbar-end">
        <a className="btn bg-orange-100">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
