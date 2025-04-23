import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 md:w-12/13 md:mx-auto">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg"
          >
             <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current after:rounded-full"
                  : ""
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myBookings"
              className={({ isActive }) =>
                isActive
                  ? "relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current after:rounded-full"
                  : ""
              }
              end
            >
              My Bookings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current after:rounded-full"
                  : ""
              }
              end
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactUs"
              className={({ isActive }) =>
                isActive
                  ? "relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current after:rounded-full"
                  : ""
              }
              end
            >
              Contact Us
            </NavLink>
          </li>
          </ul>
        </div>
        <NavLink className="flex justify-center items-center gap-2" to="/">
          <div>
            <img src="/logo.png" alt="" />
          </div>
          <div className="text-3xl font-extrabold">Phudu</div>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current after:rounded-full"
                  : ""
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myBookings"
              className={({ isActive }) =>
                isActive
                  ? "relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current after:rounded-full"
                  : ""
              }
              end
            >
              My Bookings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current after:rounded-full"
                  : ""
              }
              end
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactUs"
              className={({ isActive }) =>
                isActive
                  ? "relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-current after:rounded-full"
                  : ""
              }
              end
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer text-lg font-bold"
        >
          Emergency
        </button>
      </div>
    </div>
  );
};

export default Navbar;
