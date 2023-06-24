import React from 'react'
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination,Autoplay, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import "swiper/css";
import "./../assets/css/details.css";

const MySwiper = () => {
  return <>
  <div className="container">

  <div >

  <h2>You might also like</h2>
      <Swiper
   spaceBetween={30}
       centeredSlides={true}
       autoplay={{
         delay: 700,
         disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
       }}
       navigation={true}
       modules={[Autoplay,EffectCoverflow, Pagination, Navigation]}
       
       effect={"coverflow"}
       grabCursor={true}
       slidesPerView={"auto"}
       coverflowEffect={{
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: true,
    }}
    // centeredSlides={true}
    // pagination={true}
    // modules={[EffectCoverflow, Pagination]}
   className="mySwiper "
 >
   <SwiperSlide>
       <div class="card">
       <img src="https://m.media-amazon.com/images/M/MV5BMmJjNGM0MDAtYjBkNy00YWYyLWJkNGUtZTQyNjBlMzNhZDM2XkEyXkFqcGdeQXVyMTEwOTUyOTg5._V1_QL75_UX380_CR0,4,380,562_.jpg" />
       <div className='swiper-footer'>
       <h5>Lorem ipsum</h5>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit.</p>
       </div>
       </div>
   </SwiperSlide>
   <SwiperSlide>
       <div class="card">
       <img src="https://m.media-amazon.com/images/M/MV5BMmJjNGM0MDAtYjBkNy00YWYyLWJkNGUtZTQyNjBlMzNhZDM2XkEyXkFqcGdeQXVyMTEwOTUyOTg5._V1_QL75_UX380_CR0,4,380,562_.jpg" />
       <div className='footer-swiper'><h1>Lorem ipsum</h1></div>
       </div>
   </SwiperSlide>
   <SwiperSlide>
       <div class="card">
       <img src="https://m.media-amazon.com/images/M/MV5BMmJjNGM0MDAtYjBkNy00YWYyLWJkNGUtZTQyNjBlMzNhZDM2XkEyXkFqcGdeQXVyMTEwOTUyOTg5._V1_QL75_UX380_CR0,4,380,562_.jpg" />
       <div className='footer-swiper'><h1>Lorem ipsum</h1></div>
       </div>
   </SwiperSlide>
   <SwiperSlide>
       <div class="card">
       <img src="https://m.media-amazon.com/images/M/MV5BMmJjNGM0MDAtYjBkNy00YWYyLWJkNGUtZTQyNjBlMzNhZDM2XkEyXkFqcGdeQXVyMTEwOTUyOTg5._V1_QL75_UX380_CR0,4,380,562_.jpg" />
       <div className='footer-swiper'><h1>Lorem ipsum</h1></div>
       </div>
   </SwiperSlide>
   
 </Swiper>
     </div>
    </div>
  </>
}

export default MySwiper