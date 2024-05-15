import useAuth from "./../../hook/useAuth";
import useAxios from "../../hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import animetionLoading from '../../../public/loading.json';
import {  motion } from "framer-motion";

const FoodReq = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  

  const { data, isLoading, error } = useQuery({
    queryKey: [user?.email],
    queryFn: () => getData(),
  });

  const getData = async () => {
    try {
      const { data } = await axiosSecure.get(`/my-req-foods/${user?.email}`);
      return data;
    } catch (err) {
      throw new Error("Failed to fetch data");
    }
  };

  if (isLoading) return   <div className="h-[80vh] flex justify-center items-center"> <Lottie className=" w-2/4" animationData={animetionLoading} loop={true} /></div>

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
       <Helmet>
        <title>Foodient | My Food Request </title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Food</th>
              <th>Doner name</th>
              <th>Expire Date</th>
              <th>Request Date</th>
              <th>Pickup Location</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((table,idx) => (
              <motion.tr
              initial={{ y: 60, opacity: 0 }} 
              whileInView={{y: 0, opacity: 1  }}
              viewport={{once:true} }
              transition={{ duration: 0.6, delay: 0.1 * (idx + 1), ease: "easeIn",
             x: { type: "spring", stiffness: 60 }
         }}
              key={table._id}>
                <td
               
                >
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={table.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{table.name}</div>
                    </div>
                  </div>
                </td>
                <td>{table.Doner_name}</td>
                <td>{new Date(table.expiredate).toLocaleString()}</td>

                <td>{new Date(table.expiredate).toLocaleString()}</td>
                <td>{table.PickupLocation}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodReq;
