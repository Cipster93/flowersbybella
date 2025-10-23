"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { images } from "../types/images";

export default function CoursesHeader() {
  return (
    <header
      role="banner"
      aria-label="Galerie  Flowers by Bella"
      className="w-full flex flex-col items-center p-6 h-auto text-center bg-black relative"
    >
      <h1 className="sr-only">Flowers by Bella</h1>

      {/* Slider Section */}
      <section
        aria-label="Imagini cursuri"
        className="relative w-full overflow-hidden"
      >
        {/* Gradient overlay pentru vizibilitate */}
        <div className="absolute w-full inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black z-10"></div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Imagine curs ${index + 1}`}
                className="w-full h-48 sm:h-80 md:h-72 lg:h-78 object-cover rounded-xl shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </header>
  );
}
