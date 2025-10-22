'use client'

import React from "react";
import { useQRCode } from "next-qrcode";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTruck, FaPhoneAlt, FaSeedling, FaGift, FaRegCalendarAlt, FaLeaf } from "react-icons/fa";

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
        className="w-full flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24 rounded-3xl shadow-[0_0_25px_rgba(255,215,0,0.2)] p-6 md:p-16 relative bg-black/70"
      >
        <motion.div
          className="flex-1 space-y-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <header>
            <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-yellow-400 tracking-wide">
              Catalogul nostru floral
            </h2>
          </header>
          <p className="text-gray-200 text-lg leading-relaxed">
            Explorează colecția{" "}
            <span className="text-yellow-400 font-semibold">Flowers by Bella</span>
            — buchete elegante, aranjamente florale pentru orice ocazie și cadouri care transmit emoție și rafinament.
          </p>

          <ul className="text-white/90 text-lg space-y-2 list-none pl-0" aria-label="Tipuri de produse">
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

          <p className="text-white/80 italic text-md mt-6">
            Scanează codul QR sau apasă pe el pentru a vizualiza catalogul complet.
          </p>
        </motion.div>

        {/* Codul QR */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
              <span className="block mt-5 text-yellow-400 font-serif text-lg tracking-wide group-hover:text-yellow-300 transition">
                Vezi catalogul
              </span>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Secțiunea livrări */}
      <motion.section
        aria-label="Informații livrări și contact"
        className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center bg-black/60 border border-yellow-500/30 rounded-full px-10 py-6 shadow-[0_0_25px_rgba(255,215,0,0.1)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4">
          <FaTruck className="text-yellow-400 text-2xl md:text-3xl drop-shadow" />
          <span className="font-semibold text-lg md:text-xl tracking-wide text-white">
            Livrări la domiciliu & comenzi telefonice
          </span>
        </div>
        <a
          href="tel:0728361107"
          className="flex items-center gap-2 text-yellow-400 font-bold text-lg md:text-xl border border-yellow-400/50 rounded-full px-5 py-2"
          aria-label="Suna acum Flowers by Bella"
        >
          <FaPhoneAlt />
          0728-361-107
        </a>
      </motion.section>
    </main>
  );
}
