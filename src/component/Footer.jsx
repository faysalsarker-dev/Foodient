
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
    return (
<footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
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