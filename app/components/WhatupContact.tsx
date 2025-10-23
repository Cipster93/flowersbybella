'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatupContact() {
    const [show, setShow] = useState(true);

    return (
        <aside
            role="complementary"
            aria-label="Contact WhatsApp Flowers by Bella"
            className="relative flex items-center gap-2 text-green-500 text-4xl cursor-pointer group"
            onMouseEnter={() => setShow(true)}
        >
            <Link
                href="https://wa.me/40712345678"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Deschide conversație WhatsApp"
                className="transition-transform duration-300 group-hover:scale-110 group-hover:text-green-400 drop-shadow-lg"
            >
                <FaWhatsapp />
            </Link>

            {show && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Detalii contact WhatsApp"
                    className="absolute left-0 bottom-full -translate-x-[90%] mb-4 z-50 bg-black text-white rounded-2xl p-5 min-w-[320px] shadow-2xl flex flex-col items-start animate-fade-in"
                >
                    <button
                        className="absolute top-2 right-2 text-yellow-500 text-2xl font-bold rounded-full bg-black/40 px-2 py-0.5 shadow-md"
                        onClick={() => setShow(false)}
                        aria-label="Închide detalii WhatsApp"
                    >
                        ×
                    </button>

                    <header className="flex items-center gap-2 mb-2">
                        <FaWhatsapp className="text-green-400 text-2xl drop-shadow" />
                        <h2 className="font-bold text-yellow-400 text-lg tracking-wide">Contact WhatsApp</h2>
                    </header>

                    <p className="text-sm mb-2 font-medium text-gray-200">
                        Comenzi rapide, întrebări sau detalii despre flori și aranjamente.
                    </p>

                    <p className="text-sm mb-1">
                        <span className="font-semibold text-yellow-400">Număr:</span>
                        <Link
                            href="https://wa.me/40712345678"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-500 underline ml-2 font-bold"
                            aria-label="Trimite mesaj WhatsApp la 0728-361-107"
                        >
                            0728-361-107
                        </Link>
                    </p>

                    <p className="text-xs text-gray-300 mt-2 italic">
                        Răspundem rapid pe WhatsApp!
                    </p>
                </div>
            )}
        </aside>
    )
}
