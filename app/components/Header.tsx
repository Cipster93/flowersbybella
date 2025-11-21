import React from "react";
import Image from "next/image";
import { dancingScript } from "../lib/fonts";

const Header = () => {
  return (
    <header
      role="banner"
      aria-label="Header principal Flowers by Bella"
      className="w-full h-auto flex flex-col items-center justify-center bg-black py-8 md:py-12 lg:flex-row lg:items-stretch lg:py-0"
    >
      {/* Layout MOBILE - centrat clasic */}
      <div className="flex flex-col items-center justify-center gap-6 lg:hidden px-6 max-w-2xl">
        <Image
          src="/logo2.png"
          alt="Flowers by Bella logo"
          width={300}
          height={300}
          priority
          className="w-48 sm:w-64 md:w-80 h-auto object-contain drop-shadow-2xl"
        />
        <p
          className={`text-2xl sm:text-3xl md:text-4xl text-gray-300 text-center ${dancingScript.className} drop-shadow-lg`}
          aria-label="Descriere brand Flowers by Bella"
        >
          Emotie, rafinament si eleganta in fiecare petala.
        </p>
      </div>

      {/* Layout DESKTOP - split cu SVG */}
      {/* Partea stângă - Logo/Imagine mare */}
      <div className="hidden lg:flex relative w-full lg:w-1/2 h-[500px] flex-shrink-0">
        <div className="relative w-full h-full flex items-center justify-center p-8">
          <Image
            src="/logo2.png"
            alt="Flowers by Bella logo"
            width={500}
            height={500}
            priority
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Partea dreaptă - Design grafic abstract cu text */}
      <div className="hidden lg:flex relative w-full lg:w-1/2 flex-col items-center justify-center px-6 md:px-12 py-12 lg:py-20">
        {/* SVG Background decorativ floral */}
        <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Tulpini - linii ondulate ca niște tije de flori */}
            <path
              d="M60 0 Q65 100 60 200 Q55 300 60 400 Q65 500 60 600"
              stroke="#FACC15"
              strokeWidth="2"
              opacity="0.9"
            />
            <path
              d="M140 0 Q135 120 140 240 Q145 360 140 480 Q135 540 140 600"
              stroke="#FACC15"
              strokeWidth="3"
              opacity="0.9"
            />
            <path
              d="M220 0 Q225 80 220 160 Q215 280 220 400 Q225 500 220 600"
              stroke="#FACC15"
              strokeWidth="2"
              opacity="0.5"
            />
            <path
              d="M300 0 Q295 150 300 300 Q305 450 300 600"
              stroke="#FACC15"
              strokeWidth="3"
              opacity="0.6"
            />
            <path
              d="M340 0 Q345 100 340 200 Q335 350 340 500 Q345 550 340 600"
              stroke="#FACC15"
              strokeWidth="1"
              opacity="1"
            />

            {/* Flori stilizate - combinații de petale */}
            {/* Floare 1 */}
            <g opacity="0.6">
              <circle
                cx="60"
                cy="80"
                r="25"
                stroke="#FACC15"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="45" cy="70" r="12" fill="#FACC15" opacity="0.9" />
              <circle cx="75" cy="70" r="12" fill="#FACC15" opacity="0.3" />
              <circle cx="60" cy="60" r="12" fill="#FACC15" opacity="0.3" />
              <circle cx="60" cy="90" r="12" fill="#FACC15" opacity="0.3" />
              <circle cx="60" cy="80" r="8" fill="#EAB308" opacity="0.8" />
            </g>

            {/* Floare 2 - mai mare */}
            <g opacity="0.7">
              <circle
                cx="140"
                cy="200"
                r="35"
                stroke="#FACC15"
                strokeWidth="3"
                fill="none"
              />
              <circle cx="120" cy="185" r="16" fill="#FACC15" opacity="0.4" />
              <circle cx="160" cy="185" r="16" fill="#FACC15" opacity="0.4" />
              <circle cx="140" cy="170" r="16" fill="#FACC15" opacity="0.4" />
              <circle cx="140" cy="230" r="16" fill="#FACC15" opacity="0.4" />
              <circle cx="125" cy="210" r="14" fill="#FACC15" opacity="0.3" />
              <circle cx="155" cy="210" r="14" fill="#FACC15" opacity="0.3" />
              <circle cx="140" cy="200" r="12" fill="#EAB308" opacity="0.9" />
            </g>

            {/* Floare 3 */}
            <g opacity="0.5">
              <circle
                cx="220"
                cy="120"
                r="20"
                stroke="#FACC15"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="208" cy="112" r="10" fill="#FACC15" opacity="0.3" />
              <circle cx="232" cy="112" r="10" fill="#FACC15" opacity="0.3" />
              <circle cx="220" cy="105" r="10" fill="#FACC15" opacity="0.3" />
              <circle cx="220" cy="135" r="10" fill="#FACC15" opacity="0.3" />
              <circle cx="220" cy="120" r="6" fill="#EAB308" opacity="0.7" />
            </g>

            {/* Floare 4 - mare și elegantă */}
            <g opacity="0.6">
              <circle
                cx="300"
                cy="350"
                r="40"
                stroke="#FACC15"
                strokeWidth="3"
                fill="none"
              />
              <circle cx="275" cy="332" r="18" fill="#FACC15" opacity="0.4" />
              <circle cx="325" cy="332" r="18" fill="#FACC15" opacity="0.4" />
              <circle cx="300" cy="318" r="18" fill="#FACC15" opacity="0.4" />
              <circle cx="300" cy="382" r="18" fill="#FACC15" opacity="0.4" />
              <circle cx="280" cy="365" r="16" fill="#FACC15" opacity="0.3" />
              <circle cx="320" cy="365" r="16" fill="#FACC15" opacity="0.3" />
              <circle cx="300" cy="350" r="14" fill="#EAB308" opacity="0.8" />
            </g>

            {/* Floare 5 */}
            <g opacity="0.5">
              <circle
                cx="340"
                cy="480"
                r="22"
                stroke="#FACC15"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="328" cy="470" r="11" fill="#FACC15" opacity="0.3" />
              <circle cx="352" cy="470" r="11" fill="#FACC15" opacity="0.3" />
              <circle cx="340" cy="462" r="11" fill="#FACC15" opacity="0.3" />
              <circle cx="340" cy="498" r="11" fill="#FACC15" opacity="0.3" />
              <circle cx="340" cy="480" r="7" fill="#EAB308" opacity="0.7" />
            </g>

            {/* Floare 6 */}
            <g opacity="0.6">
              <circle
                cx="100"
                cy="450"
                r="30"
                stroke="#FACC15"
                strokeWidth="3"
                fill="none"
              />
              <circle cx="82" cy="438" r="14" fill="#FACC15" opacity="0.4" />
              <circle cx="118" cy="438" r="14" fill="#FACC15" opacity="0.4" />
              <circle cx="100" cy="426" r="14" fill="#FACC15" opacity="0.4" />
              <circle cx="100" cy="474" r="14" fill="#FACC15" opacity="0.4" />
              <circle cx="100" cy="450" r="10" fill="#EAB308" opacity="0.8" />
            </g>

            {/* Boboci și flori mici */}
            <circle cx="180" cy="280" r="8" fill="#FACC15" opacity="0.5" />
            <circle cx="175" cy="275" r="4" fill="#FACC15" opacity="0.3" />
            <circle cx="185" cy="275" r="4" fill="#FACC15" opacity="0.3" />

            <circle cx="260" cy="420" r="7" fill="#FACC15" opacity="0.4" />
            <circle cx="256" cy="416" r="3" fill="#FACC15" opacity="0.3" />
            <circle cx="264" cy="416" r="3" fill="#FACC15" opacity="0.3" />

            <circle cx="80" cy="320" r="6" fill="#FACC15" opacity="0.5" />
            <circle cx="320" cy="180" r="9" fill="#FACC15" opacity="0.6" />
            <circle cx="200" cy="540" r="7" fill="#FACC15" opacity="0.4" />

            {/* Frunze subtile */}
            <ellipse
              cx="50"
              cy="150"
              rx="8"
              ry="15"
              fill="#FACC15"
              opacity="0.2"
              transform="rotate(-20 50 150)"
            />
            <ellipse
              cx="130"
              cy="320"
              rx="10"
              ry="18"
              fill="#FACC15"
              opacity="0.25"
              transform="rotate(15 130 320)"
            />
            <ellipse
              cx="280"
              cy="240"
              rx="9"
              ry="16"
              fill="#FACC15"
              opacity="0.2"
              transform="rotate(-30 280 240)"
            />
            <ellipse
              cx="350"
              cy="380"
              rx="8"
              ry="14"
              fill="#FACC15"
              opacity="0.2"
              transform="rotate(25 350 380)"
            />
          </svg>
        </div>

        {/* Conținut text */}
        <div className="relative z-10 max-w-xl">
          <p
            className={`text-2xl sm:text-3xl md:text-4xl text-gray-300 text-center ${dancingScript.className} drop-shadow-lg`}
            aria-label="Descriere brand Flowers by Bella"
          >
            Emoție, rafinament și eleganță în fiecare petală.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
