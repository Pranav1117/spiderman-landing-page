"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Home() {
  const [slide, setSlide] = useState(null);
  const items = [
    { number: "01", src: "/spiderman-mask.png", bg: "#2C78BF" },
    { number: "02", src: "/spiderman-hand.png", bg: "#8c311c" },
    { number: "03", src: "/spiderman-helmet.png", bg: "#2C78BF" },
  ];

  gsap.fromTo(
    ".hand",
    {
      y: 1000,
      ease:"elastic"
    },
    { y: 0 }
  );
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
          effect="coverflow"
          slidesPerView={1}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow, Thumbs]}
          className="w-full h-screen"
          // @ts-ignore
          onSwiper={(swiper) => setSlide(swiper)}
          thumbs={{ swiper: slide }}
          initialSlide={1}
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
          <SwiperSlide className="flex justify-center items-center bg-[#CF5F45] h-screen w-full bg-custom ">
            <Image
              src="/spiderman-hand.png"
              height={340}
              width={340}
              alt="item-preview"
              className="absolute bottom-0 right-[31%] hand"
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

      <div className="absolute bottom-10 right-30">
        <Swiper
          className="swiper thumbs w-[280px] h-[180px]"
          spaceBetween={10}
          slidesPerView={2}
          onSwiper={setSlide}
          modules={[Thumbs]}
          watchSlidesProgress
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`flex gap-4 bg-[${item.bg}] bg-[##832e2c]`}
            >
              <div className="number text-white text-xl relative -top-5 text-center z-100">
                {item.number}
              </div>
              <Image
                src={item.src}
                fill={true}
                alt={`Thumbnail ${item.number}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <hr className="mt-6" />
      </div>
    </div>
  );
}
