// import { useContext } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./../PrivateRouter/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then();
  };

  const navbarPage = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-violet-400 underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-violet-400 underline" : ""
          }
        >
          Services
        </NavLink>
      </li>
      {user && (
        <li tabIndex={0}>
          <details>
            <summary>Dash Board</summary>
            <ul className="">
              <li className="">
                <NavLink
                  to="/addServices"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-violet-400 underline"
                      : "w-28"
                  }
                >
                  Add Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mySchedule"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-violet-400 underline"
                      : ""
                  }
                >
                  My Schedule
                </NavLink>
              </li>
            </ul>
          </details>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to="/manageServices"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-violet-400 underline"
                : ""
            }
          >
            Manage Services
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-md">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">
            Repair Service Hub
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbarPage}</ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          {user ? (
            <div className="flex items-center">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={`${user.displayName}'s profile`}
                  className="w-10 h-10 rounded-full mr-2"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-500 mr-2"></div>
              )}
              <p className="mr-2">{user.displayName}</p>
              {/* <p>{user.email}</p> */}
              <button onClick={handleLogOut} className="btn btn-primary ml-2">
                Log Out
              </button>
            </div>
          ) : (
            <NavLink to="logIn">
              <a className="btn bg-violet-400 rounded-full text-black hover:text-white">
                Log In
              </a>
            </NavLink>
          )}
        </div>

        <div className="dropdown lg:hidden">
          <div className="flex justify-between items-end w-full pl-72 ">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box items-center ml-52 w-auto gap-x-2"
          >
            {navbarPage}
            <div className="navbar-end hidden lg:flex">
              {user ? (
                <div className="flex items-center">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={`${user.displayName}'s profile`}
                      className="w-10 h-10 rounded-full mr-2"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-500 mr-2"></div>
                  )}
                  <p className="mr-2">{user.displayName}</p>
                  {/* <p>{user.email}</p> */}
                  <button
                    onClick={handleLogOut}
                    className="btn btn-primary ml-2"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <NavLink to="logIn">
                  <a className="btn bg-violet-400 rounded-full text-black hover:text-white">
                    Log In
                  </a>
                </NavLink>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
