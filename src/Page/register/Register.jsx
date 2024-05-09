import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";

import { FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import useAuth from './../../hook/useAuth';
import { useState } from "react";


const Register = () => {
    const { googleUser, createuser, setUser, profileUpdate, githubUser } =useAuth()
    const [toggle, setToggle] = useState(false)
    const [err, setErr] = useState(false)

    const [upper, setUpper] = useState(false)
    const [lower, setLower] = useState(false)
    const [charecter, setCharecter] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const photourl = form.PhotoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        setErr('')
        if (!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
            return toast.error("Please fulfill the requirement")
        }





        createuser(email, password)
            .then(() => {
                profileUpdate(name, photourl)
                    .then(updatedUser => {
                        setUser(updatedUser);
                        toast.success("Register successful")

                        setCharecter(false)
                        setUpper(false)
                        setLower(false)



                    })

                e.target.reset();
            })
            .catch(error => {
                setErr(error.message);
            })
            .catch(err => {
                console.log(err.massage);
                setErr(err.massage)
                toast.error('Something went wrong');
            })


    };

    const handleGoogle = () => {
        googleUser()
            .then(res => {
                setUser(res.user);
                toast.success('Google Register Successful ')
            }).catch(err => {
                setErr(err.massage)
                toast.error("Someting went wrong")
            })


    }

    const handleGithub = () => {
        console.log('github');
        githubUser()
            .then(res => {
                setUser(res.user);
                toast.success('Github Login Successful ')
            }).catch(err => {
                setErr(err.massage)
                toast.error("Someting went wrong")
            })


    }
    const handleValid = (e) => {
        if (/^(?=.{6,}$).*/.test(e)) {
            setCharecter(true)
        }
        if (! /^(?=.{6,}$).*/.test(e)) {
            setCharecter(false)
        }
        if (/^(?=.*[A-Z])/.test(e)) {
            setUpper(true)
        }
        if (!/^(?=.*[A-Z])/.test(e)) {
            setUpper(false)
        }
        if (/^(?=.*[a-z])/.test(e)) {
            setLower(true)
        }
        if (!/^(?=.*[a-z])/.test(e)) {
            setLower(false)
        }



    }

    return (
        <div className="flex justify-center flex-col items-center my-5">
               <div className=" space-y-3">
                    <h2 className="text-center text-4xl font-extrabold">Welcome</h2>
                    <h4 className="text-center text-slate-500">Enter your details to get register a account.</h4>
                </div>
             <div className="card  w-full max-w-md  my-6 shadow-xl p-2 ">
             
                <form onSubmit={handleRegister} className="card-body">
   <div className="grid grid-cols-2 gap-2">
                    
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name="PhotoUrl" placeholder="Photo url" className="input input-bordered " />
                            </div>
                    
   </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered " required />

                        {err === 'Firebase: Error (auth/email-already-in-use).' ?

                            <span className="text-red-500">This email already have on account</span> : <span className="text-red-500">{err}</span>}
                    </div>
                    <div className="form-control">
                        <span className="label-text my-2">Password</span>
                        <label className="input input-bordered  flex items-center gap-2">

                            <input onChange={(e) => handleValid(e.target.value)} type={`${toggle ? 'text' : 'password'}`} className=" grow" required placeholder="Password" name="password" />
                            <div onClick={() => setToggle(!toggle)}>{toggle ? <FaRegEye className="text-xl" /> : <FaRegEyeSlash className="text-xl" />}</div>
                        </label>
                    </div>

                    {/* <div>
                        <p className="mt-2">Password must contain</p>
                        <ul className="  pl-5 mt-2">

                            <li className={`${charecter ? "text-[#4e4c4c]" : "text-[#4e4c4c7e]"} flex items-center gap-2`}
                            >{charecter ? <TiTick className="text-green-500" /> : <RxCross2 className="text-red-500" />}at least 6 characters</li>

                            <li className={`${upper ? "text-[#4e4c4c]" : "text-[#4e4c4c7e]"} flex items-center gap-2`}>{upper ? <TiTick className="text-green-500" /> : <RxCross2 className="text-red-500" />}at least one uppercase letter (A-Z)</li>

                            <li className={`${lower ? "text-[#4e4c4c]" : "text-[#4e4c4c7e]"} flex items-center gap-2`}>{lower ? <TiTick className="text-green-500" /> : <RxCross2 className="text-red-500" />}at least one lowercase letter (a-z)</li>



                        </ul>
                    </div> */}

                    <div className="form-control mt-6">
                        <button className="btn bg-[#F0273B]  text-white">Register</button>
                    </div>
                    <p>Already have on account <Link to='/login' className=" link link-hover text-primary">Login now</Link></p>
                </form>

                <div className=" px-14 -mt-4"> <div className="divider">OR</div></div>
                <div className="grid grid-cols-2 gap-3  px-8">

                    <div onClick={handleGoogle} className="flex gap-2 items-center text-center justify-center border border-black p-2  cursor-pointer" > <FaGoogle /> Google</div>
                    <div onClick={handleGithub} className="flex gap-2 items-center text-center justify-center border border-black p-2  cursor-pointer" > <FaGithub /> Github</div>

                </div>
            </div>
           
        </div>

    );
};

export default Register;