"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { AnimatePresence, motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";

export default function Home() {
  const [slide, setSlide] = useState<SwiperType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const startingAnimationEle = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

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
      { y: 0, opacity: 1, delay: 0.2, ease: "sine.in", duration: 0.8 }
    );

    gsap.fromTo(
      startingAnimationEle.current,
      {
        y: 100,
        opacity: 0,
        duration: 0.5,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        y: 0,
        delay: 1.2,
        filter: "blur(0px)",
      }
    );
    gsap.fromTo(
      heroText.current,
      {
        y: 100,
        opacity: 0,
        duration: 0.5,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        delay: 1.2,
        y: 0,
        filter: "blur(0px)",
      }
    );
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Update on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute flex justify-center items-center h-screen w-full z-100"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
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
            className="w-[300px] absolute top-[35%] left-1/2 -translate-y-1/2 -translate-x-1/2 md:left-[17%] md:translate-y-0 md:translate-x-0 z-30 text-white text-center md:text-start opacity-0"
          >
            <h3 className="text-3xl md:text-[4rem] font-bold">
              SPIDER <span className="inline md:hidden ">MAN</span>
            </h3>
            <h3 className="hidden md:block text-3xl md:text-[4rem] font-bold md:-mt-2">
              MAN
            </h3>
            <div className="mb-4 ">SUPERHERO</div>
            <div className="flex gap-4 justify-center md:justify-start">
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
                onLoad={() => setIsLoading(false)}
                loading="lazy"
                ref={handRef}
                src="/spiderman-hand.png"
                height={windowSize.width > 768 ? 340 : 280}
                width={windowSize.width > 768 ? 340 : 280}
                alt="item-preview"
                className="absolute bottom-0 -left-10 md:bottom-0  md:left-[47%] opacity-0 hand"
              />
            </SwiperSlide>{" "}
            <SwiperSlide className="flex justify-center items-center bg-[#2C78BF] h-screen w-full bg-custom">
              <Image
                src="/spiderman-mask.png"
                height={windowSize.width > 768 ? 650 : 410}
                width={windowSize.width > 768 ? 650 : 410}
                alt="item-preview"
                className="absolute bottom-0 -left-25 md:-bottom-30 md:left-[37%]"
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

        <div className="absolute bottom-5 right-5 md:bottom-10 md:right-30">
          <Swiper
            ref={startingAnimationEle}
            className="swiper thumbs w-[200px] h-[120px] md:w-[280px] md:h-[180px] opacity-0"
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
    </>
  );
}
