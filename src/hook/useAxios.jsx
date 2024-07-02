import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextData } from "../Context/AuthContext";

const axiosSecure = axios.create({
    // Adjust the baseURL as needed

    // baseURL: "https://server-teal-phi.vercel.app",
baseURL: "http://localhost:5000/",
    withCredentials: true
});

const useAxios = () => {

    
    return axiosSecure;
};

export default useAxios;
