
import { FaBowlFood, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hook/useAuth';

const Footer = () => {
  const {user}=useAuth()
  const nav = (
    <>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " border-b-[#FF5400] border-b-2  font-bold"
              : " "
          }
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/availablefoods"
          className={({ isActive }) =>
            isActive
              ? " border-b-[#FF5400] border-b-2  font-bold"
              : ""
          }
        >
          Available Foods
        </NavLink>
      </div>
      {user && (
        <>
          <div>
            <NavLink
              to="/addfood"
              className={({ isActive }) =>
                isActive
                  ? " border-b-[#FF5400] border-b-2  font-bold"
                  : " "
              }
            >
              Add Food
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/Manage-My-Foods"
              className={({ isActive }) =>
                isActive
                  ? " border-b-[#FF5400] border-b-2  font-bold"
                  : ""
              }
            >
              Manage My Foods
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/Food-Request"
              className={({ isActive }) =>
                isActive
                  ? " border-b-[#FF5400] border-b-2  font-bold"
                  : ""
              }
            >
              Food Request
            </NavLink>
          </div>
        </>
      )}
    </>
  );
    return (
<footer className="footer footer-center p-10 mt-10 bg-base-200 text-base-content rounded">
<Link to="/" className=" flex text-xl font-bold">
          <FaBowlFood />
          Foodient
        </Link>
  <nav className="flex flex-wrap justify-center gap-4">
{nav}
        
  </nav> 
  <nav>
  <div className="grid grid-flow-col gap-4 text-black text-3xl">
      <a target="_blank" href="https://www.facebook.com/faysal.sharker.140/"><FaFacebook /></a>
      <a target="_blank" href="https://www.instagram.com/faysal_sarker_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram /></a>
      <a target="_blank" href="https://github.com/faysalsarker-dev"><FaGithub /></a>
       
      </div>
  </nav> 
  <aside>
    <p>Copyright © 2024 - All right reserved by Foodient</p>
  </aside>
</footer>









      
    );
};

export default Footer;