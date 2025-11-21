"use client";
import React from "react";
import DeliveryInfo from "./DeliveryInfo";
import Link from "next/link";
import { dinamicCategory } from "../types/dinamicCat";
import { dancingScript } from "../lib/fonts";
import { usePathname } from "next/navigation";

export default function Toolbar() {
    const pathname = usePathname();

  return (
    <nav
      role="navigation"
      aria-label="Meniu principal Flowers by Bella"
      className="w-full bg-black py-6 flex flex-col md:flex-row justify-between px-6 items-center border-t-2 border-yellow-400/80"
    >
      <ul className="flex flex-wrap gap-6 md:gap-2 justify-center md:justify-start">
        <li>
          <Link
            href="/"
            className={`text-xl px-4 py-2 rounded-sm font-semibold border-b-2 transition ${dancingScript.className} ${pathname === '/' ? 'bg-yellow-400 text-black border-yellow-400/80' : 'text-yellow-500 border-yellow-400/30 hover:border-yellow-400/80'}`}
          >
            Acasa
          </Link>
        </li>
        <li>
          <Link
            href="/catalog"
            className={`text-xl px-4 py-2 rounded-sm font-semibold border-b-2 transition ${dancingScript.className} ${pathname === '/catalog' ? 'bg-yellow-400 text-black border-yellow-400/80' : 'text-yellow-500 border-yellow-400/30 hover:border-yellow-400/80'}`}
          >
            Catalog
          </Link>
        </li>
        {dinamicCategory.map((cat, idx) => (
          <li key={idx}>
            <Link
              href={`/catalog/${cat.slug}`}
              className={`text-lg px-4 py-2 rounded-sm font-semibold border-b-2 transition ${dancingScript.className} ${pathname === `/catalog/${cat.slug}` ? "bg-yellow-400 text-black border-yellow-400/80" : "bg-black/70 text-yellow-500 border-yellow-400/30 hover:border-yellow-400/80"}`}
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>

      <DeliveryInfo />
    </nav>
  )
}
