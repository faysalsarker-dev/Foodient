import { NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Navber = () => {
  const { user, logOut } = useAuth();
  const nav = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "mr-2 btn btn-ghost text-[#FF5400] font-bold"
              : "mr-2 btn btn-ghost"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/availablefoods"
          className={({ isActive }) =>
            isActive
              ? "mr-2 btn btn-ghost text-[#FF5400] font-bold"
              : "mr-2 btn btn-ghost"
          }
        >
          Available Foods
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/addfood"
              className={({ isActive }) =>
                isActive
                  ? "mr-2 btn btn-ghost text-[#FF5400] font-bold"
                  : "mr-2 btn btn-ghost"
              }
            >
              Add Food
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Manage-My-Foods"
              className={({ isActive }) =>
                isActive
                  ? "mr-2 btn btn-ghost text-[#FF5400] font-bold"
                  : "mr-2 btn btn-ghost"
              }
            >
              Manage My Foods
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Food-Request"
              className={({ isActive }) =>
                isActive
                  ? "mr-2 btn btn-ghost text-[#FF5400] font-bold"
                  : "mr-2 btn btn-ghost"
              }
            >
              Food Request
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const navBtn = (
    <>
      <li className="">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? " font-semibold text-[#FF5400]"
              : " border-[#FF5400] border text-[#FF5400]  rounded-full px-3 py-2"
          }
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "border-[#FF5400]  text-[#FF5400]  rounded-full px-3 py-2 font-semibold border"
              : "bg-[#FF5400] text-white  rounded-full px-3 py-2 "
          }
        >
          register
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto">
      <div className="navbar-start ">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-[#FF5400]">
          Foodient
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex-none">
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                    }
                  />
                </div>
              </div>
              <div className="menu space-y-4 dropdown-content text-center  mt-3 z-[1]  p-2 shadow bg-base-100 rounded-box ">
                <div className="avatar flex justify-center">
                  <div className="w-14 rounded-full border-[#FF5400] border-2 ring-offset-base-100 ring-offset-2 p-1">
                    <img className="rounded-full"
                      src={
                        user.photoURL
                          ? user.photoURL
                          : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                      }
                    />
                  </div>
                </div>
                <div className=" font-bold">{user?.displayName}</div>
                <div className="flex">
                  <p>{user?.email}</p>
                </div>
                <div className="">
                  <button
                    className="w-full text-center p-2 rounded-lg text-white bg-[#FF5400]"
                    onClick={() => logOut()}
                  >
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex">
            <ul className="menu menu-horizontal px-1 gap-2">{navBtn}</ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;
