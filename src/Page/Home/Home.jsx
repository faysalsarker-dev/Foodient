// import Slider from "../../component/Slider";
import { Helmet } from 'react-helmet-async';

import Slider from '../../component/Slider';
import HomeCard from './HomeCard';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
    const info = useLoaderData()
    const [data,setData]=useState(info)
    return (
        <div>
             <Helmet>
        <title>Foodient | Home</title>
       
      </Helmet>
      <Slider></Slider>
           
            <div className=' mt-20 flex justify-center'>
               <div className='border-b-[#E8751A] border-b-2 pb-3'> <h3 className="text-3xl font-extrabold text-center">Featured Foods</h3></div>
            </div>


            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-10'>
{
    data?.slice(0,6).map(pd=> <HomeCard key={pd._id} pd={pd}></HomeCard>)
}




            </div>

            
        </div>
    );
};

export default Home;