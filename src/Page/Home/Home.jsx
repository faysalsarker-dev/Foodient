import { Helmet } from "react-helmet-async";
import Slider from "../../component/Slider";
import HomeCard from "./HomeCard";
import useAxios from "../../hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import animetionLoading from "../../../public/loading.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

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

      {/* <.div
          
        >
         
        </.div> */}


      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start from slightly below the viewport
        animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and y position 0
        transition={{ duration: 0.5, delay: 1.1 }} // Adjust duration and delay as needed
      
      
      className=" mt-20 flex justify-center">
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
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
        {data?.map((pd) => (
          <HomeCard key={pd._id} pd={pd}></HomeCard>
        ))}
      </div>

      <div className="flex justify-center my-6">
       <Link to='/availablefoods'> <button className="btn bg-[#FF5400] text-white font-bold">Show All Food</button></Link>
      </div>

<div className="bg-[#8e5234] h-[400px] my-20 rounded-lg  bg-contain bg-center" style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://img.freepik.com/premium-photo/currywurst-is-fast-food-dish-german-origin_891336-60854.jpg?w=1060")`
          }}>

{/* <div className="w-full h-full  rounded-lg" >
         
       
          </div> */}

</div>






      <div className="grid md:grid-cols-2 grid-cols-1 mt-10">

        
      <div className=" p-8">
      <h2 className="text-2xl font-bold mb-4 border-l-[#FF5400] border-l-2 pl-3">Join Foodient Today!</h2>
      <p className="text-lg text-gray-700 mb-6">Ready to embark on a culinary adventure? Sign up now to join our vibrant community of food lovers, chefs, and enthusiasts!</p>
      <p className="text-lg text-gray-700 mb-6">With Foodient, you can:</p>
      <ul className="list-disc pl-6">
        <li>Share your homemade delights with others</li>
        <li>Donate surplus food to those in need</li>
        <li>Request your favorite dishes from talented chefs</li>
        <li>Connect with fellow foodies and explore diverse cuisines</li>
      </ul>
      <p className="text-lg text-gray-700 mt-4">Join us today and lets make a difference, one meal at a time!</p>
     <Link to='/register'>
        <button className="btn mt-4 bg-[#FF5400] text-white">Sing up now</button>
        </Link>
      </div>
     







        
        <div className=" p-4">
          <img className="w-full" src="https://img.freepik.com/premium-vector/france-cuisine-vector-french-food-round-frame_8071-41013.jpg?w=740" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
