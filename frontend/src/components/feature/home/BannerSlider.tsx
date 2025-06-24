"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

interface BannerSliderProps {
  images: string[];
}

const BannerSlider: React.FC<BannerSliderProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.realIndex);
    }
  };

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <div className="container">
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="relative rounded-lg overflow-hidden"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Banner ${index + 1}`}
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[550px] object-cover object-top"
              width={1920}
              height={600}
              priority={index === 0} // prioritize first image for faster load
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom dots */}
      <div className="flex justify-center mt-4 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 border-2 rounded-full transition-all duration-300 focus:outline-none ${
              activeIndex === index
                ? "bg-gray-800 border-gray-800"
                : "border-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
