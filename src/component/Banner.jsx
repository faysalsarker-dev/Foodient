import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex justify-center items-center w-full mt-10">
        <div className='flex flex-col text-center gap-4
        '>

            <h2 className="md:text-4xl text-2xl font-extrabold text-white">Wolcome to <span className="text-[#E8751A]">Foodient</span></h2>
            <h3 className="md:text-2xl text-xl font-extrabold text-white">Explore and Share Culinary Experiences on Foodient</h3>
      
      <div className="gap-4 flex justify-center items-center">
       <Link to='/addfood'>
            <button  className="btn bg-[#E8751A] text-white border-0">
            Donate Now
            </button>
       </Link>
        <Link to='/availablefoods'>
            <button className="btn border-[#E8751A] bg-[#ffffff23] text-[#E8751A]">
            Request Now
            </button >
        </Link>
      </div>
        </div>
    

    </div>
    );
};

export default Banner;