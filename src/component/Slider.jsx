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
    <div className='lg:h-[80vh] md:h-[40vh] sm:h-[40vh] h-[45vh] relative rounded-xl my-4'>
    {/* Slider component */}

    <div className='absolute inset-0 w-full h-full'>
      <Swiper
      spaceBetween={30}
      effect={"fade"}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay]}
        className='w-full h-full'
      >
        <SwiperSlide>
          <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://img.freepik.com/free-photo/flame-grilled-meat-cooking-flames-generative-ai_188544-12355.jpg?t=st=1715349204~exp=1715352804~hmac=4eeb984870a28841693b68ee914f4798595692217b0c99e5cf3f05f477968327&w=1060")`
          }}>
            
       
            
          </div>
        </SwiperSlide>


        
        <SwiperSlide>
          <div className="w-full h-full bg-cover bg-center rounded-lg" style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?t=st=1715349866~exp=1715353466~hmac=24d8bfdc167299ebc2b5d936efb77a5f09bcd8ae0d7771d126f68337b274f148&w=1060")`
          }}>
         
       
          </div>
        </SwiperSlide>



       
      </Swiper>
    </div>
    {/* Banner component */}
    <div className="absolute  top-1/4 left-0 right-0 z-50 ">
      <Banner />
    </div>
  </div>
 
  );
};

export default Slider;
