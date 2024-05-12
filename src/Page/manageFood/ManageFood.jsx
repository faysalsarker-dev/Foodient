import { useEffect, useState } from "react";
import useAxios from "../../hook/useAxios";
import useAuth from "../../hook/useAuth";


const ManageFood = () => {
    const axiosSecure = useAxios()
    const {user}=useAuth()
    const [data,setData]=useState([])

    useEffect(()=>{
axiosSecure.get(`/manage-my-foods/${user?.email}`)
.then(res=>{
    setData(res.data)
})

    },[axiosSecure,user?.email])
    
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default ManageFood;