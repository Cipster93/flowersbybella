"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function WeeklyImage({ images }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intv = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((v) => (v + 1) % images.length);
        setFade(true);
      }, 200);
    }, 4000);

    return () => clearInterval(intv);
  }, [images.length]);

  return (
    <Image
      src={images[index]}
      alt="Oferte săptămânii"
      className={`rounded-xl object-cover w-full max-w-md h-44 lg:h-96 transition-opacity duration-500 ${
        fade ? "opacity-800" : "opacity-0"
      }`}
      width={400}
      height={300}
      priority
      fetchPriority="high"
    />
  );
}
