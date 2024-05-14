
import { useParams } from "react-router-dom";
import useAxios from "../../hook/useAxios";
import { CiLocationOn } from "react-icons/ci";
import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import animetionLoading from "../../../public/loading.json";

const SingleFood = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxios();





  const getData = async () => {
    try {
      const res = await axiosSecure.get(`/food/${id}`);
      return res.data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  };

  const {
    data,
    error,
    isLoading,
   
  } = useQuery({
    queryKey: ["Single-Food-details"],
    queryFn: getData,
  });

  const {
    _id,
    name,
    img,
    FoodQuantity,
    PickupLocation,
    AdditionalNotes,
    expiredate,
    Doner_name,
    Doner_email,
    Doner_img,
  } = data || {};


const  Status= 'request'

 

 
  const request = () => {
    const now = new Date();
    const formattedTime = `${
      now.getMonth() + 1
    }/${now.getDate()}/${now.getFullYear()}, ${now.getHours() % 12 || 12}:${
      (now.getMinutes() < 10 ? "0" : "") + now.getMinutes()
    
    }`;
    const info = {
      _id,
      name,
      img,
      FoodQuantity,
      PickupLocation,
      AdditionalNotes,
      expiredate,
      Doner_name,
      Doner_email,
      Status,
      requestor_email: user?.email,
      requestor_name: user?.displayName,
      request_time: formattedTime
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      html: `
    <div class="grid grid-cols-2 gap-2">
      <img src="${img}" class="col-span-2 rounded-xl p-2" alt="" />
      <div class="form-control">
        <label class="label">
          <span class="label-text">Food Name</span>
        </label>
        <input
          type="text"
          value="${name}"
          class="input input-bordered text-black"
          disabled
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Food ID</span>
        </label>
        <input
          type="text"
          value="${_id}"
          class="input input-bordered"
          disabled
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Pickup Location</span>
        </label>
        <input
          type="text"
          value="${PickupLocation}"
          class="input input-bordered"
          disabled
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Expire Date</span>
        </label>
        <input
          type="text"
          value="${new Date(expiredate).toLocaleString()}"
          class="input input-bordered"
          disabled
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Donator Name</span>
        </label>
        <input
          type="text"
          value="${Doner_name}"
          class="input input-bordered"
          disabled
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Donator Email</span>
        </label>
        <input
          type="text"
          value="${Doner_email}"
          class="input input-bordered"
          disabled
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">User Email</span>
        </label>
        <input
          type="text"
          value="${user?.email}"
          class="input input-bordered"
          disabled
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Request Date</span>
        </label>
        <input
          type="text"
          value="${formattedTime}"
          class="input input-bordered"
          disabled
        />
      </div>
      <div class="form-control col-span-2">
      <label class="label">
        <span class="label-text">Additional Notes</span>
      </label>
      <textarea 
        class="textarea textarea-bordered" 
        placeholder="${AdditionalNotes}"
        disabled
      ></textarea>
    </div>
    </div>
    `,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Requeste it!",
    }).then((result) => {
      if (result.isConfirmed) {

  
        axiosSecure.patch(`/food-request/${_id}`, info)
        .then(res => {
          console.log(res.data)
          if (res.data.acknowledged) {
            Swal.fire({
              title: "Requested!",
              text: "Your request has been submitted.",
              icon: "success",
            });
          }
        })
        .catch(err => {
          Swal.fire({
            title: "Error!",
            text: `${err}`,
            icon: "error",
          });
        });
      }
    });



  
  };

  if (isLoading)
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <Lottie
          className=" w-2/4"
          animationData={animetionLoading}
          loop={true}
        />
      </div>
    );

  if (error) return "An error has occurred: " + error.message;

  return (
    
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 rounded-lg shadow-xl p-4 border my-1">
       <Helmet>
        <title>Foodient | {data?.name || ''}</title>
      </Helmet>
      <img className="rounded-lg" src={img} alt={name} />
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p>Expired Date : {new Date(expiredate).toLocaleString()}</p>
        <p className="my-7">
          <span className="font-semibold">Notes:</span>
          {AdditionalNotes}
        </p>
        <div className="flex gap-2">
          <div className="badge border-[#FF5400] shadow-2xl">Quantity:{FoodQuantity}</div>
          <div className="flex items-center badge border-[#FF5400] shadow-2xl">
            <CiLocationOn />
            {PickupLocation}
          </div>
        </div>
        <div className="flex justify-between items-center my-2">
          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src={Doner_img} />
              </div>
            </div>
            <div>{Doner_name}</div>
          </div>
          <div>
            <button onClick={request} className="btn text-white bg-[#FF5400]">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
