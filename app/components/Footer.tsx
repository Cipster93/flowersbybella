'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import SocialIcons from '../components/Icons'
import PrivacyPolicyModal from './PrivacyPolicyModal'

const Footer = () => {
  const [open, setOpen] = useState(false)

  return (
    <footer
      role="contentinfo"
      aria-label="Flowers by Bella Footer"
      className="w-full bg-black/90 text-white border-t border-yellow-400/20 py-4 shadow-[0_-2px_10px_rgba(255,215,0,0.1)]"
    >
      <main className="w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
        {/* Brand Section */}
        <section aria-label="Despre Flowers by Bella" className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <Image src='/logo.webp' alt="Logo Flowers by Bella" width={130} height={70} className="rounded-md" />
          <h2 className="text-2xl font-serif font-bold text-yellow-400 tracking-wide">Flowers by Bella</h2>
          <p className="text-xs text-gray-300 italic max-w-xs">
            Emotie, rafinament si eleganta in fiecare petala.
          </p>
          <div className="flex items-center gap-2">
            <button
              className="text-yellow-400 underline text-xs"
              onClick={() => setOpen(true)}
            >
              Politica de confidentialitate
            </button>
            <PrivacyPolicyModal open={open} onClose={() => setOpen(false)} />
          </div>
        </section>

        {/* Contact Section */}
        <address aria-label="Date de contact Flowers by Bella" className="flex flex-col items-center md:items-start space-y-1 text-gray-300 text-sm not-italic">
          <h3 className="text-yellow-400 font-semibold text-sm uppercase tracking-wide">Contact</h3>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-400 text-sm" />
            <a href="tel:+40728361107" className="hover:text-yellow-400 transition">
              0728-361-107
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-400 text-sm" />
            <a href="mailto:a@yahoo.com" className="hover:text-yellow-400 transition">
              a@yahoo.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-yellow-400 text-sm" />
            <span>Bul. Independentei nr. 15A</span>
          </div>
        </address>

        {/* Social Section */}
        <nav aria-label="Retele sociale Flowers by Bella" className="flex flex-col items-center md:items-end space-y-2">
          <h3 className="text-yellow-400 font-semibold text-sm uppercase tracking-wide">Urmareste-ne</h3>
          <SocialIcons />
        </nav>
      </main>

      {/* Copyright */}
      <div className="mt-6 text-center text-yellow-500 text-[10px] tracking-wide">
        &copy; {new Date().getFullYear()} Flowers by Bella — Toate drepturile rezervate.
      </div>
    </footer>
  )
}

export default Footer
