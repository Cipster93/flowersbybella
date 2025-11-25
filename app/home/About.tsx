import React from "react";
import Image from "next/image";
import { caveat } from "../lib/fonts";

export default function About() {
  return (
    <main
      role="main"
      aria-label="Despre Flowers by Bella"
      className="relative w-full flex flex-col md:flex-row items-center justify-center py-20 px-6 md:px-20"
    >
      <section
        aria-label="Imagine Flowers by Bella"
        className="relative w-full md:w-1/2 bg-transparent h-80 md:h-[500px] flex items-center justify-center"
      >
        <Image
          src="/about.webp"
          alt="Flowers by Bella"
          className="object-cover rounded-xl"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </section>
      <section
        aria-label="Descriere Flowers by Bella"
        className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-16 text-gray-300 border-r-2 border-yellow-500 px-6"
      >
        <header>
          <h1 className="text-4xl sm:text-3xl md:text-6xl font-bold text-yellow-500 mb-4 text-center ">
            Flowers by Bella
          </h1>
        </header>
        <p
          className={`text-xl sm:text-2xl md:text-2xl leading-relaxed ${caveat.className}`}
        >
          Un loc unde visele înfloresc în fiecare petală, iar pasiunea pentru
          frumos se transformă în artă. Fiecare floare care ajunge în mâinile
          noastre este atent selectată, fiecare aranjament se naște din
          inspirație și dragostea creatorului său, iar fiecare compoziție spune
          o poveste unică. Aici, delicatețea întâlnește eleganța, culorile și
          aromele trezesc emoții, iar natura efemeră a florii devine un moment
          memorabil. Flowers by Bella nu este doar o florărie: este un vis
          devenit realitate, un omagiu adus naturii și artei de a transmite
          sentimente prin frumusețe.
        </p>
      </section>
    </main>
  );
}
