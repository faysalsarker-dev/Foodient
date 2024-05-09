import { NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";


const Navber = () => {
  const {user,logOut}=useAuth()
  const nav = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-[#F0273B]" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-[#F0273B]" : "")}>
          Available Foods
        </NavLink>
      </li>
    </>
  );

  const navBtn = (
    <>
      <li>
        <NavLink to='/login' className={({ isActive }) => (isActive ? "text-[#F0273B]" : "")}>Login</NavLink>
      </li>
      <li>
        <NavLink to='/register' className={({ isActive }) => (isActive ? "text-[#F0273B]" : "")}>register</NavLink>
      </li>
    </>
  );
  console.log(user);
  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <div className="btn btn-ghost text-xl font-bold text-[#F0273B]">
          Foodient
        </div>
      </div>

      <div className="navbar-end">
        <div className="mr-8 hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-2 ">{nav}</ul>
        </div>
    

        {user ? (
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src={user.photoURL ? user.photoURL : 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'} />
        </div>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
         <button onClick={()=>logOut()}>Log out</button>
        </li>
      </ul>
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
