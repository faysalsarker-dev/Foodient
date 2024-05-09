import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade,Autoplay, Navigation, Pagination } from 'swiper/modules';


const Slider = () => {
    return (
        <>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          centeredSlides={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
          modules={[EffectFade,Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
                   <SwiperSlide className='px-6 py-8 w-full lg:h-[80vh] md:h-[40vh] h-[45vh] '>
                            <img className='w-full mx-auto' src="https://i.ibb.co/6XsbcSJ/Picsart-24-04-29-09-43-38-682.png" />
                        </SwiperSlide>
                  

        
        </Swiper>
      </>
    );
};

export default Slider;