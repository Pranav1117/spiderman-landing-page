"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [slide, setSlide] = useState<SwiperType | null>(null);
  const startingAnimationEle = useRef(null);
  const handRef = useRef(null);
  const heroText = useRef(null);

  const items = [
    { number: "01", src: "/spiderman-hand.png", bg: "#7E3329" },
    { number: "02", src: "/spiderman-mask.png", bg: "#1D5A90" },
    { number: "03", src: "/spiderman-helmet.png", bg: "#242222" },
  ];

  useEffect(() => {
    gsap.fromTo(
      handRef.current,
      { y: 1000, opacity: 0 },
      { y: 0, opacity: 1, ease: "sine.in", duration: 0.8 }
    );

    gsap.fromTo(
      startingAnimationEle.current,
      {
        y: 100,
        opacity: 0,
        duration: 0.5,
        delay: 1,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        filter: "blur(0px)",
      }
    );
    gsap.fromTo(
      heroText.current,
      {
        y: 100,
        opacity: 0,
        duration: 0.5,
        delay: 1,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        delay: 1,
        y: 0,
        filter: "blur(0px)",
      }
    );
  }, []);

  return (
    <div>
      {/* Navbar container */}
      <div className="text-white reveal-animation">
        <Navbar />
      </div>

      {/* Carousel */}
      <div className="flex">
        {/* HERO TEXT */}

        <div
          ref={heroText}
          className="absolute bottom-[25%] left-[17%] z-30 text-white opacity-0"
        >
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
          modules={[Navigation, Autoplay, EffectCoverflow, Thumbs]}
          className="w-full h-screen"
          onSwiper={(swiper) => setSlide(swiper)}
          thumbs={{ swiper: slide }}
          speed={1000}
        >
          <SwiperSlide className="flex justify-center items-center bg-[#CF5F45] h-screen w-full bg-custom ">
            <Image
              ref={handRef}
              src="/spiderman-hand.png"
              height={340}
              width={340}
              alt="item-preview"
              className="absolute bottom-0 right-[31%] opacity-0 hand"
            />
          </SwiperSlide>{" "}
          <SwiperSlide className="flex justify-center items-center bg-[#2C78BF] h-screen w-full bg-custom">
            <Image
              src="/spiderman-mask.png"
              height={650}
              width={650}
              alt="item-preview"
              className="absolute -bottom-30 right-[23%]"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center bg-[#2d2d2d] h-screen w-full bg-custom">
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
          ref={startingAnimationEle}
          className="swiper thumbs w-[280px] h-[180px] opacity-0"
          spaceBetween={10}
          slidesPerView={2}
          onSwiper={setSlide}
          modules={[Thumbs]}
          watchSlidesProgress
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`flex gap-4 rounded cursor-pointer`}
              style={{ background: item.bg }}
            >
              <div className="number text-white text-xl absolute left-1 top-0 text-center">
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
      </div>
    </div>
  );
}
