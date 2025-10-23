import React from "react";
import { dancingScript } from "../lib/fonts";

const Header = () => {
  return (
    <header
      role="banner"
      aria-label="Header principal Flowers by Bella"
      className="w-full h-auto flex flex-col items-center justify-center py-8 text-center gap-8 bg-black"
    >
      <h1
        className={`font-extrabold text-yellow-400 ${dancingScript.className} tracking-wider text-5xl sm:text-6xl md:text-8xl lg:text-9xl`}
      >
        <span className="inline-block text-white text-4xl sm:text-5xl align-middle font-serif">
          ~
        </span>

        {/* Text principal — responsive */}
        <span className="block sm:inline">Flowers</span>
        <span className="text-white block sm:inline text-4xl sm:text-6xl md:text-8xl lg:text-4xl">
          by
        </span>
        <span className="block sm:inline">Bella</span>

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
