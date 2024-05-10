/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";





const HomeCard = ({pd}) => {
    const {_id,name,FoodQuantity,PickupLocation,AdditionalNotes,expiredate,Doner_name}=pd
  return (
    <div className="grid grid-cols-2 gap-4 rounded-lg shadow-xl p-4 border my-1">
      <img
        className=" rounded-lg"
        src="https://img.freepik.com/free-photo/deep-fried-fhicken-roll-dark-surface_1150-43584.jpg?t=st=1715351827~exp=1715355427~hmac=bb7242efa340d0ef6acfd661e8b31d289bf6e967306e8a65fdbba5cc5614231b&w=900"
        alt=""
      />
      <div>
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p>{expiredate}</p>
        <h4>
          <span className=" font-semibold">Notes:</span>{AdditionalNotes}
        </h4>
        <h3>{PickupLocation}</h3>
        <div className="flex justify-between items-center my-2">
          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div>
                {Doner_name}
            </div>
          </div>
          <div className="badge bg-[#E8751A] text-white">
            <Link to={`/food-info/${_id}`}><button>View Detail</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
