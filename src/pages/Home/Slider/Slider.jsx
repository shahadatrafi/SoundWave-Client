import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import banner1 from "../../../assets/Slider-Img/banner-1.jpg"
import banner2 from "../../../assets/Slider-Img/banner-2.jpg"
import banner3 from "../../../assets/Slider-Img/banner-3.jpg"

const Slider = () => {
    return (
        <div>
            <Swiper
                loop={true}
                pagination={{
                    dynamicBullets: true,
                }}
                
                modules={[Pagination]}
                className="mySwiper h-[500px]"
            >
                <SwiperSlide style={{
                    backgroundImage: `linear-gradient(275deg,rgba(0, 240, 242, .4), rgba(0, 0, 0, 0.7)), url(${banner1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    
                    }}>
                    <div className="container mx-auto flex flex-col justify-center items-start h-[500px] ">
                        <h2 className="text-cyan-400 opacity-90 font-bold capitalize text-5xl">Learn Keyboard With us</h2>
                        <p className="text-white opacity-80 text-xl my-6 w-[550px] "> A versatile musical instrument with keys that produce sounds electronically or through MIDI, used in various genres and as a composing tool.</p>
                        <button className="btn bg-cyan-400 text-black capitalize text-xl border-cyan-400 hover:bg-cyan-500 hover:border-cyan-500 mt-2 duration-300">Enroll Now !</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{
                    backgroundImage: `linear-gradient(275deg,rgba(0, 240, 242, .4), rgba(0, 0, 0, 0.7)), url(${banner2})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    
                    }}>
                    <div className="container mx-auto flex flex-col justify-center items-start h-[500px] ">
                        <h2 className="text-cyan-400 opacity-90 font-bold capitalize text-5xl">Learn Guitar With us</h2>
                        <p className="text-white opacity-80 text-xl my-6 w-[550px] ">A popular stringed instrument with a hollow or solid body, played by strumming or plucking the strings, found in various styles like rock, folk, and blues.</p>
                        <button className="btn bg-cyan-400 text-black capitalize text-xl border-cyan-400 hover:bg-cyan-500 hover:border-cyan-500 mt-2 duration-300">Enroll Now !</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{
                    backgroundImage: `linear-gradient(275deg,rgba(0, 240, 242, .4), rgba(0, 0, 0, 0.7)), url(${banner3})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    
                    }}>
                    <div className="container mx-auto flex flex-col justify-center items-start h-[500px] ">
                        <h2 className="text-cyan-400 opacity-90 font-bold capitalize text-5xl">Learn Violin With Us</h2>
                        <p className="text-white opacity-80 text-xl my-6 w-[550px] ">A stringed instrument played with a bow, known for its expressive and melodic tones, used in classical, folk, and contemporary music.</p>
                        <button className="btn bg-cyan-400 text-black capitalize text-xl border-cyan-400 hover:bg-cyan-500 hover:border-cyan-500 mt-2 duration-300">Enroll Now !</button>
                    </div>
                </SwiperSlide>
            
            </Swiper>
        </div>
    );
};

export default Slider;