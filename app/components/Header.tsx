import React from "react";
import Image from "next/image";
import { dancingScript } from "../lib/fonts";

const Header = () => {
  return (
    <header
      role="banner"
      aria-label="Header principal Flowers by Bella"
      className="w-full h-auto flex flex-col items-center justify-center py-8 md:py-20 lg:py-20 xl:py-20 2xl:py-20 text-center gap-8 bg-black"
    >
      <h1
        className={`font-extrabold text-yellow-400 ${dancingScript.className} tracking-wider text-5xl sm:text-6xl md:text-8xl lg:text-9xl flex items-center justify-center gap-4 flex-wrap`}
      >
        {/* Left decorative element */}
        <span className="inline-block text-white text-4xl sm:text-5xl align-middle font-serif">
          ~
        </span>

        {/* LOGO RESPONSIVE */}
        <Image
          src="/logo2.png"
          alt="Flowers by Bella logo"
          width={200}
          height={200}
          priority
          className="w-48 sm:w-48 md:w-106 lg:w-150 xl:w-150 2xl:w-150 h-auto"
        />

        {/* Right decorative element */}
        <span className="inline-block text-white text-4xl sm:text-5xl align-middle font-serif">
          ~
        </span>
      </h1>

      <p
        className={`text-xl sm:text-2xl text-gray-300 font-serif max-w-md -mt-5 flex ${dancingScript.className}`}
        aria-label="Descriere brand Flowers by Bella"
      >
        Emotie, rafinament si eleganta in fiecare petala.
      </p>
    </header>
  );
};

export default Header;
