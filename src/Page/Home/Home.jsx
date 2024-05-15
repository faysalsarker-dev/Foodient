import { Helmet } from "react-helmet-async";
import Slider from "../../component/Slider";
import HomeCard from "./HomeCard";
import useAxios from "../../hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import animetionLoading from "../../../public/loading.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { easeIn, motion } from "framer-motion";

import { CiUser, CiViewList } from "react-icons/ci";

const Home = () => {
  const axiosSecure = useAxios();

  const getData = async () => {
    try {
      const { data } = await axiosSecure.get(`/featured-food`);
      return data;
    } catch (err) {
      throw new Error("Failed to fetch data");
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["highest"],
    queryFn: () => getData(),
  });



  
 

  if (error) {
    return "An error has occurred: " + error.message;
  }

  return (
    <div>
      <Helmet>
        <title>Foodient | Home</title>
      </Helmet>
      <Slider></Slider>

      <motion.div
        initial={{ y: 50, opacity: 0 }} 
        whileInView={{y: 0, opacity: 1  }}
        viewport={{once:true} }
        transition={{ duration: 0.6, delay: 0.2 ,ease:easeIn,
          x:{type:"spring" ,stiffness:60}
        }}
        
        className=" mt-20 flex justify-center"
      >
        <div className="border-b-[#FF5400] border-b-2 pb-3">
          <h3 className="text-3xl font-extrabold text-center">
            Featured Foods
          </h3>
        </div>
      </motion.div>
      {isLoading && (
        <div className="h-[80vh]  flex justify-center items-center">
          <Lottie
            className=" w-2/4"
            animationData={animetionLoading}
            loop={true}
          />
        </div>
      )}
      <div
  
           
      
      className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
        {data?.map((pd,idx) => (
          <HomeCard key={pd._id} pd={pd} idx={idx}></HomeCard>
        ))}
      </div>

      <div className="flex justify-center my-6">
        <Link to="/availablefoods">
          <motion.button 
               initial={{ y: 50, opacity: 0 }} 
               whileInView={{y: 0, opacity: 1  }}
               viewport={{once:true} }
               transition={{ duration: 0.8, delay: 0.5 ,ease:easeIn,
                 x:{type:"spring" ,stiffness:60}
               }}
               


          className="btn bg-[#FF5400] text-white font-bold">
            Show All Food
          </motion.button>
        </Link>
      </div>

      <div className="my-14 p-4">
  <motion.h3
    initial={{ y: 100, opacity: 0 }} 
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.3, ease: "easeIn", x: { type: "spring", stiffness: 60 } }}
    className="text-center text-3xl font-bold my-6"
  >
    What is Foodient
  </motion.h3>
  <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 mx-auto text-[#A3A7AD]">
    <motion.div
      initial={{ y: 100, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: "easeIn", x: { type: "spring", stiffness: 60 } }}
      className="flex flex-col justify-center items-center"
    >
      <CiViewList className="text-8xl" />
      <motion.div
        initial={{ y: 100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeIn", x: { type: "spring", stiffness: 60 } }}
        className="text-center"
      >
        <h3 className="text-xl">Request For food</h3>
        <ul className="list-disc px-3">
          <li>Find a food and request.</li>
          <li>Monitor your request list.</li>
        </ul>
        Enjoy your food and Foodient experience!
      </motion.div>
    </motion.div>
    <motion.div
      initial={{ y: 100, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: "easeIn", x: { type: "spring", stiffness: 60 } }}
      className="flex flex-col justify-center items-center"
    >
      <CiUser className="text-8xl text-center" />
      <motion.div 
        initial={{ y: 100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeIn", x: { type: "spring", stiffness: 60 } }}
        className="text-center text-base"
      >
        <h4 className="text-xl">Secure Access</h4>
        <ul className="list-disc px-3">
          <li>Security: Your data is encrypted for safety.</li>
          <li>Convenience: Easily access our platform with your login details.</li>
        </ul>
        Join us for a personalized experience!
      </motion.div>
    </motion.div>
    <motion.div
      initial={{ y: 100, opacity: 0 }} 
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: "easeIn", x: { type: "spring", stiffness: 60 } }}
      className="flex flex-col justify-center items-center"
    >
      <IoIosAddCircleOutline className="text-8xl" />
      <motion.div 
        initial={{ y: 100, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeIn", x: { type: "spring", stiffness: 60 } }}
        className="text-center"
      >
        <h4 className="text-xl">Donate Food</h4>
        <p>If you want to donate any kind of food, dont worry, we are here to help you.</p>
        <ul className="list-disc px-3">
          <li>You can donate any kind of food.</li>
          <li>You can modify your food.</li>
        </ul>
        Trust us and we will give you the best result.
      </motion.div>
    </motion.div>
  </div>
</div>

      <div className="grid md:grid-cols-2 grid-cols-1 mt-10">
        <motion.div 
          initial={{ x: -18, opacity: 0 }} 
          whileInView={{x: 0, opacity: 1  }} 
          transition={{ duration: 0.8, delay: 0.9 ,ease:easeIn,
            x:{type:"spring" ,stiffness:60}
          }}
        
        className=" p-8">
          <h2 className="text-2xl font-bold mb-4 border-l-[#FF5400] border-l-2 pl-3">
            Join Foodient Today!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Ready to embark on a culinary adventure? Sign up now to join our
            vibrant community of food lovers, chefs, and enthusiasts!
          </p>
          <p className="text-lg text-gray-700 mb-6">With Foodient, you can:</p>
          <ul className="list-disc pl-6">
            <li>Share your homemade delights with others</li>
            <li>Donate surplus food to those in need</li>
            <li>Request your favorite dishes from talented chefs</li>
            <li>Connect with fellow foodies and explore diverse cuisines</li>
          </ul>
          <p className="text-lg text-gray-700 mt-4">
            Join us today and lets make a difference, one meal at a time!
          </p>
          <Link to="/register">
            <button className="btn mt-4 bg-[#FF5400] text-white">
              Sing up now
            </button>
          </Link>
        </motion.div>

        <motion.div 
        
        initial={{ x: 18, opacity: 0 }} 
        whileInView={{x: 0, opacity: 1  }} 
        transition={{ duration: 0.8, delay: 0.9 ,ease:easeIn,
          x:{type:"spring" ,stiffness:60}
        }}
        className=" p-4">
          <img
            className="w-full"
            src="https://img.freepik.com/premium-vector/france-cuisine-vector-french-food-round-frame_8071-41013.jpg?w=740"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
