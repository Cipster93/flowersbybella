"use client";

import React, { useEffect, useRef, useState } from "react";
import { images } from "../types/images";
import Image from "next/image";

const CustomAutoSwiper: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const slideCount = images.length;
    const delay = 3000; // 3 sec

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

    // Touch/drag support (optional, basic)
    const startX = useRef<number | null>(null);
    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (startX.current === null) return;
        const diff = e.changedTouches[0].clientX - startX.current;
        if (diff > 50) setCurrent((prev) => (prev - 1 + slideCount) % slideCount);
        if (diff < -50) setCurrent((prev) => (prev + 1) % slideCount);
        startX.current = null;
    };

    // Carusel: afișăm toate slide-urile în linie și translatăm containerul
    const totalSlides = images.length;
    // Pentru efect de loop, duplicăm primele slide-uri la final
    const extendedImages = [...images, ...images.slice(0, slidesPerView)];
    // Calculăm lățimea unui slide (inclusiv gap)
    const slideWidthPercent = 100 / slidesPerView;
    // Pentru translateX, mutăm containerul cu indexul curent
    const getTranslateX = () => `-${current * (slideWidthPercent + (10 * 100 / window.innerWidth))}%`;

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
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className="absolute w-full inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-black z-10"></div>
                <div
                    className="flex w-full gap-10"
                    style={{
                        transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: `translateX(-${current * (100 / slidesPerView)}%)`
                    }}
                >
                    {extendedImages.map((src, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex items-center justify-center"
                            style={{ width: `${100 / slidesPerView}%` }}
                        >
                            <Image
                                src={src}
                                alt={`Imagine curs ${index + 1}`}
                                className="w-full h-48 sm:h-80 md:h-72 lg:h-78 object-cover rounded-xl"
                                width={300}
                                height={300}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </header>
    );
};

export default CustomAutoSwiper;
