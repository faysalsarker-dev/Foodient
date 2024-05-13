import { useMutation, useQuery } from "@tanstack/react-query";

import useAxios from "../../hook/useAxios";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import animetionLoading from '../../../public/loading.json'
import Lottie from "lottie-react";
const UpdatePage = () => {
  const axiosSecure = useAxios();
  const [startDate, setStartDate] = useState(new Date());
  const { id } = useParams();
  const navigate = useNavigate()

  const { data, error, isLoading } = useQuery({
    queryKey: ["food"],
    queryFn: () => getData(),
  });

 
  const getData = async () => {
    try {
      const res = await axiosSecure.get(`/food/${id}`);
      return res.data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  };

  const { mutateAsync } = useMutation({
    mutationFn: async (info) => {
      const { data } = await axiosSecure.patch(`/update/${id}`, info);
      return data; 
    },
    onSuccess: () => {
      console.log('update done');
      navigate('/Manage-My-Foods')
    }
  });
  
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img = form.img.value;
    const FoodQuantity = parseInt(form.FoodQuantity.value);
    const PickupLocation = form.PickupLocation.value;
    const AdditionalNotes = form.AdditionalNotes.value;
    const expiredate = startDate;
    const info = {
      name,
      img,
      FoodQuantity,
      PickupLocation,
      AdditionalNotes,
      expiredate,
    };
  
    console.log(info);
  
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn bg-[#FF5400] text-white",
        cancelButton: "btn border-[#FF5400] text-[#FF5400] mr-2",
      },
      buttonsStyling: false,
    });
  
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Update it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            await mutateAsync(info);
            swalWithBootstrapButtons.fire({
              title: "Updated!",
              text: "Your data has been updated.",
              icon: "success",
            });
          } catch (error) {
            console.error("Error updating data:", error);
            swalWithBootstrapButtons.fire({
              title: "Error",
              text: "An error occurred while updating data.",
              icon: "error",
            });
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your operation has been cancelled.",
            icon: "error",
          });
        }
      });
  };
  

  if (isLoading) return   <div className="h-[80vh] flex justify-center items-center"> <Lottie className=" w-2/4" animationData={animetionLoading} loop={true} /></div>

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Foodient | Update Food</title>
      </Helmet>
      <div className=" shadow-xl p-5 rounded-lg md:w-[90%]">
        <div className="flex justify-center items-center px-5">
          <h3 className="md:text-4xl text-2xl font-extrabold my-8 text-center pb-4 border-b-[#FF5400] border-b-2">
            Update your Food
          </h3>
        </div>

        <form onSubmit={handleUpdate}>
          <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Food Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your item name"
                  className="input input-bordered"
                  defaultValue={data.name}
                />
              </div>

              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Food Image</span>
                </label>
                <input
                  type="text"
                  name="img"
                  placeholder="use image URL"
                  className="input input-bordered"
                  required
                  defaultValue={data.img}
                />
              </div>

              <div className="grid md:grid-cols-2  gap-8 mt-5">
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Food Quantity</span>
                  </label>
                  <input
                    type="number"
                    name="FoodQuantity"
                    placeholder="Food Quantity"
                    className="input input-bordered"
                    defaultValue={data.FoodQuantity}
                  />
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Pickup Location</span>
                  </label>
                  <input
                    type="text"
                    name="PickupLocation"
                    placeholder="Pickup Location"
                    className="input input-bordered"
                    defaultValue={data.PickupLocation}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className=" grid grid-cols-2 gap-3">
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Expired Date/Time</span>
                  </label>
                  <ReactDatePicker
                    className="border p-3 w-full rounded-lg text-center "
                    selected={startDate}
                    defaultValue={data.expiredate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Doner Email</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={data.Doner_email}
                    className="input input-bordered w-full  "
                    disabled
                  />
                </div>
              </div>
              <div className=" mt-10">
                <textarea
                  name="AdditionalNotes"
                  className="textarea textarea-bordered  w-full h-[150px]"
                  placeholder="Additional Notes"
                  defaultValue={data.AdditionalNotes}
                ></textarea>
              </div>
            </div>
          </div>

          <button className="w-full btn bg-[#FF5400] mt-5 text-white">
            Add Food
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
