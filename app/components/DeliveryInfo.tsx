import React from "react";
import { FaTruck, FaWhatsapp } from "react-icons/fa";

const DeliveryInfo = () => {
  return (
    <main
      className="mt-4 w-full bg-black md:mt-0 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 py-1 rounded-xl border-b-2 border-r-2 border-t-2 border-yellow-500/40"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <FaTruck className="truck-icon text-yellow-500 text-xl md:text-2xl" />

      <section className="flex-shrink-0 mb-1 md:mb-0">
        <span
          className={` text-2xl font-semibold tracking-wide text-white`}
          itemProp="description"
        >
          Comenzi si Livrari la domiciliu
        </span>
      </section>
        <span className={`text-yellow-500 text-xl `}>0728-361-107</span> <FaWhatsapp className="text-yellow-500 text-2xl" />
    </main>
  );
};

export default DeliveryInfo;
