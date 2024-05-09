import { Outlet } from "react-router-dom";
import Navber from "../component/Navber";

const Root = () => {
    return (
       <>
        <Navber></Navber>
        <div className="min-h-[80vh]">
            <Outlet></Outlet>
        </div>
       </>
  
    );
};

export default Root;