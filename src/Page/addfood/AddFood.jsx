import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hook/useAuth";
import useAxios from "../../hook/useAxios";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const AddFood = () => {
  const { user } = useAuth();
  const axiosSecure =useAxios()
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
    const Status = 'available';
    const Doner_email = user?.email
    const Doner_name = user?.displayName
    const info = {
      name,
      img,
      FoodQuantity,
      PickupLocation,
      AdditionalNotes,
      expiredate,
      Status,
      Doner_email,
      Doner_name
    };
    console.log(info);


    axiosSecure.post('/addfood', info)
    .then(res => {
     
      if ( res.data) {
         e.target.reset();
        toast.success('Successfully addd')
      } else {
        toast.error('Failed to add food')
      }
    })
    .catch(error => {
      
      toast.error(`Failed to add food ${error}`)
  ;
    });
  
  };

  return (
    <div className="flex justify-center items-center">
                  <Helmet>
        <title>Foodient | Add Food</title>
       
      </Helmet>
     



      <div className=" shadow-xl p-5 rounded-lg  md:w-[90%]">
        <h3 className="md:text-4xl text-2xl  font-extrabold my-8 text-center">
          Add your Food
        </h3>

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
            </div>
  
  
  
  
</div>


         
<div className="flex flex-col">
     <div className=" grid grid-cols-2 gap-3">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Expired Date/Time</span>
                </label>
                <DatePicker
                  className="border p-3 w-full rounded-lg text-center "
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Doner Email</span>
                </label>
                <input
                  type="text"
            
                defaultValue={user?.email}
                  className="input input-bordered w-full  "
                 
                  disabled />
              </div>

     </div>
            <div className=" mt-10">
            <textarea
              name="AdditionalNotes"
              className="textarea textarea-bordered  w-full h-[150px]"
              placeholder="Additional Notes"
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

export default AddFood;
