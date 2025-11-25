"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import SocialIcons from "../components/Icons";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer
      role="contentinfo"
      aria-label="Flowers by Bella Footer"
      className="w-full bg-black/90 text-white border-t border-yellow-400/20 py-4 shadow-[0_-2px_10px_rgba(255,215,0,0.1)]"
    >
      <main className="w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
        {/* Brand Section */}
        <section
          aria-label="Despre Flowers by Bella"
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-1"
        >
          <Image
            src="/logo.webp"
            alt="Logo Flowers by Bella"
            width={130}
            height={70}
            className="rounded-md"
          />
          <h2 className="text-3xl font-serif  text-yellow-400 tracking-wide">
            Flowers by Bella
          </h2>
          <p className="text-lg text-gray-300 italic max-w-xs">
            Emoție, rafinament și eleganță în fiecare petală.
          </p>
          <div className="flex items-center gap-2">
            <button
              className="text-yellow-400 underline text-base"
              onClick={() => setOpen(true)}
            >
              Politica de confidențialitate
            </button>
            <PrivacyPolicyModal open={open} onClose={() => setOpen(false)} />
          </div>
        </section>

        {/* Contact Section */}
        <address
          aria-label="Date de contact Flowers by Bella"
          className="flex flex-col items-center md:items-start space-y-1 text-gray-300 text-sm not-italic"
        >
          <h3 className="text-yellow-400 font-serif  text-sm uppercase tracking-wide">
            Contact
          </h3>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-400 text-base" />
            <a
              href="https://wa.me/40728361107"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition text-lg"
            >
              0728-361-107
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-400 text-base" />
            <a
              href="https://mail.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition text-lg"
            >
              flowers.artbybella@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-yellow-400 text-base" />
            <span className="text-lg">Bd. Independenței nr. 15A</span>
          </div>
        </address>

        {/* Social Section */}
        <nav
          aria-label="Rețele sociale Flowers by Bella"
          className="flex flex-col items-center md:items-end space-y-2"
        >
          <h3 className="text-yellow-400  font-serif text-sm uppercase tracking-wide">
            Urmărește-ne
          </h3>
          <SocialIcons />
          <div className="flex gap-4 mt-4 h-auto">
            <a
              href="https://reclamatiisal.anpc.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/anpc-sal.svg"
                alt="Florăria"
                width={90}
                height={90}
                className="w-52 h-24 object-contain"
              />
            </a>
            <a
              href="https://consumer-redress.ec.europa.eu/site-relocation_en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/anpc-sol.svg"
                alt="Glovo"
                width={90}
                height={90}
                className="w-52 h-24 object-contain"
              />
            </a>
          </div>
        </nav>
      </main>

      {/* Copyright */}
      <div className="mt-6 text-center text-yellow-500 text-base tracking-wide">
        &copy; {new Date().getFullYear()} Flowers by Bella — Toate drepturile
        rezervate.
      </div>
    </footer>
  );
};

export default Footer;
