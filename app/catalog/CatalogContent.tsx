import Image from "next/image";
import Link from "next/link";
import React from "react";
import { dinamicCategory } from "../types/dinamicCat";
import {  caveat } from "../lib/fonts";


const CatalogCategories = () => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center py-12 bg-black">
      <h1
        className={` text-4xl md:text-4xl  font-bold text-yellow-500 mb-4 text-center`}
      >
        Categorii Flowers by Bella
      </h1>
      <p
        className={`${caveat.className} text-xl md:text-xl text-gray-300 mb-6 max-w-3xl text-center`}
      >
        Explorează categoriile noastre de buchete și aranjamente florale —
        fiecare creat cu grijă și rafinament pentru orice ocazie specială.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full px-3">
        {dinamicCategory.map((cat, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl p-3 flex flex-col items-center border-t-2 border-b-2 border-yellow-500 bg-black/70 overflow-hidden"
          >
            {/* Panglica roșie elegantă pe diagonală doar la primul card */}
            {idx === 0 && (
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 flex justify-start items-start">
                <div
                  className="absolute bg-gradient-to-r from-red-700 to-red-500 text-white font-bold uppercase tracking-widest text-sm md:text-base"
                  style={{
                    transform: "rotate(-45deg) translate(-65px, -15px)",
                    width: "220px",
                    textAlign: "center",
                    padding: "6px 0",
                    letterSpacing: "1px",
                  }}
                >
                  Oferte
                </div>
              </div>
            )}

            <Image
              src={cat.img}
              alt={cat.name}
              width={384}
              height={384}
              className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-xl mb-4"
            />
            {/* Card content */}
            <div
              className={`flex flex-col items-center w-full ${
                idx === 0
                  ? "justify-start min-h-[220px] flex-grow"
                  : "justify-between min-h-[220px]"
              }`}
            >
              <h2
                className={` text-2xl md:text-4xl font-semibold text-yellow-500 mb-2 text-center`}
              >
                {cat.name}
              </h2>
              <p
                className={`${caveat.className} text-gray-300 text-center mb-4 text-2xl md:text-2xl`}
              >
                {cat.desc}
              </p>
              {/* Pentru primul card, spațiu liber pentru a împinge butonul jos */}
              {idx === 0 && <div className="flex-grow" />}
            </div>
            <Link
              href={`/catalog/${cat.slug}`}
              className={`bg-yellow-700 text-white text-xl px-4 py-1 rounded-full font-semibold hover:bg-yellow-500 transition  mt-auto`}
            >
              Vezi detalii
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export default CatalogCategories;
