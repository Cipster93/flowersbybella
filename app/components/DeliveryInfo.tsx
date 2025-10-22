import React from "react";
import { FaTruck, FaWhatsapp } from "react-icons/fa";
import "../globals.css";
import Link from "next/link";

const DeliveryInfo = () => {
  return (
    <main
      className="mt-4 md:mt-0 flex items-center gap-4 px-4 py-2 rounded-xl border-b-2 border-r-2 border-t-2 border-yellow-500/40 shadow-lg whitespace-nowrap"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <FaTruck className="truck-icon text-yellow-500 text-xl md:text-2xl drop-shadow" />
      <section>
        <span className="font-semibold tracking-wide text-white" itemProp="description">
          Livrari la domiciliu
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