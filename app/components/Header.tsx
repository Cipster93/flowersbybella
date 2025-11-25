import React from "react";
import Image from "next/image";
import FloralBackgroundSVG from "./FloralBackgroundSVG";

const Header = () => {
  return (
    <header
      role="banner"
      aria-label="Header principal Flowers by Bella"
      className="w-full h-auto flex flex-col items-center justify-center bg-black py-8 md:py-12 lg:flex-row lg:items-stretch lg:py-0"
    >
      <div className="flex flex-col items-center justify-center gap-6 lg:hidden px-6 max-w-2xl">
        <Image
          src="/logo.webp"
          alt="Flowers by Bella logo"
          width={300}
          height={300}
          className="w-48 sm:w-64 md:w-80 h-auto object-contain "
        />
        <p
          className={`text-2xl sm:text-3xl md:text-4xl text-gray-300 text-center `}
          aria-label="Descriere brand Flowers by Bella"
        >
          Emoție, rafinament și eleganță în fiecare petală.
          <br />
        </p>
      </div>

      <div className="hidden lg:flex relative w-full lg:w-1/2 h-[500px] flex-shrink-0">
        <div className="relative w-full h-full flex items-center justify-center p-8">
          <Image
            src="/logo.webp"
            alt="Flowers by Bella logo"
            width={500}
            height={500}
            priority
            className="w-full h-full object-contain "
          />
        </div>
      </div>

      {/* Partea dreaptă - Design grafic abstract cu text */}
      <div className="hidden lg:flex relative w-full lg:w-1/2 flex-col items-center justify-center px-6 md:px-12 py-12 lg:py-20">
        {/* SVG Background decorativ floral */}
        <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
          <FloralBackgroundSVG />
        </div>

        {/* Conținut text */}
        <div className="relative z-10 max-w-xl">
          <p
            className={`text-2xl sm:text-3xl md:text-5xl text-yellow-600 text-center `}
            aria-label="Descriere brand Flowers by Bella"
          >
            Emoție, rafinament și eleganță în fiecare petală.
            <br />
            <span className="text-lg md:text-xl block mt-2 text-white">
              Fiecare aranjament spune o poveste, fiecare buchet aduce un zâmbet
              și fiecare floare transmite o emoție unică.
              <br />
              Descoperă universul nostru floral, unde pasiunea pentru frumos se
              împletește cu atenția la detalii și dorința de a transforma orice
              moment într-o amintire de neuitat.
              <br />
              Alege să dăruiești bucurie prin flori de poveste, create cu suflet
              pentru tine și cei dragi.
            </span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
