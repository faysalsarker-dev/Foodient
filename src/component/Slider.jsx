import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";
import Banner from "./Banner";

const Slider = () => {
  return (
    <div className='lg:h-[80vh] md:h-[40vh] sm:h-[40vh] h-[45vh] relative rounded-xl my-4 p-4'>
   

    <div className='absolute inset-0 w-full h-full'>
      <Swiper
      spaceBetween={30}
      effect={"fade"}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay]}
        className='w-full h-full'
      >
            <SwiperSlide>
          <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://img.freepik.com/premium-photo/delicious-healthy-salad-floating-made-with-nutritious-ingredients-leafy-greens-vegetables-fruit_1030265-3075.jpg?w=826")`
          }}>
         
       
          </div>
        </SwiperSlide>





        <SwiperSlide>
          <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://img.freepik.com/premium-photo/delicious-healthy-salad-floating-made-with-nutritious-ingredients-leafy-greens-vegetables-fruit_1030265-3035.jpg?w=826")`
          }}>
            
       
            
          </div>
        </SwiperSlide>


        
        <SwiperSlide>
          <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://img.freepik.com/premium-photo/photo-mix-vegetables-plate_941914-80.jpg?w=900")`
          }}>
         
       
          </div>
        </SwiperSlide>
        
    



       
      </Swiper>
    </div>
    {/* Banner component */}
    <div className="absolute  top-1/4 left-0 right-0  z-10 ">
      <Banner />
    </div>
  </div>
 
  );
};

export default Slider;
