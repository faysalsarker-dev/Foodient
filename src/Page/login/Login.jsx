import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import {  useEffect, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";

import toast from "react-hot-toast";
import useAuth from "../../hook/useAuth";
import { Helmet } from "react-helmet-async";


const Login = () => {
   const {googleLogin,setUser,signIn,githubeLogin,user}=useAuth()
    const [toggle,setToggle]=useState(false)
    const [err, setErr] = useState(false)
    const location = useLocation()
    const navigate =useNavigate()


    const handleLogin=(e)=>{
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
        .then(res=>{
            setUser(res.user)
            toast.success('Login Successful ')
            e.target.reset()
        }).catch(err=>{
            setErr(err.message)
            console.log(err);
            toast.error("Someting went wrong")
        })

        
     
    }

    const google=()=>{
        googleLogin()
        .then(res=>{
            setUser(res.user);
            toast.success('Google Login Successful ')
        }).catch(err=>{
           setErr(err.message);
           toast.error("Someting went wrong")
        })
       
    
    }
    const github=()=>{
        githubeLogin()
        .then(res=>{
            setUser(res.user);
            toast.success('Github Login Successful ')
        }).catch(err=>{
           setErr(err.message);
           toast.error("Someting went wrong")
        })
       
    
    }
    useEffect(() => {
        if (user) {
            navigate(location.state ? location.state : '/');
        }
    }, [user, location.state, navigate]);




    return (
        <div className="flex justify-center items-center  my-5">
                  <Helmet>
        <title>Foodient | Login</title>
       
      </Helmet>

 <div className="lg:grid lg:grid-cols-2 gap-4">
          <img className="hidden lg:block" src="https://img.freepik.com/free-vector/phishing-account-concept_23-2148538969.jpg?t=st=1715782640~exp=1715786240~hmac=933542bd05993c3d8371a68d2065a7910227c9a02d1c4c56f0463c56a73ddb55&w=740" alt="" />
                <div className="card  w-full   shadow-xl my-6">
                    <div className=" space-y-3">
                        <h2 className="text-center text-4xl font-bold">Welcome back</h2>
                        <h4 className="text-center text-slate-500 px-4">Enter your details to get sign in to your account.</h4>
                    </div>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <span className="label-text my-2">Password</span>
                            <label className="input input-bordered flex items-center gap-2">
                            
                                <input type={`${toggle?'text':'password'}`} className=" grow" required placeholder="Password" name="password" />
                            <div onClick={()=> setToggle(!toggle)}>{toggle? <FaRegEye className="text-xl" />:<FaRegEyeSlash className="text-xl" />}</div>
                            </label>
                            {err === 'Firebase: Error (auth/email-already-in-use).' ?
    
                                    <span className="text-red-600">This email already have on account</span> : <span className="text-red-600">{err}</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF5400]  text-white">Login</button>
                        </div>
                        <p>New hare <Link to='/register' className=" link link-hover text-primary">Register now</Link></p>
                    </form>
    
                    <div className=" px-14 -mt-6"> <div className="divider">OR</div></div>
                    <div className="grid grid-cols-2 gap-3 mb-3 px-8">
    
                        <div onClick={google} className="flex gap-2 items-center text-center justify-center border border-black p-2  cursor-pointer" > <FaGoogle /> Google</div>
                        <div onClick={github} className="flex gap-2 items-center text-center justify-center border border-black p-2  cursor-pointer" > <FaGithub /> Github</div>
    
                    </div>
                </div>
 </div>
        </div>

    );
};

export default Login;