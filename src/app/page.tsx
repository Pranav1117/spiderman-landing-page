"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      {/* Navbar container */}
      <div className="text-white">
        <Navbar />
      </div>

      {/* Carousel */}
      <div className="flex">
        {/* HERO TEXT */}
        <div className="absolute bottom-[25%] left-[17%] z-30 text-white">
          <h3 className="text-[4rem] font-bold">SPIDER</h3>
          <h3 className="text-[4rem] font-bold -mt-8">MAN</h3>
          <div className="mb-4 ">SUPERHERO</div>
          <div className="flex gap-4">
            <div className="p-2 bg-[#ffffff0f] h-10 w-10 rounded-full grid place-content-center">
              FB
            </div>
            <div className="p-2 bg-[#ffffff0f] h-10 w-10 rounded-full grid place-content-center">
              YT
            </div>
            <div className="p-2 bg-[#ffffff0f] h-10 w-10 rounded-full grid place-content-center">
              TW
            </div>
          </div>
        </div>

        <Swiper
          creativeEffect={{
            next: { translate: [100, 0, 0] },
            prev: { translate: [-100, 0, 0] },
          }}
          effect="coverflow"
          slidesPerView={1} 
          loop={true}
          // autoplay={{ delay: 2000 }}
          navigation={true}
          pagination={{ clickable: true }} 
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          className="w-full h-screen"
        >
          <SwiperSlide className="flex justify-center items-center bg-[#2C78BF] h-screen w-full bg-custom">
            <Image
              src="/spiderman-mask.png"
              height={650}
              width={650}
              alt="item-preview"
              className="absolute -bottom-30 right-[23%]"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center bg-[#CF5F45] h-screen w-full bg-custom">
            <Image
              src="/spiderman-hand.png"
              height={340}
              width={340}
              alt="item-preview"
              className="absolute bottom-0 right-[31%] "
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center bg-[#2C78BF] h-screen w-full bg-custom">
            <Image
              src="/spiderman-helmet.png"
              height={500}
              width={500}
              alt="item-preview"
              className="absolute bottom-0 right-[27%]"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Mini carousel */}
      {/* <div className="absolute bottom-20 left-[70%] ">
        <Swiper
          slidesPerView={2}
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="bg-blue-300 mr-10 h-50 w-1npm00"
        >
          <SwiperSlide>
            {" "}
            <Image
              src="/spiderman-hand.png"
              height={100}
              width={100}
              alt="hand-preview"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/spiderman-hand.png"
              height={100}
              width={100}
              alt="hand-preview"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/spiderman-hand.png"
              height={100}
              width={100}
              alt="hand-preview"
            ></Image>
          </SwiperSlide>
        </Swiper>
      </div> */}
    </div>
  );
}
