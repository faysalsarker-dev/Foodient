import axios from "axios";

const axiosSecure = axios.create({
     baseURL:"http://localhost:5000",
    // baseURL:"https://server-teal-phi.vercel.app",
    withCredentials:true
})
const useAxios = () => {
return axiosSecure 
};

export default useAxios;