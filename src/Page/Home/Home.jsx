import { Helmet } from "react-helmet-async";
import Slider from "../../component/Slider";
import HomeCard from "./HomeCard";
import useAxios from "../../hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import animetionLoading from "../../../public/loading.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

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
        initial={{ opacity: 0, y: 50 }} // Start from slightly below the viewport
        animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and y position 0
        transition={{ duration: 0.5, delay: 1.1 }} // Adjust duration and delay as needed
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
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
        {data?.map((pd) => (
          <HomeCard key={pd._id} pd={pd}></HomeCard>
        ))}
      </div>

      <div className="flex justify-center my-6">
        <Link to="/availablefoods">
          <button className="btn bg-[#FF5400] text-white font-bold">
            Show All Food
          </button>
        </Link>
      </div>

      <div className=" my-14 p-4">
        <h3 className="text-center text-3xl font-bold my-6">
          What is Foodient
        </h3>
        <div className="grid lg:grid-cols-3  grid-cols-1  gap-2 mx-auto text-[#A3A7AD]">
          <div className=" flex flex-col justify-center items-center">
            <CiViewList className="text-8xl" />
            <p className="text-center">
              We are dedicated to connecting individuals in need with resources
              to ensure no one goes hungry. Our platform serves as a bridge
              between those with surplus food and those facing food insecurity.
              Whether youre seeking assistance
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <CiUser className=" text-8xl text-center" />

            <div className="text-center text-base">
              <h4 className="text-xl">
                Secure Access, Personalized Recommendations!
              </h4>
        
              Enjoy these benefits:
              <ul className="list-disc px-3">
                <li>Security: Your data is encrypted for safety.</li>
                <li>
                  Convenience: Easily access our platform with your login
                  details
                </li>
              </ul>
              Join us for a personalized experience!
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center ">
            <IoIosAddCircleOutline className=" text-8xl" />
            <p className="text-center">
              Absolutely, donating food is not only a noble act of kindness but
              also a crucial contribution to addressing food insecurity in
              communities. When considering food donations,
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-10">
        <div className=" p-8">
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
        </div>

        <div className=" p-4">
          <img
            className="w-full"
            src="https://img.freepik.com/premium-vector/france-cuisine-vector-french-food-round-frame_8071-41013.jpg?w=740"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
