import { useQuery } from "@tanstack/react-query";

import useAxios from "../../hook/useAxios";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePage = () => {
    const axiosSecure = useAxios();
    const [startDate, setStartDate] = useState(new Date());
    const {id}=useParams()

  
    const { data, error, isLoading } = useQuery({
      queryKey: ['food'], 
      queryFn: () => getData(), 
    });

   
  console.log(data);
    const getData = async () => {
      try {
        const res = await axiosSecure.get(`/food/${id}`);
        return res.data;
      } catch (error) {
        throw new Error('Failed to fetch data');
      }
    };


    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const img = form.img.value;
        const FoodQuantity = form.FoodQuantity.value;
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
              confirmButton: "btn bg-[#E8751A] text-white",
              cancelButton: "btn border-[#E8751A] text-[#E8751A] mr-2"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Update it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {



              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
          });
      };

    


      if (isLoading) return "Loading...";

      if (error) return "An error has occurred: " + error.message;
    




    return (
        <div className="flex justify-center items-center">
      <Helmet>
        <title>Foodient | Update Food</title>
      </Helmet>
      <div className=" shadow-xl p-5 rounded-lg md:w-[90%]">
        <div className="flex justify-center items-center px-5">
          <h3 className="md:text-4xl text-2xl font-extrabold my-8 text-center pb-4 border-b-[#E8751A] border-b-2">
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
                    selected={data.expiredate}
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

          <button className="w-full btn bg-[#E8751A] mt-5 text-white">
            Add Food
          </button>
        </form>
      </div>
    </div>
    );
};

export default UpdatePage;