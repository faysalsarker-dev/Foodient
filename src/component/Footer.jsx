
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
    return (
      <footer className="footer footer-center bg-neutral text-neutral-content  mt-16  rounded">
      <nav className="grid grid-flow-col gap-4 border">
    
             
    
      </nav> 
      <nav>
        
        <div className="grid grid-flow-col gap-4 text-3xl">
        <a target="_blank" href="https://www.facebook.com/faysal.sharker.140/"><FaFacebook /></a>
        <a target="_blank" href="https://www.instagram.com/faysal_sarker_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram /></a>
        <a target="_blank" href="https://github.com/faysalsarker-dev"><FaGithub /></a>
         
        </div>
      </nav> 
      <aside>
        <p>Copyright © 2024 - All right reserved by Craft Land</p>
      </aside>
    </footer>


      
    );
};

export default Footer;