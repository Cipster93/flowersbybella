"use client";

import React, { useEffect, useRef, useState } from "react";
import { images } from "../types/images";
import Image from "next/image";

function CustomAutoSwiper() {
    const [current, setCurrent] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const slideCount = images.length;
    const delay = 4000; 

    // Responsive breakpoints
    useEffect(() => {
        function updateSlidesPerView() {
            if (window.innerWidth >= 1024) setSlidesPerView(4);
            else if (window.innerWidth >= 640) setSlidesPerView(2);
            else setSlidesPerView(1);
        }
        updateSlidesPerView();
        window.addEventListener("resize", updateSlidesPerView);
        return () => window.removeEventListener("resize", updateSlidesPerView);
    }, []);

    // Autoplay logic
    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slideCount);
        }, delay);
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [current, slideCount]);

    const extendedImages = [...images, ...images.slice(0, slidesPerView)];

    return (
        <header
            role="banner"
            aria-label="Galerie Flowers by Bella (Custom Swiper)"
            className="w-full flex flex-col items-center p-6 h-auto text-center bg-black relative"
        >
            <h1 className="sr-only">Flowers by Bella</h1>
            <section
                aria-label="Imagini cursuri custom"
                className="relative w-full overflow-hidden"
            >
                <div className="absolute w-full inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black z-10"></div>
                <div
                    className={`flex ${slidesPerView === 1 ? 'w-full' : 'gap-5 w-full'}`}
                    style={{
                        transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform:
                            slidesPerView === 1
                                ? `translateX(-${current * 100}%)`
                                : `translateX(-${current * (100 / slidesPerView)}%)`
                    }}
                >
                    {extendedImages.map((src, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex items-center justify-center"
                            style={{ width: slidesPerView === 1 ? '100%' : `${100 / slidesPerView}%` }}
                        >
                            <Image
                                src={src}
                                alt={`Imagine curs ${index + 1}`}
                                className="w-full h-48 sm:h-80 md:h-72 lg:h-98 object-cover rounded-xl"
                                width={300}
                                height={300}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </header>
    );
}

export default CustomAutoSwiper;
