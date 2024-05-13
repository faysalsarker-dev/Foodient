import { Helmet } from "react-helmet-async";
import Slider from "../../component/Slider";
import HomeCard from "./HomeCard";
import useAxios from "../../hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import animetionLoading from "../../../public/loading.json";
import Lottie from "lottie-react";

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

      <div className=" mt-20 flex justify-center">
        <div className="border-b-[#FF5400] border-b-2 pb-3">
          <h3 className="text-3xl font-extrabold text-center">
            Featured Foods
          </h3>
        </div>
      </div>
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
    </div>
  );
};

export default Home;
