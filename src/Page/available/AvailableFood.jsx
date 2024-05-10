import { Helmet } from "react-helmet-async";
import { IoSearchOutline } from "react-icons/io5";

const AvailableFood = () => {
  return (
    <div>
      <Helmet>
        <title>Foodient | Available Food</title>
      </Helmet>
      <div className="grid grid-cols-2 gap-4">
        <label className="input input-bordered flex items-center gap-2 py-0 rounded-full pr-0">
          <input type="text" className="grow" placeholder="Search" />
    
             <button className="bg-[#E8751A] px-14 rounded-e-full  py-3 text-white ">
             
             </button>
    
        </label>
        <label className="input input-bordered flex items-center gap-2 rounded-full pr-0">
          <input type="text" className="flex-1" placeholder="Search" />
    
             <button className="bg-[#E8751A] flex justify-center rounded-e-full ml-20 py-3 text-white flex-1">
             <IoSearchOutline className=" p-3 " />
             </button>
    
        </label>




      </div>
    </div>
  );
};

export default AvailableFood;
