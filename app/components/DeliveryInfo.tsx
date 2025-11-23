import React from "react";
import { FaTruck, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { dancingScript } from "../lib/fonts";

const DeliveryInfo = () => {
  return (
    <main
      className="mt-4 w-full bg-black md:mt-0 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 py-1 rounded-xl border-b-2 border-r-2 border-t-2 border-yellow-500/40 -lg"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <FaTruck className="truck-icon text-yellow-500 text-xl md:text-2xl" />

      <section className="flex-shrink-0 mb-1 md:mb-0">
        <span
          className={`${dancingScript.className} text-2xl font-semibold tracking-wide text-white`}
          itemProp="description"
        >
          Comenzi si Livrari la domiciliu
        </span>
      </section>

      <Link
        href="tel:0728361107"
        className="flex-shrink-0 flex items-center gap-2 px-3 py-1 rounded-full text-yellow-500 font-bold text-base "
        itemProp="telephone"
      >
        0728-361-107 <FaWhatsapp className="text-yellow-500 text-lg" />
      </Link>
    </main>
  );
};

export default DeliveryInfo;
