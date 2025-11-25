"use client";

import Image from "next/image";

export default function WeeklyImage({ images = [] }) {
  const duration = 4;

  return (
    <div className="relative w-full max-w-md h-44 lg:h-96 overflow-hidden rounded-xl">
      {images.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 w-full h-full"
          style={{
            animation: `wb-fade ${images.length * duration}s linear infinite`,
            animationDelay: `${i * duration}s`,
          }}
        >
          <Image
            src={src}
            alt={`Oferte săptămânii ${i + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 400px"
            style={{ objectFit: "cover" }}
            priority={false}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes wb-fade {
          0% {
            opacity: 1;
          }
          20% {
            opacity: 1;
          }
          25% {
            opacity: 0;
          }
          95% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
