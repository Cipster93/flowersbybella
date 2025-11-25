"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function WeeklyImage({ images }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setIndex((v) => (v + 1) % images.length);
    }, 4000);
    return () => clearInterval(timeoutRef.current);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-md h-44 lg:h-96">
      {images.map((img, i) => (
        <Image
          key={img}
          src={img}
          alt="Oferte săptămânii"
          className={`rounded-xl object-cover absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          width={400}
          height={300}
        />
      ))}
    </div>
  );
}
