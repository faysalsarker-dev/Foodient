/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


import { CiLocationOn } from "react-icons/ci";


const HomeCard = ({ pd}) => {
  const {
    _id,
    name,
    img,
    FoodQuantity,
    PickupLocation,
    AdditionalNotes,
    expiredate,
    Doner_name,
    Doner_img,
  } = pd;

 
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 rounded-lg shadow-xl p-4 border my-1">
      <img className=" rounded-lg" src={img} alt={name} />
      <div>
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p>{new Date(expiredate).toLocaleString()}</p>
        <p>
          <span className=" font-semibold">Notes:</span>
          {AdditionalNotes.slice(0, 50)}...
        </p>
        <div className="flex gap-2">
          <div>Quantity:{FoodQuantity}</div>
          <div className="flex items-center">
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
          <div className="badge bg-[#FF5400] text-white">
            <Link to={`/food/${_id}`}>
              <button>View Detail</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
