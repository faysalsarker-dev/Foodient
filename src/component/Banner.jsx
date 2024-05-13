import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex justify-center items-center w-full mt-10">
        <div className='flex flex-col text-center gap-4
        '>

            <h2 className="md:text-4xl text-2xl font-extrabold text-white">Wolcome to <span className="text-[#ff7b39]">Foodient</span></h2>
            <h3 className="md:text-2xl text-xl font-extrabold text-white">Explore and Share Culinary Experiences on Foodient</h3>
      
      <div className="gap-4 flex justify-center items-center font-bold">
       <Link to='/addfood'>
            <button  className="btn bg-[#FF5400] text-white border-0">
            Donate Now
            </button>
       </Link>
        <Link to='/availablefoods'>
            <button className="btn border-[#FF5400] bg-[#ffffff23] text-[#FF5400]">
            Request Now
            </button >
        </Link>
      </div>
        </div>
    

    </div>
    );
};

export default Banner;