import React from "react";
import DeliveryInfo from "./DeliveryInfo";
import Link from "next/link";
import { dinamicCategory } from '../types/dinamicCat';

export default function Toolbar() {
  return (
    <nav
      role="navigation"
      aria-label="Meniu principal Flowers by Bella"
      className="w-full bg-black/90 py-4 px-6 flex flex-col md:flex-row justify-around items-center border-t-2 border-yellow-400/80"
    >
      <ul className="flex flex-wrap gap-2 md:gap-2 justify-center md:justify-start">
        <li>
          <Link
            href="/catalog"
            className="px-4 py-2 rounded-sm bg-yellow-500 text-black font-semibold border-b-2 border-yellow-400/80 hover:bg-yellow-400 transition"
          >
            Catalog
          </Link>
        </li>
        {dinamicCategory.map((cat, idx) => (
          <li key={idx}>
            <Link
              href={`/catalog/${cat.slug}`}
              className="px-4 py-2 rounded-sm bg-black/70 border-b-2 border-yellow-400/30 hover:border-yellow-400/80 transition"
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
