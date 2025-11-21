"use client";
import React, { useState } from "react";
import DeliveryInfo from "./DeliveryInfo";
import Link from "next/link";
import { dinamicCategory } from "../types/dinamicCat";
import { dancingScript } from "../lib/fonts";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Toolbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      role="navigation"
      aria-label="Meniu principal Flowers by Bella"
      className="w-full bg-black py-6 flex flex-col md:flex-row justify-between px-6 items-center border-t-2 border-yellow-400/80"
    >
      <div className="w-full flex justify-between items-center md:hidden mb-4">
        <span className={`text-xl text-yellow-400 font-semibold ${dancingScript.className}`}>
          Catalog
        </span>
        <button
          className="text-yellow-400 text-2xl"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Deschide meniul mobil"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <ul
        className={`flex flex-col md:flex-row gap-6 md:gap-2 justify-center md:justify-start w-full
          overflow-hidden transition-[max-height,opacity,margin] duration-800 ease-in-out
          md:overflow-visible md:transition-none
          ${menuOpen ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0 md:max-h-full md:opacity-100"}
        `}
      >
        <li>
          <Link
            href="/"
            className={`text-xl px-4 py-2 rounded-sm font-semibold border-b-2 transition ${dancingScript.className} ${pathname === '/' ? 'bg-yellow-400 text-black border-yellow-400/80' : 'text-yellow-500 border-yellow-400/30 hover:border-yellow-400/80'}`}
            onClick={() => setMenuOpen(false)}
          >
            Acasa
          </Link>
        </li>
        <li>
          <Link
            href="/catalog"
            className={`text-xl px-4 py-2 rounded-sm font-semibold border-b-2 transition ${dancingScript.className} ${pathname === '/catalog' ? 'bg-yellow-400 text-black border-yellow-400/80' : 'text-yellow-500 border-yellow-400/30 hover:border-yellow-400/80'}`}
            onClick={() => setMenuOpen(false)}
          >
            Catalog
          </Link>
        </li>
        {dinamicCategory.map((cat, idx) => (
          <li key={idx}>
            <Link
              href={`/catalog/${cat.slug}`}
              className={`text-lg px-4 py-2 rounded-sm font-semibold border-b-2 transition ${dancingScript.className} ${pathname === `/catalog/${cat.slug}` ? "bg-yellow-400 text-black border-yellow-400/80" : "bg-black/70 text-yellow-500 border-yellow-400/30 hover:border-yellow-400/80"}`}
              onClick={() => setMenuOpen(false)}
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Delivery Info */}
      <div className="mt-4 md:mt-0">
        <DeliveryInfo />
      </div>
    </nav>
  );
}
