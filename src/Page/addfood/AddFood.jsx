import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hook/useAuth";

const AddFood = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img = form.img.value;
    const FoodQuantity = form.FoodQuantity.value;
    const PickupLocation = form.PickupLocation.value;
    const AdditionalNotes = form.AdditionalNotes.value;
    const expiredate = startDate;
    const Status = 'available'
    const info = {
      name,
      img,
      FoodQuantity,
      PickupLocation,
      AdditionalNotes,
      expiredate,
      Status
    };
    console.log(info);
  };

  return (
    <div>
      <div className="">
        <h3 className="md:text-4xl text-2xl md:text-start text-center font-extrabold my-8">
          Add your Food
        </h3>

        <form onSubmit={handleSubmit}>
          <div className=" grid md:grid-cols-2 gap-8">
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
          </div>

          <div className="grid md:grid-cols-2  gap-8">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Expired Date/Time</span>
              </label>
              <DatePicker
                className="border p-3 text-center "
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div>
              <h4>Donator</h4>
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div>
                <span className="badge badge-accent">Name </span>{" "}
                {user?.displayName}
              </div>
              <div>
                <span className="badge badge-accent">Email </span> {user?.email}
              </div>
            </div>
          </div>

          <div className="w-ful my-6">
            <textarea
              name="AdditionalNotes"
              className="textarea textarea-bordered w-full"
              placeholder="Additional Notes"
            ></textarea>
          </div>

          <button className="w-full btn bg-[#6D31ED] mt-5 text-white">
            Add item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
