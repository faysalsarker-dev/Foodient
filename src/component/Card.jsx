/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Card = ({ pd }) => {
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
    <div className="card p-2  bg-base-100 shadow-xl">
      <figure>
        <img src={img} className="p-1 rounded-xl" alt={name} />
      </figure>
      <div className="card-body p-2 ">
        <h2 className="card-title">{name}</h2>
        <p>Expired Date :
{new Date(expiredate).toLocaleString()}</p>
        <div className="flex items-center gap-3">
          <div className="badge border-[#FF5400] shadow-2xl">Quantity: {FoodQuantity}</div>
          <div className="flex items-center badge border-[#FF5400] shadow-xl">
            <CiLocationOn />
            {PickupLocation}
          </div>
        </div>
        <p>
          <span className="font-semibold">Notes:</span>
          {AdditionalNotes.slice(0, 20)}
        </p>

        <div className="flex justify-between items-center my-2">
          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src={Doner_img} />
              </div>
            </div>
            <div>{Doner_name}</div>
          </div>
          <div className="badge  ">
            <Link to={`/food/${_id}`}>
              <button className="btn text-white bg-[#FF5400]">
                View Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
