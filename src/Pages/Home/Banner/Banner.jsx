import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import './styles.css'
import image1 from '../../../assets/images/martial-arts (2).jpg'
import image2 from '../../../assets/images/martial-arts1 (2).jpg'
import image3 from '../../../assets/images/martial-arts5.jpg'

const Banner = () => {
     return (
          <div className="text-white bg-image bg-black px-5 h-[100vh] flex items-center">
               <Swiper navigation={true} autoplay modules={[Navigation, Autoplay]} className="mySwiper ">
                    <SwiperSlide><div className="container px-3 md:flex md:justify-between">
                         <div className="flex items-center ">
                              <div>
                                   <h1 className="text-6xl font-semibold">WELCOME TO<br />
                                   KARATE AND MARTIAL <br />
                                   ARTS SCHOOL</h1>
                                   <h3 className=" text-2xl mt-5">Tri-tip pork belly shankle <br /> frankfurter jowl, strip steak.</h3>
                                   <button className="btn bg-red-500 border-none text-white uppercase mt-20">get a free lesson</button>
                              </div>
                         </div>
                         <img className="w-[500px] mt-36  h-[600px]" src={image2} alt="" />
                    </div></SwiperSlide>
                    <SwiperSlide><div className="container px-3 md:flex md:justify-between">
                         <div className="flex items-center ">
                              <div>
                                   <h1 className="text-6xl font-semibold">EVERY GREAT <br />
                                        JOURNEY STARTS WITH <br />
                                        ONE STEP!</h1>
                                   <h3 className=" text-2xl mt-5">Tri-tip pork belly shankle <br /> frankfurter jowl, strip steak.</h3>
                                   <button className="btn bg-red-500 border-none text-white uppercase mt-20">get a free lesson</button>
                              </div>
                         </div>
                         <img className="w-[500px] mt-36  h-[600px]" src={image3} alt="" />
                    </div></SwiperSlide>
                    <SwiperSlide><div className="container px-3 md:flex md:justify-between">
                         <div className="flex items-center ">
                              <div>
                                   <h1 className="text-6xl font-semibold">BUILDING STRONGER<br />
                                   MINDS & BODIES<br />
                                   SINCE 1986.</h1>
                                   <h3 className=" text-2xl mt-5">Tri-tip pork belly shankle <br /> frankfurter jowl, strip steak.</h3>
                                   <button className="btn bg-red-500 border-none text-white uppercase mt-20">get a free lesson</button>
                              </div>
                         </div>
                         <img className="w-[500px] mt-36  h-[600px]" src={image1} alt="" />
                    </div></SwiperSlide>
               </Swiper>
          </div>
     );
};

export default Banner;