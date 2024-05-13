/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import Lottie from "lottie-react";
import animetionLoading from '../../public/loading.json'






const RouterProtector = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
  
     

    if(loading){
        return   <div className="h-[80vh] flex justify-center items-center"> <Lottie className=" w-2/4" animationData={animetionLoading} loop={true} /></div>
    }
    if(!user){
       return <Navigate to='/login' state={location.pathname}></Navigate>
    }
    return (
        <>
            {children}
        </>
    );
};

export default RouterProtector;