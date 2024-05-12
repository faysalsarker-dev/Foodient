import { Outlet } from "react-router-dom";
import Navber from "../component/Navber";
import Footer from "../component/Footer";

const Root = () => {
    return (
       <>
  <Navber />
<div className="min-h-[calc(100vh-212px)] max-w-6xl mx-auto px-4">
    <Outlet />
</div>
<Footer />
  </>
    );
};

export default Root;