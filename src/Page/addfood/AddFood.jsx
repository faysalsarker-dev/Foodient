import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hook/useAuth";
import useAxios from "../../hook/useAxios";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const AddFood = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const [startDate, setStartDate] = useState(new Date());
  const Status = "available";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img = form.img.value;
    const FoodQuantity = parseInt(form.FoodQuantity.value);
    const PickupLocation = form.PickupLocation.value;
    const AdditionalNotes = form.AdditionalNotes.value;
    const expiredate = startDate;

    const Doner_email = user?.email;
    const Doner_name = user?.displayName;
    const Doner_img = user?.photoURL;
    const info = {
      name,
      img,
      FoodQuantity,
      PickupLocation,
      AdditionalNotes,
      expiredate,
      Status,
      Doner_email,
      Doner_name,
      Doner_img,
    };

    try {
      const res = await axiosSecure.post("/addfood", info);
      if (res.data) {
        form.reset();
        toast.success("Successfully added");
      } else {
        toast.error("Failed to add food");
      }
    } catch (error) {
      toast.error(`Failed to add food ${error}`);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Foodient | Add Food</title>
      </Helmet>
      <div className=" shadow-xl p-5 rounded-lg md:w-[90%]">
        <div className="flex justify-center items-center px-5">
          <h3 className="md:text-4xl text-2xl font-extrabold my-8 text-center pb-4 border-b-[#FF5400] border-b-2">
            Add your Food
          </h3>
        </div>

        <form onSubmit={handleSubmit}>
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
                  required
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
                    required
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
                    required
                  />
                </div>

                <div className="form-control -mt-6">
                  <label className="label">
                    <span className="label-text">Status</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={Status}
                    className="input input-bordered w-full  "
                    disabled
                  />
                </div>

                <div className="form-control -mt-6">
                  <label className="label">
                    <span className="label-text">Expired Date/Time</span>
                  </label>
                  <DatePicker
                    className="border p-3 w-full rounded-lg text-center "
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
       




              <div className=" grid grid-cols-1 gap-2">

              <div className="mt-5 flex gap-5 ml-3 ">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-[#FF5400] ring-offset-base-100 ring-offset-2">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                  <div>
                    <span className="text-sm opacity-50">Doner name</span>
                    <h3>{user?.displayName}</h3>
                  </div>
                </div>

                <div className="form-control mt-2">
                  <label className="label">
                    <span className="label-text">Doner Email</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.email}
                    className="input input-bordered w-full  "
                    disabled
                  />
                </div>

                
              </div>

              <div className=" mt-14">
                <textarea
                  name="AdditionalNotes"
                  className="textarea textarea-bordered  w-full h-[150px]"
                  placeholder="Additional Notes"
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

export default AddFood;
