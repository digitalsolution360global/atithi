"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function BannerSlider() {
  return (
    <div className="relative w-full h-screen bg-white">

      {/* SLIDER */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <Image
              src="/assets/banner/b4.jpg"
              alt="Hotel Banner 1"
              fill
              priority
              className="object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <Image
              src="/assets/banner/b5.jpg"
              alt="Hotel Banner 2"
              fill
              className="object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* ============================  
           CENTER HEADING + SUBHEADING
      ============================ */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl text-left">
            <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide drop-shadow-lg leading-tight">
              Premium Guest house in Guwahati | Atithi Homes
            </h1>

            <p className="text-white/90 text-lg md:text-xl mt-6 drop-shadow-lg leading-relaxed">
              Get comfortable while traveling to Guwahati. Welcome to Atithi Homes - a hotel that keeps its guests comfortable with its best guest house in Guwahati. Grab more effective options from here and enjoy them all at once at a premium hotel in Guwahati.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="tel:+916000891365" className="bg-[#FACC15] hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-xl transition">
                Check Availability Now
              </a>
              <a href="tel:+916000891365" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold px-8 py-3 rounded-full shadow-xl transition">
                Book Atithi Guest House Guwahati
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
