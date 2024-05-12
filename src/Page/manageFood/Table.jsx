/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";

const Table = ({ tble, handleDelete }) => {


  

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={tble.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="font-bold">{tble.name}</div>
        </td>
        <td
          className={`${
            tble.Status === "available" ? "text-primary" : "text-orange-400"
          }`}
        >
          {tble.Status}
        </td>
        <td className="  text-center">
      
          <Link to={`/update-Food/${tble._id}`}>
            <button className="btn text-white bg-[#E8751A]">Update</button>
          </Link>
        </td>

        <td className="flex justify-center ">
          <button
            onClick={() => handleDelete(tble._id)}
            className="btn border-[#E8751A] bg-[#ffffff30] text-[#E8751A]"
          >
            Delete
          </button>
        </td>
      </tr>

    </>
  );
};

export default Table;
