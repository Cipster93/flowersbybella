import Image from "next/image";
import React from "react";
import { dancingScript, caveat } from "../lib/fonts";

const Events = () => {
  return (
    <section
      role="region"
      aria-label="Evenimente Flowers by Bella"
      className="w-full bg-black py-2 flex flex-col lg:flex-row items-center justify-center gap-12 px-2"
    >
      {/* Left banner */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <Image
          src="/banner_left1.webp"
          alt="Decor floral Flowers by Bella pentru evenimente"
          width={380}
          height={380}
          className="w-full max-w-sm h-160 object-contain rounded-xl shadow-lg"
        />
      </div>

      {/* Center content */}
      <div className="w-full lg:w-1/3 text-center flex flex-col items-center justify-center gap-10">
        <header>
          <h2
            className={`text-3xl md:text-7xl font-bold bg-black text-yellow-500 mb-4 font-serif ${dancingScript.className}`}
          >
            Flowers by Bella la evenimente
          </h2>
          <p
            className={`text-gray-300 text-2xl md:text-2xl leading-relaxed bg-black ${caveat.className}`}
          >
            Flowers by Bella participă la nunți, botezuri, evenimente corporate
            și expoziții locale, aducând un strop de eleganță și rafinament în
            fiecare moment special. Oferim aranjamente florale personalizate,
            consultanță florală dedicată pentru a transforma fiecare spațiu
            într-un decor memorabil și livrare la eveniment, prompt și sigur.
            Echipa noastră este pasionată de detalii, combinând culorile și
            formele pentru a crea experiențe vizuale unice. Contactează-ne
            pentru colaborări și pachete speciale, concepute să se potrivească
            perfect stilului și tematicii evenimentului tău.
          </p>
        </header>
      </div>

      {/* Right banner */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <Image
          src="/banner_right2.webp"
          alt="Decor floral Flowers by Bella pentru evenimente"
          width={380}
          height={380}
          className="w-full max-w-sm h-160 object-contain rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Events;
