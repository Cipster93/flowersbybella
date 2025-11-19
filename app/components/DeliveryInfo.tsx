import React from "react";
import { FaTruck, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { dancingScript } from "../lib/fonts";

const DeliveryInfo = () => {
  return (
    <main
      className="mt-4 w-auto bg-black md:mt-0 flex flex-col items-center justify-center text-center sm:flex-row sm:justify-center gap-3 sm:gap-4 py-1 rounded-xl border-b-2 border-r-2 border-t-2 border-yellow-500/40 shadow-lg"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <FaTruck className="truck-icon text-yellow-500 text-xl md:text-2xl drop-shadow" />

      <section>
        <span
          className={`${dancingScript.className} text-2xl font-semibold tracking-wide text-white`}
          itemProp="description"
        >
          Comenzi si Livrari la domiciliu
        </span>
      </section>

      <Link
        href="tel:0728361107"
        className="flex items-center gap-2 px-3 py-1 rounded-full text-yellow-500 font-bold text-base shadow"
        itemProp="telephone"
      >
        0728-361-107 <FaWhatsapp className="text-yellow-500 text-lg" />
      </Link>
    </main>
  );
};

export default DeliveryInfo;
