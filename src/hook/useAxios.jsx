import axios from "axios";

const axiosSecure = axios.create({
    baseURL:"https://server-teal-phi.vercel.app/",
    withCredentials:true
})
const useAxios = () => {
return axiosSecure 
};

export default useAxios;