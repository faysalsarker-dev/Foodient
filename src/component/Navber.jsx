import { NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";


const Navber = () => {
  const {user,logOut}=useAuth()
  const nav = (
    <>
       <li><NavLink to='/' className={({ isActive }) =>
            isActive ? "mr-2 btn btn-ghost text-[#F0273B] font-bold" : "mr-2 btn btn-ghost"
        } >Home</NavLink></li>
       <li><NavLink to='/' className={({ isActive }) =>
            isActive ? "mr-2 btn btn-ghost text-[#F0273B] font-bold" : "mr-2 btn btn-ghost"
        } >Home</NavLink></li>
     
    </>
  );

  const navBtn = (
    <>
      <li>
        <NavLink to='/login' className={({ isActive }) => ( isActive ? "mr-2 btn btn-ghost text-[#F0273B] font-bold" : "mr-2 btn btn-ghost")}>Login</NavLink>
      </li>
      <li>
        <NavLink to='/register' className={({ isActive }) => ( isActive ? "mr-2 btn btn-ghost text-[#F0273B] font-bold" : "mr-2 btn btn-ghost")}>register</NavLink>
      </li>
    </>
  );
 
         
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    {nav}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      {nav}
      </ul>
    </div>
    <div className="navbar-end">
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
