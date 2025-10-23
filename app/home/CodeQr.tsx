"use client";

import React from "react";
import { useQRCode } from "next-qrcode";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaTruck,
  FaPhoneAlt,
  FaSeedling,
  FaGift,
  FaRegCalendarAlt,
  FaLeaf,
} from "react-icons/fa";
import { dancingScript, caveat } from "../lib/fonts";

export default function CatalogQRCode() {
  const { Image: QRImage } = useQRCode();
  const url = "https://google.com"; // înlocuiește cu linkul real

  return (
    <main
      role="main"
      aria-label="Catalog Flowers by Bella"
      className="w-full flex flex-col items-center justify-center bg-black text-white py-6 px-2 md:px-16 overflow-hidden"
    >
      {/* Secțiunea principală catalog */}
      <section
        aria-label="Prezentare Catalog Flowers by Bella"
        className="relative w-full flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24 rounded-3xl shadow-[0_0_25px_rgba(255,215,0,0.2)] p-6 md:p-16 bg-black/70 overflow-hidden"
      >
        {/* Linii decorative pe fundal */}
        <svg
          className="absolute top-0 right-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
        >
          <path
            d="M600 0 C650 150 750 250 800 400"
            stroke="#FACC15"
            strokeWidth="4"
            fill="none"
            opacity="0.45"
          />
          <path
            d="M500 50 C650 200 750 350 800 550"
            stroke="#FACC15"
            strokeWidth="5"
            fill="none"
            opacity="0.35"
          />
          <path
            d="M550 150 C700 300 750 450 800 600"
            stroke="#FACC15"
            strokeWidth="3"
            fill="none"
            opacity="0.25"
          />
        </svg>

        {/* Conținut text și listă */}
        <motion.div
          className="flex-1 space-y-8 relative z-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <header>
            <h2
              className={`text-4xl md:text-6xl font-serif font-extrabold text-yellow-400 tracking-wide ${dancingScript.className}`}
            >
              Catalogul nostru floral
            </h2>
          </header>

          <p
            className={`text-gray-200 text-2xl leading-relaxed ${dancingScript.className}`}
          >
            Explorează colecția{" "}
            <span className="text-yellow-400 font-semibold">
              Flowers by Bella
            </span>
            — buchete elegante, aranjamente florale pentru orice ocazie și
            cadouri care transmit emoție și rafinament.
          </p>

          <ul
            className={`text-white/90 text-xl space-y-2 list-none pl-0 ${caveat.className}`}
            aria-label="Tipuri de produse"
          >
            <li className="flex items-center gap-3">
              <FaSeedling className="text-yellow-400" />
              Buchete clasice & moderne
            </li>
            <li className="flex items-center gap-3">
              <FaRegCalendarAlt className="text-yellow-400" />
              Aranjamente pentru evenimente speciale
            </li>
            <li className="flex items-center gap-3">
              <FaGift className="text-yellow-400" />
              Cadouri florale personalizate
            </li>
            <li className="flex items-center gap-3">
              <FaLeaf className="text-yellow-400" />
              Abonamente florale corporate
            </li>
          </ul>

          <p
            className={`text-white/80 italic text-xl mt-6 ${dancingScript.className}`}
          >
            Scanează codul QR sau apasă pe el pentru a vizualiza catalogul
            complet.
          </p>
        </motion.div>

        {/* Codul QR */}
        <div
          className="flex-1 flex justify-center items-center relative z-10"
        >
          <Link href="/catalog" aria-label="Vezi catalogul Flowers by Bella">
            <div className="p-8 bg-black/80 rounded-3xl flex flex-col items-center">
              <QRImage
                text={url}
                options={{
                  type: "image/png",
                  errorCorrectionLevel: "M",
                  margin: 2,
                  scale: 10,
                  width: 260,
                  color: {
                    dark: "#1a1a1a",
                    light: "#FFF9E5",
                  },
                }}
              />
              <span
                className={`block mt-5 text-yellow-400 font-serif text-xl tracking-wid ${dancingScript.className}`}
              >
                Vezi catalogul
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Secțiunea livrări */}
      <section
        aria-label="Informații livrări și contact"
        className="mt-16 flex flex-col items-center justify-center gap-4 sm:gap-6 md:flex-row md:gap-10 text-center bg-black/60 border border-yellow-500/30 rounded-2xl px-4 py-5 sm:px-10 sm:py-6 shadow-[0_0_25px_rgba(255,215,0,0.1)]"
      >
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <FaTruck className="text-yellow-400 text-xl sm:text-2xl md:text-3xl drop-shadow" />
          <span
            className={`${caveat.className} font-semibold text-base sm:text-lg md:text-3xl tracking-wide text-white`}
          >
            Livrări la domiciliu & comenzi telefonice
          </span>
        </div>
        <p
          className="flex items-center gap-2 text-yellow-400 font-bold text-base sm:text-lg md:text-xl border border-yellow-400/50 rounded-full px-4 py-2 sm:px-5"
          aria-label="Suna acum Flowers by Bella"
        >
          <FaPhoneAlt />
          0728-361-107
        </p>
      </section>
    </main>
  );
}
